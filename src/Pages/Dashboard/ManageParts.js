import React, { useEffect, useState } from 'react';
import UseParts from '../Hooks/UseParts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ManageParts = () => {
    const [products, setProducts] = UseParts([])
    const [seacrchText , setSearchText] = useState('')
    const [seacrchResult , setSearchREsult] = useState([])
    const navigate = useNavigate();
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://manufacturer-0397.onrender.com/parts/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                    toast.success('Delete successfull', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
        }
    }
    const handleUpdate = id => {
        navigate(`/updateProduct/${id}`)
    }

    const handleSearch = event =>{
        setSearchText(event.target.value)
    }

    return (
        <div className='mb-24 '>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full ">
                                <thead>
                                    <tr>
                                        
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
                                        <th></th>
                                    </tr>
                                </thead>
                                {products.filter(value =>{
                                        if(seacrchText === "" ){
                                            return value;
                                        }else if(value.title.toLowerCase().includes(seacrchText.toLowerCase())){
                                            return value 
                                            
                                        }
                                              
                                    }).map(product => <>
                                        <tbody>
                                            <tr>
                                                
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        <div class="avatar">
                                                            <div class="mask mask-squircle w-12 h-12">
                                                                <img src={product.images[0]} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div class="font-bold">{product.title}</div>
                                                            <div class="text-sm opacity-50">{product.supplyer}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {product.availableQuantity}
                                                </td>
                                                <td>{product.price}$</td>
                                                <th>
                                                    <button onClick={() => handleUpdate(product._id)} class="btn btn-ghost btn-xs">Update</button>
                                                </th>
                                                <th>
                                                    <button onClick={() => handleDelete(product._id)} class="btn btn-ghost btn-xs">Delete</button>
                                                </th>
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
        </div>
    );
};

export default ManageParts;