import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import UseCart from '../Hooks/UseCart';
import { UserContext } from '../Shared/ContextUser';
import Loading from '../Shared/Loading';

const PaidProduct = () => {
    const [order, setOrder] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email
    const cartApi = `https://manufacturer-0397.onrender.com/myOrder?email=${email}`
    let { cartitems, cartLoading, cartRefetch, setValue } = UseCart(cartApi)

    const { setNewUser, newUser } = useContext(UserContext)
    useEffect(() => {
        if (newUser === true) {
            cartRefetch()
        }
    }, [newUser])
    if (cartLoading) {
        return <Loading />
    }
    console.log(cartitems)
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
                    cartRefetch()
                    setNewUser(true)
                })

        }
    }
    console.log(cartitems)
    return (
        <div>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                       
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Total Price</th>
                                        <th>Transation Id</th>
                                        <th className=''>Order Status</th>

                                    </tr>
                                </thead>

                                {
                                    cartitems?.filter(value => {
                                        if (value.price && value.paid) {
                                            return value;
                                        }
                                    }).map(product => <>
                                        <tbody>
                                            <tr>
                                                
                                                <td>
                                                    <div class="flex items-center space-x-3">

                                                        <div>
                                                            <div class="font-bold">{product.title}</div>
                                                            <p>Color : {product.productColor}</p>
                                                            <p>Country : {product.country}</p>
                                                            <p>Delivery Location : {product.address}</p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {product.quantity}

                                                </td>
                                                <td>{product.price}$</td>
                                                <td>
                                                {product.quantity * product.price }$
                                                </td>
                                                <td>
                                                    {(product?.transactionId) && <span class="text-cyan-400 font-bold">{product?.transactionId}</span>}
                                                </td>
                                                <td className='w-full lg:w-2/6'>

                                                    <div class="w-[200px] lg:w-3/6 py-8">


                                                        <div class=" mx-auto">


                                                            <div class=" mx-auto">
                                                                <div class="bg-gray-200 h-1 flex items-center justify-between">
                                                                    <div class="w-1/3 bg-indigo-700 h-1 flex items-center">
                                                                        <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                                <path d="M5 12l5 5l10 -10" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div class="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
                                                                        <div class="absolute right-0 -mr-2">
                                                                            <div class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                                                                                <svg class="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                                                                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                                                                <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                                                                            </g>
                                                                                        </g>
                                                                                    </g>
                                                                                </svg>
                                                                                <p tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-bold -ml-2"> Step 3:On the way</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                                <path d="M5 12l5 5l10 -10" />
                                                                            </svg>
                                                                        </div>
                                                                        <div class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                                                                            <div class="h-3 w-3 bg-indigo-700 rounded-full"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="w-1/3 flex justify-end">
                                                                        <div class="bg-white h-6 w-6 rounded-full shadow"></div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
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
        </div>
    )
}

export default PaidProduct