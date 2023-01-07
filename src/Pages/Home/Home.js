import React, { useState } from 'react';



import Banner2 from '../Banner/Banner2';
import BusinessSummry from './BusinessSummry';
import CameraParts from './CameraParts';
import ContractUs from './ContractUs';
import CreatorFeed from './CreatorFeed';
import Review from './Review';
import bgimage from '../../Images/hhhh.png'
import './CameraParts.css'
const Home = () => {
    const [count , setCount] =  useState(false);
    const [countT , setCountT] =  useState(0);

   
    window.addEventListener('scroll', () => {
        setCountT((window.scrollY/500));

        if(window.scrollY/500 > 3){
            setCount(true)
        }else{
            setCount(false)
        }
        
    });
    
    console.log(count)
    return (
        <div className='relative overflow-x-hidden'>

            <div style={{backgroundColor: "#131519"}}  className=' grid justify-items-center'>
                < Banner2 ></Banner2>
                <img style={{ transform: `scale(${countT})`,top:"1200px" }}  className={count ?  "element absolute hidden md:block lg:block": "absolute hidden md:block lg:block element2"} src={bgimage} />
                {/* <BusinessSummry/> */}
            
                <CameraParts />
                {/* <CreatorFeed></CreatorFeed> */}
                <Review />
                <ContractUs />
            </div>
        </div>
    );
};

export default Home;