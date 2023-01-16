import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import UseSingleUser from '../Hooks/UseSingleUser';
import { UserContext } from '../Shared/ContextUser';
import Loading from '../Shared/Loading';

const Myprofile = () => {
    const [user,loading, Uerror] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const userApi = `http://localhost:5000/userInfo/${user?.email}`
    const { users, userRefetch , setValu } = UseSingleUser(userApi)
    const {setNewUser , newUser} = useContext(UserContext)
    if (loading) {
        return <Loading />
    }

    const onSubmit = async (data, e) => {
        const imagehostUrl = `https://api.imgbb.com/1/upload?key=efa866edd2d0d4161f2c96b05f501583`
        const api_kye = "efa866edd2d0d4161f2c96b05f501583"
        const userImg = data.image[0]
        let formData = new FormData();
        formData.append("image", userImg);
        formData.append("key", api_kye);
        // setValu(data)
        const response = await fetch(imagehostUrl, {
            method: "POST",
            body: formData,
        })
        const responseData = await response.json();
        if (response.ok) {

            const userInfo = {
                name: data?.name,
                images: responseData.data.url,
                email: user?.email,
                phoneNumber: data?.phoneNumber,
                address: data?.address,


            }
            const url = "http://localhost:5000/userInfo"
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)

            })
                .then(res => res.json())
                .then(data => {
                    userRefetch()
                    setNewUser(true)
                    // you can add here like, use a state variable for giving a message that product is added successfully
                })
                .catch(err => console.log(err))
        } else {
            throw new Error(responseData.message);
        }



    };
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold p-3'>My Profile</h2>
                <div className='grid grid-cols justify-items-center '>
                    <div className='grid justify-items-center'>
                        <div class="indicator relative w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                            <label htmlFor="my-modal-4" class="btn btn-xs absolute z-10 -my-2 -mx-3  badge badge-primary">Eidet</label>
                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                                <label className="modal-box relative" htmlFor="">
                                    <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <label class="label">
                                                <span class="label-text">Your Name</span>
                                            </label>
                                            <input {...register("name", { required: true })} type="text" class=" w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                            <label class="label">
                                                <span class="label-text">Your Phone Number</span>
                                            </label>
                                            <input {...register("phoneNumber", { required: true })} type="text" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                            <label class="label">
                                                <span class="label-text">Your Adderss</span>
                                            </label>
                                            <input {...register("address", { required: true })} type="text" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                            <div className=" w-full">
                                                <label class="label">
                                                    <span class="label-text">Upload images</span>
                                                </label>
                                                <label
                                                    className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                                    <span className="flex items-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                            stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                        </svg>
                                                        <span className="font-medium text-gray-600">
                                                            Drop Image to Attach, or <span className="text-blue-600 underline">browse</span>
                                                        </span>
                                                    </span>
                                                    <input type="file" name='images' className="hidden" {...register('image')} />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-control mt-6">
                                            <button class="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </label>
                            </label>
                            <div>

                            </div>
                            <div class="grid   place-items-center"><div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={users?.images} />
                                </div>
                            </div></div>
                        </div>

                        <h2 className="card-title text-4xl">{users?.name}</h2>
                    </div>
                </div>
                <div className='shadow-2xl text-center text-2xl font-bold my-4 px-20'>
                    <div className='py-5'>
                        <h2 className='my-4'>Email : {users?.email}</h2>
                        <h2 className='my-4'>Phone Number : {users?.phoneNumber}</h2>
                        <h2 className='my-4'>Adress : {users?.address}</h2>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Myprofile;