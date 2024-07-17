import { Home } from 'lucide-react';
import React from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import AboutUs from '../context/AboutUs';
import AIRoadmap from '../context/AIRoadmap';
import Programs from '../context/Programs';
import SingUp from '../context/SingUp';
//  import Workout from '../context/Workout';



const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <h1>Fitness Culture</h1>
      <img src="fitnesslogo.jpg" alt="" height={70}/>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/roadmap">AIRoadmap</Link>
        <Link to="/aboutus">AboutUs</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/singup">SingUp</Link>
        {/* <Link to="/Workout">Workout</Link> */}

      </div>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/roadmap' element={<AIRoadmap/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/programs' element={<Programs/>}/>
      <Route path='/singup' element={<SingUp/>}/>
      {/* <Route path='/Workout' element={<Workout/>}/>  */}
      
</Routes>

    </>
  );
};

export default Navbar;

