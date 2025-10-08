import React, { useState, useEffect } from "react";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Youtube, Shield, X, Check, Smile, Calendar, FileText, User, Home } from "lucide-react"


import mainLogo from "../../public/imges/footer.png"

import axios from "axios";


export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [datainputModal, setDatainputModal] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [PhoneFocused, setPhoneFocused] = useState(false);
  const [EmailFocused, setEmailFocused] = useState(false);
  const [cityFocused, setCityFocused] = useState(false);
  const [loading, setLoading] = useState(false);


  const dataModalOpen = () => {
    setDatainputModal(true)
  }
  const dataModalClose = () => {
    setDatainputModal(false)
  }

  return (
    <>



      <footer className="bg-gray-900 font-Poppins text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Practice Info */}
            <div>
              <div className="mb-2 w-fit  flex">
            <img
                  src={mainLogo}
                  alt="Bright Smile Dental Clinic Logo"
                  className=" h-[80px] w-auto"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=48&width=180&text=Bright+Smile+Dental"
                    e.target.onerror = null
                  }}
                />
   
              </div>
              <p className="text-gray-100 flex-shrink-0 mt-[16px] w-[260px] font-[400] text-[12px]  mb-4">
      Dynamic Polypet Pvt. Ltd. is one of India’s leading producers of PET flakes and recycling machinery. 
                Established in 2003 at Paddhari (Rajkot, Gujarat), we deliver sustainable solutions for plastic recycling 
                and polymer industries worldwide.
              </p>
              <div className="flex space-x-4 mt-[30px]">
                <a href="#" aria-label="Facebook" className="text-gray-400  hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
            <div className='w-[10px] flex md:hidden'>

            </div>
              {/* Column 3: Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Solutions</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <a href="" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                  Plastic Crushing & Washing Line
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                  Plastic Washing Machine
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                  Auxiliary Machinery
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                  PET Flakes
                  </a>
                </li>
                <li>
                  <a href="/services/teeth-whitening" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
               Polyester Stable Fiber
                  </a>
                </li>
                <li>
                  <a href="/services/emergency-care" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
              PET Masterbatch
                  </a>
                </li>
                <li>
                  <a href="/services/pediatric-dentistry" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                PET Granules
                  </a>
                </li>
             
              </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <a href="/about" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
           About Us
                  </a>
                </li>
                <li>
                  <a href="/our-team" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
              Blogs
                  </a>
                </li>
                <li>
                  <a href="/patient-resources" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
               Our Solutions
                  </a>
                </li>
                <li>
                  <a href="/insurance" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                  Pet Flakes
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
   Machinery
                  </a>
                </li>
            
                <li>
                  <a href="/contact" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    Contact Us
                  </a>
                </li>
                {/* <li>
                  <a
                    className="!text-white cursor-pointer border-white border md:text-[15px]  text-[13px] px-4 py-2 rounded-md inline-block mt-2 transition-colors" onClick={() => setIsOpen(true)}
                  >
                    Book Appointment
                  </a>
                </li> */}
              </ul>
            </div>
            <div className=' md:block hidden'>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className=' text-[13px]'>

                        Nr. Moviya Circle, Paddhari,<br />
                    Rajkot, Gujarat 360110, India
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919998877778" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">

                  +91 99 98 87 7778
                  </a>
                </li>
   
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@dynamicpolypet.com" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    info@dynamicpolypet.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className=' text-[13px]'>
 <div>Monday to Friday: 8.00 AM - 5.00 PM</div>
                    <div>Saturday - Sunday: Closed</div>
                
                    {/* <div>Sunday: Closed</div> */}
                  </div>
                </li>
              </ul>
            </div>

        
          </div>
          <div className=' md:hidden block mt-[40px]'>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className=' text-[13px]'>
         Nr. Moviya Circle, Paddhari,<br />
                  Rajkot, Gujarat 360110, India
                </span>
              </li>
     <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                   <a href="tel:+919998877778" className="hover:text-blue-300 transition-colors">
                  +91 99 98 87 7778
                </a>
                </li>
           
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
              <a href="mailto:info@dynamicpolypet.com" className="hover:text-blue-300 transition-colors">
                  info@dynamicpolypet.com
                </a>
              </li>
                 <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Monday to Friday: 8.00 AM - 5.00 PM</div>
                  <div>Saturday - Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Footer */}
        <div className="bg-gray-950 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-gray-400 mb-4">
              <h2 className="text-base font-medium text-gray-300 mb-3">
DYNAMIC POLYPET PVT. LTD.
              </h2>
              <p className="mb-2 text-[13px]">
                PET Recycling | Plastic Crushing & Washing Line | PET Flakes | PET Granules | PET Masterbatch | 
                Polyester Fiber | Plastic Recycling Machinery | Sustainable Plastic Solutions
              </p>
              <p className=' text-[12px]'>
                 Delivering advanced PET recycling and plastic processing solutions across India and worldwide.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 flex md:order-1 order-2 ">  © {currentYear} All Rights Reserved by Dynamic Polypet || Designed and Developed with ❤️ by Grafizen International LLC.</p>
              <div className="hidden  md:order-2 order-1  space-x-4 mt-4 md:mt-0 md:text-left text-center text-sm text-gray-500">
                <a href="/privacy-policy" className="hover:text-gray-300 text-gray-300 transition-colors">
                  Privacy Policy
                </a>
                <span className="text-gray-700">|</span>
                <a href="/terms-of-service" className="hover:text-gray-300   text-gray-300 transition-colors">
                  Terms of Service
                </a>
                <span className="text-gray-700">|</span>
                <a href="/sitemap" className="hover:text-gray-300  text-gray-300 transition-colors">
                  Sitemap
                </a>
                <span className="text-gray-700">|</span>
                <a href="/accessibility" className="hover:text-gray-300  text-gray-300 transition-colors">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>




 



   

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
