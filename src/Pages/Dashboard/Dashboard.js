import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='mt-24 container'>
            <div className="drawer drawer-mobile bg-base-200">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-4">
                    {/* <!-- Page content here --> */}
                    <h2 className="text-4xl">Dashboard</h2>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side bg-base-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <Link to='myprofile'><li><a>My Profile</a></li></Link>
                        <Link to='addproduct'><li><a>Add Product</a></li></Link>
                        <Link to='manageparts'><li><a>Manage Parts</a></li></Link>
                        <Link to='manageorder'><li><a>Manage Order</a></li></Link>
                        <Link to='myorder'><li><a>My Order</a></li></Link>
                        <Link to='makeadmin'><li><a>Make Admin</a></li></Link>
                        
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;