import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/BigSpinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider';

const UserRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isUser, isUserLoading] = useState(user?.email)
    const location = useLocation();

    if(loading){
        return <Spinner />
    }
    if(user && isUser){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />;
};

export default UserRoute;