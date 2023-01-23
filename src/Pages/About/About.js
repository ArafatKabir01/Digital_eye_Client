import React, { useState } from 'react'

const About = () => {
    const [seemore, setSeeMore] = useState(false)
    const handleSeemore = (data) => {
        setSeeMore(data)
    }
    return (
        <div className={seemore === false ? "h-screen bg-fixed bg-center bg-no-repeat bg-cover":'h-full bg-fixed bg-center bg-no-repeat bg-cover'}>
            <div >
                <div data-aos="zoom-in" className='w-full md:w-6/12 lg:w-6/12 pt-[150px]  p-4 bg-slate-500 md:bg-transparent lg:bg-transparent ml-0  lg:ml-52'>
                    <h2 className='text-6xl font-bold text-white w-full'>About This Website</h2>
                    <p className='w-full  my-4 text-xl text-white'>BassBoss is a headphone manufacturer company that has developed a React.js web application. It has some basic features for both users and admins and fully mobile responsibe. Let's talk about some features of this website:-</p>
                    <p className='text-xl text-emerald-50 font-bold my-2'>Intersting Features :</p>
                        <p className='text-xl my-5 text-green-300'>1. When a user purchases a product and completes their payment, the quantity of the product will be decreased by the quantity of the user's purchase. If the product's quantity drops below 10, it will be marked as "out of stock." Users will be able to pre-order out-of-stock products. The pre-ordering feature will be available when the admin updates the product quantity.</p>
                        
                        <p className='text-xl my-5 text-green-300'>2. When a user reviews a product, they can only submit one review per product. If they attempt to review the same product again, their previous review will be updated instead of a new review being added. The rating heading will be automatically generated based on the user's rating.</p>
                    <button onClick={() => handleSeemore(true)} className={seemore === true ? "hidden" : "btn btn-warning rounded-none"}>See More</button>
                    <div  className={seemore === false ? "hidden" : 'text-xl my-5 text-[#f7e6e3]'}>
                    
                        <p className='text-emerald-50 my-2 font-bold'>User Side :</p>
                        <p >1. The website has a beautiful user interface that is sure to impress any user. </p>
                        <p >2. Users can browse and purchase products if they are logged in.</p>
                        <p >3. Users can log in to the website in two ways: by directly signing up or by using their Google account. </p>
                        <p >4. On the product details page, users can view information about the product, as well as read and write reviews or comments about it.</p>
                        <p >5. Users can view and update their profiles, view their order history, and cancel orders that have not yet been paid for.</p>
                        <p className='text-emerald-50 my-2 font-bold'>Admin Side :</p>
                        <p >1. Admin can see product order and massege for orders that have not yet been paid for</p>
                        <p >2. Admin can add products, update products and delete products.</p>
                        <p >3. Admin can make user admin and delete user. </p>
                        <p >4. admin mail is admin@mail.com password is 12345678 </p>
                        <p >5. admin can Search data on the table head.</p>
                        
                        <p className='text-emerald-50 my-2 font-bold'>Technology Uses :</p>
                        <p>React.js, MongoDB, Firebase login system, Firebase Hosting, Render hosting, Tailwind, React Router, Node.js, Express.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About