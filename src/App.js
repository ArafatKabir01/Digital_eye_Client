
import { Route, Routes } from 'react-router-dom';
import './App.css';



import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
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
      </Routes>
      <Footer/>
      
     
      
      
      
    </div>
  );
}

export default App;
