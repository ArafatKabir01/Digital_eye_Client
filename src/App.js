
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Addproduct from './Pages/Dashboard/Addproduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageParts from './Pages/Dashboard/ManageParts';
import Myorders from './Pages/Dashboard/Myorders';
import Myprofile from './Pages/Dashboard/Myprofile';
import Myreview from './Pages/Dashboard/Myreview';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Purchase from './Pages/Purchase/Purchase';

import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer';

import Navbar from './Pages/Shared/Navbar';
import Signup from './Pages/SignUp/Signup';

import musicBg from '../src/Images/1162652.jpg'
import About from './Pages/About/About';
import NewPurchase from './Pages/Purchase/NewPurchase';
import { ConfiremPurchese } from './Pages/Purchase/ConfiremPurchese';
import PaidProduct from './Pages/Dashboard/PaidProduct';
import UpdateProduct from './Pages/Dashboard/UpdateProduct';
function App() {
  return (
    <div data-theme="none" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='300' height='800' preserveAspectRatio='none' viewBox='0 0 300 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1357%26quot%3b)' fill='none'%3e%3crect width='300' height='800' x='0' y='0' fill='url(%23SvgjsLinearGradient1358)'%3e%3c/rect%3e%3cpath d='M0 0L25.59 0L0 40.75z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 40.75L25.59 0L34.51 0L0 394.81z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 394.81L34.51 0L144.71 0L0 506.2z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 506.2L144.71 0L156.97 0L0 619z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M300 800L158.7 800L300 710.72z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M300 710.72L158.7 800L122.01999999999998 800L300 360.67z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M300 360.66999999999996L122.01999999999998 800L113.38999999999999 800L300 301.47999999999996z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M300 301.47999999999996L113.38999999999999 800L77.76999999999998 800L300 159.57999999999996z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1357'%3e%3crect width='300' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='141.67%25' y1='15.62%25' x2='-41.67%25' y2='84.38%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1358'%3e%3cstop stop-color='rgba(14%2c 42%2c 71%2c 1)' offset='0.31'%3e%3c/stop%3e%3cstop stop-color='rgba(127%2c 159%2c 218%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")` }}  className=" bg-fixed bg-center
    bg-no-repeat bg-cover scroll-smooth"  >
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Footer />} />
        <Route path="login"  element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="newpurchase/:id" element={<NewPurchase />} />
        <Route path="updateProduct/:id" element={<UpdateProduct />} />
        <Route path="confiremBuy/:id" element={<RequireAuth>
          <ConfiremPurchese />
        </RequireAuth>} />
        
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}
        ><Route path='myprofile' index element={<Myprofile></Myprofile>}></Route>
          <Route path='myReviews'  element={<Myreview />}></Route>
          <Route path='addproduct' element={<RequireAdmin><Addproduct /></RequireAdmin>}></Route>
          <Route path='manageorder' element={<RequireAdmin><ManageOrder /></RequireAdmin>}></Route>
          <Route path='myorder' element={<Myorders />}></Route>
          <Route path='paidOrder' element={<PaidProduct />}></Route>
          <Route path='manageparts' element={<RequireAdmin><ManageParts /></RequireAdmin>}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
         
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>
        
      </Routes>
     





    </div>
  );
}

export default App;
