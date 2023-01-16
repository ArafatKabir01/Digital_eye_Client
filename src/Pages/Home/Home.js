import React, { useState } from 'react';
import Banner2 from '../Banner/Banner2';
import CameraParts from './CameraParts';
import bgimage from '../../Images/hhhh.png'
import './CameraParts.css'
import Subscription from '../Subscription/Subscription';
import Footer from '../Shared/Footer';
const Home = () => {
    const [count , setCount] =  useState(false);
    const [countT , setCountT] =  useState(0);
     
    window.addEventListener('scroll', () => {

        setCountT((window.scrollY/800));
        if(window.scrollY/800 > 2.8){
            setCount(true)
        }else{
            setCount(false)
        }
        
    });
    
    console.log(count)
    return (
        <div className='relative scroll-smooth overflow-x-hidden overflow-y-hidden '>

            <div  className=' grid justify-items-center'>
                < Banner2 ></Banner2>
                <CameraParts />
                
                <Subscription/>
                
               
            </div>
            <Footer/>
        </div>
    );
};

export default Home;