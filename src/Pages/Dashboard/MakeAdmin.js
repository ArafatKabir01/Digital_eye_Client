import React from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = ({ user , refetch}) => {
   
    const {email} = user
    
    console.log(email)
    const makeAdmin = () => {
        const url = `https://manufacturer-0397.onrender.com/user/admin/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success('Admin Creation successfull')
            })
    }
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://manufacturer-0397.onrender.com/users/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    
                    refetch()
                    
                })
        }
    }

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" class="checkbox" />
                </label>
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div>
                        <div class="font-bold">{email}</div>
                    </div>
                </div>
            </td>
            <th>
            {user.role === 'admin'   && <p>Admin</p>}
            </th>
            <th>
             {user.role !== 'admin'   && <button onClick={() => makeAdmin()} class="btn btn-ghost btn-xs">Make Admin</button>}
             
             <button onClick={() => handleDelete(user._id)} class="btn btn-ghost btn-xs">Delete User</button>
        </th>
        </tr>

        

    );
};

export default MakeAdmin;