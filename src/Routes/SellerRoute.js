import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/BigSpinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useState(user?.email)
    const location = useLocation();

    if(loading){
        return <Spinner />
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />;

};

export default SellerRoute;