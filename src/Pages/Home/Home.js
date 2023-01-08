import React, { useState } from 'react';
import Banner2 from '../Banner/Banner2';
import CameraParts from './CameraParts';
import bgimage from '../../Images/hhhh.png'
import './CameraParts.css'
import Subscription from '../Subscription/Subscription';
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
        <div className='relative overflow-x-hidden overflow-y-hidden'>

            <div  className=' grid justify-items-center'>
                < Banner2 ></Banner2>
                <img style={{ transform: `scale(${countT})`,top:"1200px" }}  className={count ?  "element absolute hidden md:block lg:block": "absolute hidden md:block lg:block element2"} src={bgimage} />
                <CameraParts />
                <Subscription/>
            </div>
        </div>
    );
};

export default Home;