import React from 'react';
import { useForm } from 'react-hook-form';

const Addproduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/allParts',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(data)

        } )
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <div className=''>
                <div  className=' '>
                    <h2>Add Product</h2>
                    <form className='m-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div  class="hero min-h-screen bg-base-200  ">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <div class="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                                    <div class="card-body">
                                        <div class="form-control w-80 ">
                                            <label class="label">
                                                <span class="label-text">Product Title</span>
                                            </label>
                                            <input {...register("title", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Price</span>
                                            </label>
                                            <input {...register("price", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Available quantity</span>
                                            </label>
                                            <input {...register("availableQuantity", { required: true })} type="text" class="input input-bordered" />
                                            
                                            <label class="label">
                                                <span class="label-text">Img URL</span>
                                            </label>
                                            <input {...register("img", { required: true })} type="text" class="input input-bordered" />
                                            <label class="label">
                                                <span class="label-text">Minimum Order Quantity</span>
                                            </label>
                                            <input {...register("minQuantity", { required: true })} type="text" class="input input-bordered" />
                                            
                                        </div>
                                        
                                        <div  class="form-control mt-6">
                                            <button class="btn btn-primary">Submit</button>
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