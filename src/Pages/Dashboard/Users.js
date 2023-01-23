
import React, { useState } from 'react';
import useUser from '../Hooks/useUser';
import MakeAdmin from './MakeAdmin';

const Users = () => {
    const [seacrchText , setSearchText] = useState('')
    const [users, setUsers] = useUser()
    const handleSearch = event =>{
        setSearchText(event.target.value)
    }
    
    return (
        <div>
                    <div class="overflow-x-auto w-full mb-24 ">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Role</th>
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

                            <tbody>
                                {users.filter(value =>{
                                        if(seacrchText === "" ){
                                            return value;
                                        }else if(value.email.toLowerCase().includes(seacrchText.toLowerCase())){
                                            return value 
                                            
                                        }
                                              
                                    }).map(user => <MakeAdmin key={user._id} user={user}></MakeAdmin>)
                                }

                            </tbody>

                        </table>
                    </div>
        </div>
    );
};

export default Users;