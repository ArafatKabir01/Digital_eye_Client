import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import UseParts from '../Hooks/UseParts';
import './CameraParts.css'
import productImg from "../../Images/pngwing.png";
const CameraParts = () => {
    const [allParts, setParts] = useState([])
    useEffect(()=>{
        fetch('https://manufacturer-0397.onrender.com/allParts')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const navigateToProductInfo = id => {
        navigate(`/purchase/${id}`)

    }
    const [admin] = useAdmin(user);
    return (
        <div >
            <h2 className='text-5xl font-bold text-orange-700	 text-center mb-8 pt-12 '>New Arrivale</h2>
            <div className='container m-auto  grid grid-cols md:grid-cols-4 lg:grid-cols-4 gap-4 pb-8'>
                {
                    allParts.map(parts => <div class="glassBox my-5">
                    <div class="glassBox__imgBox">
                        <img  src={productImg} alt="" />
                    </div>
                    <div >
                    <div data-aos="fade-down-right" className="">
                            <h2 className=" text-amber-400">{parts?.title}</h2>
                            <div className='w-64 font-bold	leading-6 text-black'>
                                <p>Price : {parts?.price}$</p>
                                <p>Available quantity : {parts?.availableQuantity} pic</p>
                            </div>
                            <div className="card-actions  justify-end my-2">
                                {!admin && <button onClick={() => navigateToProductInfo(parts?._id)} className="btn btn-primary">Buy Now</button>}
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