import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const ManageOrder = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const [seacrchText , setSearchText] = useState('')
    const { data: paidOrders, isLoading, refetch } = useQuery('paidOrders', () => fetch('https://manufacturer-0397.onrender.com/orderparts', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    
    if (isLoading) {
        return <Loading></Loading>
    }

 const reverseData = paidOrders.reverse()
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://manufacturer-0397.onrender.com/myOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                })

        }
    }
    const handleConfirm = ()=>{

    }
    const handleSearch = event =>{
        setSearchText(event.target.value)
    }
    return (
        <div>
            <div class="overflow-x-auto w-full mb-24 ">
                    <table class="table w-full">
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            
                                        </th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th><div class="form-control">
                                            <div class="input-group">
                                                <input onChange={handleSearch} type="text" placeholder="Search…" class="input input-bordered" />
                                                <button class="btn btn-square">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                                </button>
                                            </div>
                                        </div></th>
                                        <th>Customer Email</th>
                                        <th>Payment Status</th>
                                    </tr>
                                </thead>

                                {
                                     reverseData?.filter(value =>{
                                        if(seacrchText === "" ){
                                            return value;
                                        }else if(value.title.toLowerCase().includes(seacrchText.toLowerCase())){
                                            return value 
                                            
                                        }
                                              
                                    }).map(product => <>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    
                                                </th>
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        
                                                        <div>
                                                            <div class="font-bold">{product.title}</div>
                                                            
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {product.quantity}

                                                </td>
                                                <td>{product.price}$</td>
                                                <td>
                                                    {!product.paid && <button onClick={() => handleDelete(product._id)} class="btn btn-ghost btn-xs">Cancel</button>}
                                                    
                                                    {
                                                        product.paid && <button onClick={() => handleConfirm(product._id)} class="btn btn-ghost btn-xs">Confirm</button>
                                                    }
                                                </td>
                                                <td><p>{product.email}</p></td>
                                                <td>
                                                    {(admin && !product.paid) && <button  class="btn btn-ghost btn-xs">Message For Payment</button>}
                                                    {product.paid && <span  class="text-cyan-400 font-bold">Paid</span>}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>

                                    )
                                }



                            </table>
                        </div>


                    </table>
                </div>

        </div>
    );
};

export default ManageOrder;