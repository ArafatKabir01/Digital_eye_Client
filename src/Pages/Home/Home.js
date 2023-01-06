import React, { useState } from 'react';
import Ad from '../Advertice/Ad';


import Banner2 from '../Banner/Banner2';
import BusinessSummry from './BusinessSummry';
import CameraParts from './CameraParts';
import ContractUs from './ContractUs';
import CreatorFeed from './CreatorFeed';
import Review from './Review';
import bgimage from '../../Images/hhhh.png'
const Home = () => {
    const [count , setCount] =  useState(0);
    const [countT , setCountT] =  useState(0);

   
    window.addEventListener('scroll', () => {
        setCountT((window.scrollY/500));
        
    });

    console.log(countT)
    return (
        <div className='relative overflow-x-hidden'>

            <div  className='bg-slate-300	'>
                < Banner2 ></Banner2>
                <img style={{ transform: `scale(${countT})` }} className='absolute hidden md:block lg:block' src={bgimage} />
                {/* <BusinessSummry/>
            <CreatorFeed></CreatorFeed> */}
                <CameraParts />

                <Review />
                <ContractUs />
            </div>
        </div>
    );
};

export default Home;