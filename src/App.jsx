import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";





import Cookies from 'js-cookie';
import Home from "./pages/home/Home";
import AboutMainPage from "./pages/aboutUsPage/AboutMainPage";
import ContactUs from "./pages/conatctusPage/ContactUs";
import MainPagePet from "./pages/MainFlakesPage/MainPagePet";
import Shorting from "./pages/allMachinesPage/Shorting";


function App() {
  const user = Cookies.get("user");


  return (
    <>
  
      <div className="w-100 font-Poppins ease-soft-spring h-[100%]  !bg-[#fbffff]  duration-1000 ">
     
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutMainPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/flakes" element={<MainPagePet />} />
          <Route path="/shorting" element={<Shorting/>} />




     


          



        </Routes>

      </div>
    </>
  );
}

export default App;
