
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addproduct from './Pages/Dashboard/Addproduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageParts from './Pages/Dashboard/ManageParts';
import Myorders from './Pages/Dashboard/Myorders';
import Myprofile from './Pages/Dashboard/Myprofile';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';

import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer';

import Navbar from './Pages/Shared/Navbar';
import Signup from './Pages/SignUp/Signup';


function App() {
  return (
    <div  >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="purchase/:id" element={<RequireAuth>
          <Purchase />
        </RequireAuth> } />
        
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth> }
        ><Route  path='myprofile' index element={<Myprofile></Myprofile>}></Route>
        <Route path='addproduct' element={<Addproduct/>}></Route>
        <Route path='manageorder' element={<ManageOrder/>}></Route>
        <Route path='myorder' element={<Myorders/>}></Route>
        <Route path='manageparts' element={<ManageParts/>}></Route>
        <Route path='makeadmin' element={<MakeAdmin/>}></Route>
        <Route path='payment/:id' element={<Payment/>}></Route>
        </Route>
      </Routes>
      <Footer/>
      
     
      
      
      
    </div>
  );
}

export default App;
