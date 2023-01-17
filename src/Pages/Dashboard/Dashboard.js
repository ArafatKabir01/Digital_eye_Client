import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import { CgProfile } from 'react-icons/cg';
import { RiFolderAddFill ,RiLuggageCartFill} from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaWpforms, FaUserFriends } from 'react-icons/fa';
import { FcPaid } from 'react-icons/fc';
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useAdmin(user)
    console.log(admin)

    return (
        <div style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='300' height='800' preserveAspectRatio='none' viewBox='0 0 300 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1357%26quot%3b)' fill='none'%3e%3crect width='300' height='800' x='0' y='0' fill='url(%23SvgjsLinearGradient1358)'%3e%3c/rect%3e%3cpath d='M0 0L25.59 0L0 40.75z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 40.75L25.59 0L34.51 0L0 394.81z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 394.81L34.51 0L144.71 0L0 506.2z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 506.2L144.71 0L156.97 0L0 619z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M300 800L158.7 800L300 710.72z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M300 710.72L158.7 800L122.01999999999998 800L300 360.67z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M300 360.66999999999996L122.01999999999998 800L113.38999999999999 800L300 301.47999999999996z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M300 301.47999999999996L113.38999999999999 800L77.76999999999998 800L300 159.57999999999996z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1357'%3e%3crect width='300' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='141.67%25' y1='15.62%25' x2='-41.67%25' y2='84.38%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1358'%3e%3cstop stop-color='rgba(14%2c 42%2c 71%2c 1)' offset='0.31'%3e%3c/stop%3e%3cstop stop-color='rgba(127%2c 159%2c 218%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")` }} className="  bg-center
        bg-no-repeat bg-cover h-screen  w-screen" >
            <div  className="drawer drawer-mobile  pt-24">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle bg-base-200" />
                <div className="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                    <Outlet></Outlet>


                </div>
                <div style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='300' height='800' preserveAspectRatio='none' viewBox='0 0 300 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1329%26quot%3b)' fill='none'%3e%3crect width='300' height='800' x='0' y='0' fill='url(%23SvgjsLinearGradient1330)'%3e%3c/rect%3e%3cpath d='M300 0L155.3 0L300 390.65z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M155.3 0L300 390.65L300 506.80999999999995L100.47000000000001 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M100.47000000000003 0L300 506.80999999999995L300 603.52L74.59000000000003 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M74.59000000000003 0L300 603.52L300 678.03L42.73000000000003 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 800L47.41 800L0 777.87z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 777.87L47.41 800L80.19999999999999 800L0 715.02z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 715.02L80.19999999999999 800L119.29999999999998 800L0 357.96999999999997z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 357.96999999999997L119.29999999999998 800L166.98999999999998 800L0 216.28999999999996z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1329'%3e%3crect width='300' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='-41.67%25' y1='15.63%25' x2='141.67%25' y2='84.38%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1330'%3e%3cstop stop-color='rgba(14%2c 42%2c 71%2c 1)' offset='0.31'%3e%3c/stop%3e%3cstop stop-color='rgba(3%2c 38%2c 103%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")` }} className="  bg-center
        bg-no-repeat bg-cover drawer-side" >
                    <label htmlFor="my-drawer-2" className="drawer-overlay  "></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-xl  text-white ">
                        {/* <!-- Sidebar content here --> */}
                        <Link to='myprofile' className='border border-zinc-400 my-2 hover:text-[#C4A095]'><li ><a> <CgProfile className='inline-block' />My Profile</a></li></Link>
                        {admin && <Link to='addproduct' className='border border-zinc-400 my-2 hover:text-[#C4A095]'><li><a><RiFolderAddFill className='inline-block' />Add Product</a></li></Link>}
                        {admin && <Link to='manageparts' className='border border-zinc-400 my-2 hover:text-[#C4A095]'><li><a><AiOutlineSetting className='inline-block' />Manage Product</a></li></Link>}
                        {admin && <Link to='manageorder' className='border border-zinc-400 my-2 hover:text-[#C4A095]'><li><a> <FaWpforms className='inline-block' /> Manage Order</a></li></Link>}
                        {!admin && <Link to='myorder' className='border border-zinc-400 my-2 hover:text-[#C4A095]'><li><a><RiLuggageCartFill className='inline-block' /> My Order</a></li></Link>}
                        {!admin && <Link to='paidOrder' className='border border-zinc-400 my-2 hover:text-[#C4A095]'><li><a><FcPaid className='inline-block' /> Paid Order</a></li></Link>}
                        {admin && <Link to='users' className='border border-zinc-400 my-2 hover:text-[#C4A095]'><li><a><FaUserFriends className='inline-block' />All Users</a></li></Link>}


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;