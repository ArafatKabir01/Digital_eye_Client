import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import useUser from '../Hooks/useUser';
import Loading from '../Shared/Loading';
import MakeAdmin from './MakeAdmin';

const Users = () => {
    // const [users, setUsers] = useUser([])
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://manufacturer-0397.onrender.com/users', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
   
    
    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <div class="overflow-x-auto w-full">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Role</th>

                                    <th><div class="form-control">
                                        <div class="input-group">
                                            <input type="text" placeholder="Search…" class="input input-bordered" />
                                            <button class="btn btn-square">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            </button>
                                        </div>
                                    </div></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>


                                {
                                    users.map(user => <MakeAdmin key={user._id} user ={user}>
                                       refetch={refetch()} </MakeAdmin>
                                )}
                                

                            </tbody>

                        </table>
                    </div>
                </table>
            </div>
        </div>
    );
};

export default Users;