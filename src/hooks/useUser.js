import React, { useEffect, useState } from 'react';

const useUser = (email) => {
    const [isUser, setIsUser] = useState('');
    const [isUserLoading, setUserLoading] = useState(true)
    
    useEffect(() => {
        if(email){
         fetch(`https://used-car-resale-market-server.vercel.app/users/user/${email}`)
         .then(res => res.json())
         .then(data => {
             console.log(data);
             setIsUser(data.isUser)
             setUserLoading(false);
         })
        }
     },[email])

     return [isUser, isUserLoading];
};

export default useUser;