
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
function App() {
  return (
    <div data-theme="none" style={{ backgroundImage: `url(${musicBg})` }} className=" bg-fixed bg-center
    bg-no-repeat bg-cover"  >
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="purchase/:id" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}
        ><Route path='myprofile' index element={<Myprofile></Myprofile>}></Route>
          <Route path='myReviews'  element={<Myreview />}></Route>
          <Route path='addproduct' element={<Addproduct />}></Route>
          <Route path='manageorder' element={<ManageOrder />}></Route>
          <Route path='myorder' element={<Myorders />}></Route>
          <Route path='manageparts' element={<ManageParts />}></Route>
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>
      </Routes>
      <Footer />





    </div>
  );
}

export default App;
