import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin , setAdmin] = useAdmin(user)
  
    return (
        <div className='pt-24  w-screen'>
            <div className="drawer drawer-mobile bg-base-200">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                   
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side bg-base-200 ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <Link  to='myprofile'><li><a>My Profile</a></li></Link>
                        {!admin && <Link  to='myReviews'><li><a>My Reviews</a></li></Link>}
                        {admin && <Link to='addproduct'><li><a>Add Product</a></li></Link>}
                        { admin &&  <Link to='manageparts'><li><a>Manage Parts</a></li></Link>}
                        { admin &&<Link to='manageorder'><li><a>Manage Order</a></li></Link>}
                        {!admin && <Link to='myorder'><li><a>My Order</a></li></Link>}
                        {admin && <Link to='users'><li><a>All Users</a></li></Link>}
                        
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;