import React from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = ({ user, setUsers }) => {

    const { email } = user
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
                toast.success('Admin Create successfull', {
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
    const handleDelete = id => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://manufacturer-0397.onrender.com/users/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = data.filter(product => product._id !== id);
                    setUsers(remaining);

                })
        }
    }

    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={user?.images} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div class="flex items-center space-x-3">
                    <div>
                        <div class="font-bold">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {user.role === 'admin' && <p>Admin</p>}
            </td>
            <td>
                {user.role !== 'admin' && <button onClick={() => makeAdmin()} class="btn btn-ghost btn-xs">Make Admin</button>}

                <button onClick={() => handleDelete(user._id)} class="btn btn-ghost btn-xs">Delete User</button>
            </td>
            <td>

            </td>
        </tr>



    );
};

export default MakeAdmin;