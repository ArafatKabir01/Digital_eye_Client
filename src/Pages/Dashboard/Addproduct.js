import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addproduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageQuantity , setImageQuantity]= useState(0)
    const [imgFiles , setImgFiles]= useState(null)
    const [error, setError] = useState('');

    const onSubmit = async (data, e) => {
        const imagehostUrl = `https://api.imgbb.com/1/upload?key=efa866edd2d0d4161f2c96b05f501583`
        const api_kye = "efa866edd2d0d4161f2c96b05f501583"
        let imgurls = []
        for (const file of imgFiles) {
            let formData = new FormData();
            formData.append("image", file);
            formData.append("key", api_kye);
            try {
                const response = await fetch(imagehostUrl, {
                    method: "POST",
                    body: formData,
                })
                const responseData = await response.json();
                if (response.ok) {
                    imgurls.push(responseData.data.url);
                } else {
                    throw new Error(responseData.message);
                }
            } catch (error) {
                console.error("Error uploading image", error);
            }
        }
        if (imgurls) {
            const productdata = {
                title: data?.title,
                images: imgurls,
                price: data?.price,
                availableQuantity: data?.availableQuantity,
                overview: data?.overview,
                highlights: data?.highlights,
                tech_Specs: data?.tech_Specs,
            }
            console.log(productdata)

            const url = "https://manufacturer-0397.onrender.com/allParts"
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productdata)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('Product added successfull', {
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
                .catch(err => {
                    toast.error('Sorry! Product Is not added.Try Again..', {
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


        console.log(imgurls)
    };
    const onChange = e => {
        const files = e.target.files
        console.log(files.length)
        if (files.length === 6 ) {
            setImgFiles(files)
            setError("")
            setImageQuantity(files.length)
        } else {
            setError("Sorry! You can upload only 6 images.")
          
        }
        
    }
    console.log(error)
    return (
        <div className='h-full mb-24 '>
            
            <div className=''>
                <div className=' '>
                    <h2 className='text-2xl font-bold p-3'>Add Product</h2>
                    <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div class="hero ">
                            <div class="flex-col lg:flex-row-reverse">
                                <div class="card  w-full shadow-2xl ">
                                    <div class="card-body ">
                                        <div class="w-full lg:w-[800px] grid grid-cols-2 gap-4">
                                            <div>
                                                <label class="label">
                                                    <span class="label-text">Product Title</span>
                                                </label>
                                                <input {...register("title", { required: true })} type="text" class=" w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                <label class="label">
                                                    <span class="label-text">Price</span>
                                                </label>
                                                <input {...register("price", { required: true })} type="text" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                                <label class="label">
                                                    <span class="label-text">Available quantity</span>
                                                </label>
                                                <input {...register("availableQuantity", { required: true })} type="text" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
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
                                                        <input  type="file" name='images' className="hidden" multiple {...register('images' , { required: true ,min:6 , max:6})} onChange={onChange}  />
                                                    </label>
                                                </div>
                                                <h2 className='text-xl p-2'>Selected images : {imageQuantity}</h2>
                                                <h2>{error}</h2>
                                                <h2 className='text-sm'>Note : Your selected first 3 img for product color red ,black and rose gold and last 3 img for product details.You need to upload image serialized by number like - 1.Red , 2.black .....  </h2>
                                            </div>
                                            <div>
                                                <div className="my-1">
                                                    <label
                                                        for="overview"
                                                        className="label-text my-2"
                                                    >
                                                      Overview Description
                                                    </label>
                                                    <textarea
                                                        {...register("overview", { required: true })}
                                                        rows="4"
                                                        name="overview"
                                                        id="overview"
                                                        placeholder="Overview"
                                                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                    ></textarea>
                                                </div>
                                                <div className="my-1">
                                                    <label
                                                        for="highlights"
                                                        className="label-text my-2"
                                                    >
                                                      Highlights  Description
                                                    </label>
                                                    <textarea
                                                        {...register("highlights", { required: true })}
                                                        rows="4"
                                                        name="highlights"
                                                        id="highlights"
                                                        placeholder="Highlights"
                                                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                    ></textarea>
                                                </div>
                                                <div className="my-1">
                                                    <label
                                                        for="tech_Specs"
                                                        className="label-text my-2"
                                                    >
                                                      Tech Specs Description
                                                    </label>
                                                    <textarea
                                                        {...register("tech_Specs", { required: true })}
                                                        rows="4"
                                                        name="tech_Specs"
                                                        id="tech_Specs"
                                                        placeholder="Tech Specs"
                                                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-control mt-6">
                                            <button   class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>

            </div>
        </div>
    );
};

export default Addproduct;