import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/imges/logo.png";

export default function Header() {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMachineryOpen, setIsMachineryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const machineryRef = useRef(null);

  const handleLinkClick = (path) => {
    setSelected(path);
    setIsDropdownOpen(false);
    setIsMachineryOpen(false);
  };

  // ✅ Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(e.target)) &&
        (machineryRef.current && !machineryRef.current.contains(e.target))
      ) {
        setIsDropdownOpen(false);
        setIsMachineryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // PET Flakes dropdown items
  const petItems = [
    { name: "PET Flakes", path: "/flakes" },
    { name: "PET Strap", path: "/pet-strap" },
    { name: "Polyester Staple Fiber", path: "/polyester-staple-fiber" },
    { name: "PET Masterbatch", path: "/pet-masterbatch" },
    { name: "PET Granules", path: "/pet-granules" },
    { name: "PET Sheet", path: "/pet-sheet" },
  ];

  // Machinery dropdown items
  const machineryItems = [
    { name: "Sorting and Crushing", path: "/machinery/sorting-crushing" },
    { name: "Washing", path: "/machinery/washing" },
    { name: "Drying and Cleaning", path: "/machinery/drying-cleaning" },
  ];

  return (
    <div className="bg-white flex w-full flex-col font-Poppins !z-[50] mx-auto fixed">
      <div className="flex md:w-[80%] 2xl:w-[1330px] w-[90%] h-[40px] mt-[10px] md:mt-[23px] mx-auto flex-col">
        <div className="flex w-full">
          <div className="flex w-full">
            <div className="flex w-full relative justify-between">
              <div className="flex right-0 md:w-[89%] w-[59%] h-[1.5px] absolute top-[36px] bg-[#00a0e3]"></div>

              <div className="flex items-center">
                <Link className="w-fit" to={"/"}>
                  <img
                    className="flex w-[90px] md:mt-[-18px] md:w-[125px]"
                    src={logo}
                    alt="Dynamic Polypet Logo"
                  />
                </Link>
              </div>

              <div className="flex md:w-[65%] 2xl:w-[700px]">
                <div>
                  <div className="xl:text-[15px] gap-[15px] text-[#000] items-center pl-[20px] font-Montserrat flex font-[600] justify-end md36:hidden md:flex">
                    <Link
                      to="/"
                      onClick={() => handleLinkClick("/")}
                      className={`cursor-pointer font-[400] font-Poppins ${
                        selected === "/"
                          ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                          : "text-[#515151]"
                      }`}
                    >
                      Home
                    </Link>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    <Link
                      to="/about-us"
                      onClick={() => handleLinkClick("/about-us")}
                      className={`cursor-pointer font-[400] font-Poppins ${
                        selected === "/about-us"
                          ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                          : "text-[#515151]"
                      }`}
                    >
                      About us
                    </Link>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    {/* 🔽 PET Dropdown */}
                    <div
                      className="relative"
                      ref={dropdownRef}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected.includes("pet") || selected === "/flakes"
                            ? "text-[#ec691e] font-[500]"
                            : "text-[#515151]"
                        } hover:text-[#ec691e]`}
                      >
                        Pet Flakes
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute flex flex-col left-[-20px] mt-2 w-[200px] font-Poppins bg-white shadow-lg border border-gray-200 rounded-[8px] overflow-hidden"
                          >
                            {petItems.map((item, i) => (
                              <Link
                                key={i}
                                to={item.path}
                                onClick={() => handleLinkClick(item.path)}
                                className="px-3 py-2 text-[13px] text-[#333] font-[500] hover:bg-[#00a0e3]/10 hover:text-[#00a0e3] transition-all"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    {/* 🔽 Machinery Dropdown */}
                    <div
                      className="relative"
                      ref={machineryRef}
                      onMouseEnter={() => setIsMachineryOpen(true)}
                      onMouseLeave={() => setIsMachineryOpen(false)}
                    >
                      <button
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected.includes("machinery")
                            ? "text-[#ec691e] font-[500]"
                            : "text-[#515151]"
                        } hover:text-[#ec691e]`}
                      >
                        Machinery
                      </button>

                      <AnimatePresence>
                        {isMachineryOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute flex flex-col left-[-20px] mt-2 w-[170px] font-Poppins bg-white shadow-lg border border-gray-200 rounded-[8px] overflow-hidden"
                          >
                            {machineryItems.map((item, i) => (
                              <Link
                                key={i}
                                to={item.path}
                                onClick={() => handleLinkClick(item.path)}
                                className="px-3 py-2 text-[13px]  text-[#333] font-[500] hover:bg-[#00a0e3]/10 hover:text-[#00a0e3] transition-all"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    <Link
                      to="/services"
                      onClick={() => handleLinkClick("/services")}
                      className={`cursor-pointer font-[400] font-Poppins ${
                        selected === "/services"
                          ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                          : "text-[#515151]"
                      }`}
                    >
                      Services
                    </Link>

                    <span className="flex h-[20px] w-[1px] bg-black"></span>

                    <Link
                      to="/contact-us"
                      onClick={() => handleLinkClick("/contact-us")}
                      className={`cursor-pointer font-[400] font-Poppins ${
                        selected === "/contact-us"
                          ? "text-[#ec691e] font-[500] hover:text-[#ec691e]"
                          : "text-[#515151]"
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
  );
}
