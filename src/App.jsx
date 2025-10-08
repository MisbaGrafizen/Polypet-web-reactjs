import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";





import Cookies from 'js-cookie';
import Home from "./pages/home/Home";
import AboutMainPage from "./pages/aboutUsPage/AboutMainPage";


function App() {
  const user = Cookies.get("user");


  return (
    <>
  
      <div className="w-100 font-Poppins ease-soft-spring h-[100%]  !bg-[#fbffff]  duration-1000 ">
     
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutMainPage />} />

     


          



        </Routes>

      </div>
    </>
  );
}

export default App;
