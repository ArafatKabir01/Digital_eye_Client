import React, { useEffect, useState } from 'react';
import Banner2 from '../Banner/Banner2';
import CameraParts from './CameraParts';
import './CameraParts.css'
import Subscription from '../Subscription/Subscription';
import Footer from '../Shared/Footer';
import ContactUs from './ContactUs';
import ScrollToTop from '../Shared/ScrollToTop';
const Home = () => {
    const [count, setCount] = useState(false);
    const [countT, setCountT] = useState(0);

    window.addEventListener('scroll', () => {

        setCountT((window.scrollY / 800));
        if (window.scrollY / 800 > 2.8) {
            setCount(true)
        } else {
            setCount(false)
        }

    });

    return (
        <div className='relative scroll-smooth overflow-x-hidden overflow-y-hidden'>

            <div className=' grid justify-items-center'>
                <ScrollToTop/>
                <Banner2 ></Banner2>
                <CameraParts />
                <Subscription />
                <ContactUs/>
            </div>
            <Footer />
        </div>
    );
};

export default Home;