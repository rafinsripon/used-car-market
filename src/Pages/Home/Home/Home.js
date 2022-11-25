import React from 'react';
import Categories from '../../Categories/Categories';
import Feature from '../../Feature/Feature';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Feature />
        </div>
    );
};

export default Home;