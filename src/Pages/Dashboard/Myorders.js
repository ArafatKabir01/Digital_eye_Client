import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myorders = () => {
    const [order, setOrder] = useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myOrder?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrder(data))
        }

    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/myOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = order.filter(product => product._id !== id);
                    setOrder(remaining);
                })

        }
    }
    return (
        <div>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" class="checkbox" />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th><div class="form-control">
                                            <div class="input-group">
                                                <input  type="text" placeholder="Search…" class="input input-bordered" />
                                                <button class="btn btn-square">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                                </button>
                                            </div>
                                        </div></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                {
                                    order.map(product => <>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input type="checkbox" class="checkbox" />
                                                    </label>
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
                                                <th>
                                                    <button onClick={() => handleDelete(product._id)} class="btn btn-ghost btn-xs">Cancel</button>
                                                    <button onClick={() => handleDelete(product._id)} class="btn btn-ghost btn-xs">payment</button>
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

export default Myorders;