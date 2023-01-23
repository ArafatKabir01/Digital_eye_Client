import React from 'react'
import { Link } from 'react-router-dom'
import pnf from '../../Images/pnf.png'
const PageNotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${pnf})` }}>
                <div class="w-screen  flex items-center">
                    <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                        <div class="max-w-md">
                            <div class="text-8xl text-white font-bold">404</div>
                            <p
                                class="text-2xl md:text-3xl text-white leading-normal"
                            >Sorry we couldn't find this page. </p>
                            <p class="mb-8 text-white">But dont worry, you can find plenty of other things on our homepage.</p>

                            <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">< Link to="/">back to homepage</ Link></button>
                        </div>
                        <div class="max-w-lg">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound