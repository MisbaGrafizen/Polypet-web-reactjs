import React, { useEffect, useRef, useState } from "react";

// import logo1 from "../../public/cdhlogo.webp"
// import logo2 from "../../public/cdh2logo.webp"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../public/imges/logo.png"
export default function Header() {

  const location = useLocation(); // Get the current path
  const [selected, setSelected] = useState(location.pathname); // Track selected route


  const handleLinkClick = (path) => {
    setSelected(path);
  };


  return (
    <div className="bg-white flex w-full flex-col font-Poppins !z-[50] mx-auto fixed">

      <div className="flex md:w-[80%] 2xl:w-[1330px]   w-[90%] h-[40px] mt-[10px] md:mt-[23px] mx-auto  flex-col">
        <div className="flex w-full">
          <div className="flex w-full">
            <div className="flex w-full relative justify-between">
            <div className=" flex right-0 md:w-[89%] w-[59%] h-[1.5px]  absolute top-[36px] bg-[#00a0e3]">

            </div>
              <div className=" flex items-center">


                <Link className="w-fit" to={"/"}>
                  <img className="flex w-[90px]   md:mt-[-18px] md:w-[125px]" src={logo} alt="Basalt Logo" />
                </Link>
           
              </div>
              <div className="flex md:w-[65%] 2xl:w-[700px]   ">
                <div>
                  <div className="xl:text-[15px] gap-[15px] text-[#000] items-center pl-[20px] font-Montserrat  flex font-[600] justify-end md36:hidden md:flex">
                    <Link
                      to="/"
                      onClick={() => handleLinkClick("/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "/"
                        ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                        : " text-[#515151]"
                        }`}
                    >
                      Home
                    </Link>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    <Link
                      to="/about-us"
                      onClick={() => handleLinkClick("/about-us")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "/about-us"
                        ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                        : " text-[#515151]"
                        }`}
                    >
                      About us
                    </Link>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    <Link
                      to="/pet-us"
                      onClick={() => handleLinkClick("https://www.rajkotdentist.com/why-choose-us/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "https://www.rajkotdentist.com/why-choose-us/"
                        ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                        : " text-[#515151]"
                        }`}
                    >
               Pet Flakes
                    </Link>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    <Link
                      to="/"
                      onClick={() => handleLinkClick("/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "/"
                        ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                        : " text-[#515151]"
                        }`}
                    >
                      Machinery
                    </Link>

                    {/* <span className="flex h-[20px] w-[1px] bg-black"></span>

                      <Link
                        to="/memories"
                        onClick={() => handleLinkClick("/memories")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/memories"
                          ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                          : " text-[#515151]"
                          }`}
                      >
                        Memories
                      </Link> */}

                    <span className="flex h-[20px] w-[1px] bg-black"></span>


                    <Link
                      to="/"
                      onClick={() => handleLinkClick("/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "/"
                        ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                        : "  text-[#515151]"
                        }`}
                    >
                      Services
                    </Link>
                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    <Link
                      to="/"
                      onClick={() => handleLinkClick("/")}
                      className={`cursor-pointer font-[400] font-Poppins ${selected === "/"
                        ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                        : "  text-[#515151]"
                        }`}
                    >
                      Contact Us
                    </Link>



                  </div>
                </div>




              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
