import React from 'react';
import BannerSlider from '../../../components/Slider/BannerSlider';
import Advertice from '../../Advertice/Advertice';
import Categories from '../../Categories/Categories';
import Explor from '../../Explor/Explor';
import Feature from '../../Feature/Feature';
import Whatclient from '../../Whatclient/Whatclient';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <BannerSlider />
            <Advertice />
            <Feature />
            <Whatclient />
            <Explor />
        </div>
    );
};

export default Home;