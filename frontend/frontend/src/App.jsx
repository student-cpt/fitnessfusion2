import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import AI from "./components/AI";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
// import AIGenerator from './components/AIGenerator';


const App = () => {
  const [data,setdata]=useState("");

  const getdata=async()=>{
    const response=await axios.get("http://localhost:6000/getdata");
    setdata(response.data);
  }
  useEffect(()=>{
    getdata()
  },[]);
  return (
    
    <Router>
      <div>{data}</div>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <AI/>
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      {/* <AIGenerator/> */}
      <ToastContainer theme="dark" position="top-center" />
    </Router>
    
    
      
        
    
  );
};

export default App;
