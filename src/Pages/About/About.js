import React, { useState } from 'react'
import aboutImg from '../../Images/IMG-20230109-WA0001-03-01.jpeg.jpg'
const About = () => {
    const [seemore, setSeeMore] = useState(false)
    const handleSeemore = (data) => {
        setSeeMore(data)
    }
    return (
        <div className=''>
            <div style={{ backgroundImage: `url("${aboutImg}")` }} className={seemore === false ? "h-screen bg-fixed bg-center bg-no-repeat bg-cover flex justify-end":'h-full bg-fixed bg-center bg-no-repeat bg-cover flex justify-end'}>
                <div data-aos="zoom-in" className='w-full md:w-6/12 lg:w-6/12 mt-[150px]  p-4 bg-slate-500 md:bg-transparent lg:bg-transparent'>
                    <h2 className='text-6xl font-bold text-white w-96'>About This Website</h2>
                    <p className='w-full md:w-8/12 lg:w-8/12 my-4 text-xl text-white'>BassBoss is a headphone manufacturer company that has developed a React.js web application. It has some basic features for both users and admins. Let's talk about some features of this website:-</p>
                    <button onClick={() => handleSeemore(true)} className={seemore === true ? "hidden" : "btn btn-warning rounded-none"}>See More</button>
                    <div  className={seemore === false ? "hidden" : 'text-xl my-5 text-green-300'}>
                        <p className='text-emerald-50 my-2'>User Side</p>
                        <p >1. The website has a beautiful user interface that is sure to impress any user. </p>
                        <p >2. Users can browse and purchase products if they are logged in.</p>
                        <p >3. Users can log in to the website in two ways: by directly signing up or by using their Google account. </p>
                        <p >4. On the product details page, users can view information about the product, as well as read and write reviews or comments about it.</p>
                        <p >5. Users can view and update their profiles, view their order history, and cancel orders that have not yet been paid for.</p>
                        <p className='text-emerald-50 my-2'>Admin Side</p>
                        <p >1. Admin can see product order and massege for orders that have not yet been paid for</p>
                        <p >2. Admin can add products, update products and delete products.</p>
                        <p >3. Admin can make user admin and delete user. </p>
                        <p >3. admin mail is admin@mail.com password is 123456 </p>
                        <p className='text-emerald-50 my-2'>Technology Uses</p>
                        <p>React.js, MongoDB, Firebase login system, Firebase Hosting, Render hosting, Tailwind, React Router, Node.js, Express.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About