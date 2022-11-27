import React from 'react';

const HomeDashboard = () => {
    return (
        <div className='flex justify-between items-center h-full w-full text-secondary'>
            <div className='flex justify-center items-center w-full'>
            <span className='text-6xl font-bold'>WelCome </span>
            <div className='flex'><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
            <span className='text-6xl font-bold'>ur Dashbord</span></div>
            </div>
        </div>
    );
};

export default HomeDashboard;