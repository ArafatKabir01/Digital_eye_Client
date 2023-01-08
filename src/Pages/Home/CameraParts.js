import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import './CameraParts.css'
import productImg from "../../Images/pngwing.png";

import Loading from '../Shared/Loading';
const CameraParts = () => {
    const [allParts, setParts] = useState([])
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const axios = require('axios');
    const navigate = useNavigate();

   useEffect(()=>{
    axios.get('https://manufacturer-0397.onrender.com/allParts')
    .then(function (response) {
        // handle success
        setParts(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
   },[])
    if (!allParts) {
        return <Loading />
    }
    const navigateToProductInfo = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div >
            <h2 className='text-5xl font-bold text-orange-700 text-center mb-8 pt-12 '>New Arrivale</h2>
            <div className='grid grid-cols md:grid-cols-4 lg:grid-cols-4 justify-items-center gap-2'>
                {
                    allParts.map(parts => <div className="glassBox my-5">
                        <div className="glassBox__imgBox">
                            <img src={productImg} alt="" />
                        </div>
                        <div >
                            <div data-aos="fade-down-right" className="">
                                <div className='h-32 '>
                                    <h2 className=" text-amber-400 px-3 glassBox__title">{parts?.title}</h2>
                                    <div className='w-64 font-bold p-4 text-slate-400 leading-6 text-black'>
                                        <p>Price : {parts?.price}$</p>
                                        <p>Available quantity : {parts?.availableQuantity} pic</p>
                                    </div>
                                </div>
                                <div className="card-actions  justify-end my-2">
                                    {!admin && <button onClick={() => navigateToProductInfo(parts?._id)} className="btn btn-sm m-5">Buy Now</button>}
                                </div>
                            </div>
                        </div>
                    </div>

                    )
                }

            </div>
        </div>
    );
};

export default CameraParts;