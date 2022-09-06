import React from 'react';
import Ad from '../Advertice/Ad';

import Banner from '../Banner/Banner';
import CameraParts from './CameraParts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Ad/>
            
            <CameraParts/>
            <Review/>
        </div>
    );
};

export default Home;