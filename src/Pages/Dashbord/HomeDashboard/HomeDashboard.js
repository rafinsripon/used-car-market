import React from 'react';

const HomeDashboard = () => {
    return (
        <div className='flex justify-between items-center h-full w-full text-secondary'>
            <div className='flex flex-wrap justify-center items-center w-full'>
            <span className='text-6xl font-bold lg:text-gray-900 text-white'>WelCome </span>
            <div className='flex justify-center items-center'><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 lg:border-gray-900 border-primary"></div>
            <span className='text-6xl font-bold text-white lg:text-gray-900'>ur Dashbord</span></div>
            </div>
        </div>
    );
};

export default HomeDashboard;