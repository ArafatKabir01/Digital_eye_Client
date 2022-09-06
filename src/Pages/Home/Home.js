import React from 'react';
import Ad from '../Advertice/Ad';

import Banner from '../Banner/Banner';
import BusinessSummry from './BusinessSummry';
import CameraParts from './CameraParts';
import ContractUs from './ContractUs';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Ad/>
            <BusinessSummry/>
            <CameraParts/>
            <Review/>
            <ContractUs/>
        </div>
    );
};

export default Home;