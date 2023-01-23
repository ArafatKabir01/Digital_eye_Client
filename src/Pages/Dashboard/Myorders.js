import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import UseCart from '../Hooks/UseCart';
import { UserContext } from '../Shared/ContextUser';
import Loading from '../Shared/Loading';
const Myorders = () => {
    const [order, setOrder] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const email = user?.email
    const cartApi = `https://manufacturer-0397.onrender.com/myOrder?email=${email}`
    let { cartitems, cartLoading, cartRefetch, setValue } = UseCart(cartApi)

    const { setNewUser, newUser } = useContext(UserContext)
    useEffect(() => {
        if (newUser === true) {
            cartRefetch()
            setNewUser(false)
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
    return (
        <div>
            <div>
                <div class="overflow-x-auto mb-24  w-full">
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
                                        <th>Total Price</th>
                                        <th>Pay/Cancel</th>
                                    </tr>
                                </thead>

                                {
                                    cartitems?.filter(value => {
                                        if (value.price && !value.paid) {
                                            return value;
                                        }
                                    }).map(product => <>
                                        <tbody>
                                            <tr>
                                                <th>

                                                </th>
                                                <td>
                                                    <div class="flex items-center space-x-3">

                                                        <div>
                                                            <div>
                                                                <div class="font-bold">{product.title}</div>
                                                                <p>Color : {product.productColor}</p>
                                                                <p>Country : {product.country}</p>
                                                                <p>Delivery Location : {product.address}</p>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {product.quantity}

                                                </td>
                                                <td>{product.price}$</td>
                                                <td>
                                                    {!product.paid && <button onClick={() => handleDelete(product._id)} class="btn btn-ghost btn-xs">Cancel</button>}
                                                </td>
                                                { product?.availableQuantity < 10 ? <td>
                                                    <button class="btn btn-ghost btn-xs">Wait For Stock Update</button>
                                                </td> : <td>
                                                    {(product.price && !product.paid) && <Link to={`/dashboard/payment/${product._id}`} ><button class="btn btn-ghost btn-xs">pay</button></Link>}
                                                    {(product.price && product.paid) && <span class="text-cyan-400 font-bold">Paid</span>}
                                                </td>}
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

export default Myorders;