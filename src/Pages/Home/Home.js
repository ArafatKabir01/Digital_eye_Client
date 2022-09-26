import React from 'react';
import Ad from '../Advertice/Ad';

import Banner from '../Banner/Banner';
import BusinessSummry from './BusinessSummry';
import CameraParts from './CameraParts';
import ContractUs from './ContractUs';
import CreatorFeed from './CreatorFeed';
import Review from './Review';

const Home = () => {
    return (
        <div className='reviews'>
            <Banner/>
            <BusinessSummry/>
            <CreatorFeed></CreatorFeed>
            <CameraParts/>
            <Review/>
            <ContractUs/>
        </div>
    );
};

export default Home;