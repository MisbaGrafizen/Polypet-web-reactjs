import React, { useState, useEffect } from "react";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Youtube, Shield, X, Check, Smile, Calendar, FileText, User, Home } from "lucide-react"


// import logo1 from "../../public/cdhlogo.webp"
// import logo2 from "../../public/cdh2logo.webp"
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("https://server.grafizen.in/api/v2/cdh/admin/appointment", {
  //       name,
  //       email,
  //       phone,
  //       city,
  //     });

  //     console.log("res", res);

  //     alert("Appointment Booked! Email Sent to CDH.");
  //     setName("");
  //     setPhone("");
  //     setEmail("");
  //     setCity("");
  //     setDatainputModal(false);
  //   } catch (error) {
  //     console.error("Error booking appointment:", error);
  //     alert("Error booking appointment");
  //   }
  // };


  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    userCity: '',
    treatment: [],
    hasReports: '',
    timeSlot: '',
  });

  const [errors, setErrors] = useState({})


  const treatments = [
    "Dental Implants",
    "All on 4/All on 6 Implants",
    "Full mouth Dental Implants",
    "Smile designing",
    "Veneers",
    "Zirconium crown",
    "Bollywood smile",
    "Others",
  ]

  const cities = ["Sydney (13 , 14 & 15 September) ", "Brisbane (17 & 18 September)", "Melbourne (19 , 20 & 21 September)",]

  const timeSlots = [
    { value: "morning", label: "Morning (10am-1pm)" },
    { value: "afternoon", label: "Afternoon (1pm-4pm)" },
    { value: "evening", label: "Evening (4pm-6pm)" },
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          treatment: [...formData.treatment, value],
        })
      } else {
        setFormData({
          ...formData,
          treatment: formData.treatment.filter((item) => item !== value),
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.phone || formData.phone.length !== 10) tempErrors.phone = 'Valid phone is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.city) tempErrors.city = 'Select a city';
    if (!formData.treatment.length) tempErrors.treatment = 'Choose at least one treatment';
    if (!formData.hasReports) tempErrors.hasReports = 'Select a dental report option';
    if (!formData.timeSlot) tempErrors.timeSlot = 'Select a time slot';
    if (!formData.userCity) tempErrors.userCity = 'Enter your city';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post("https://server.grafizen.com/api/v2/cdh/admin/appointment", formData);
      alert("Consultation booked successfully!");
      setFormData({
        name: '',
        phone: '',
        email: '',
        userCity: '',
        treatment: [],
        city: '',
        hasReports: '',
        timeSlot: '',
      });
      setIsOpen(false);
    } catch (err) {
      alert("Error booking consultation. Try again.");
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])


  return (
    <>



      <footer className="bg-gray-900 font-Poppins text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Practice Info */}
            <div>
              <div className="mb-2 w-fit mx-auto md:ml-[29px] flex">
                {/* <img
                  src={logo1}
                  alt="Bright Smile Dental Clinic Logo"
                  className=" h-[100px] w-auto"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=48&width=180&text=Bright+Smile+Dental"
                    e.target.onerror = null
                  }}
                />
                <img
                  src={logo2}
                  alt="Bright Smile Dental Clinic Logo"
                  className=" h-[80px] w-auto"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=48&width=180&text=Bright+Smile+Dental"
                    e.target.onerror = null
                  }}
                /> */}
              </div>
              <p className="text-gray-100 flex-shrink-0 w-[300px] font-[600] mb-4">
                CITY DENTAL HOSPITAL, RAJKOT
              </p>
              <div className="flex space-x-4 mt-[30px]">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition-colors">
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
            {/* Column 2: Contact Information */}
            <div className=' md:block hidden'>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className=' text-[13px]'>

                    Virani Chowk, 1st Floor Vidyanagar Main Road &  Corner,
                    <br />
                    Commissioner Bunglow Rd,
                    <br />
                    Rajkot, Gujarat 360002
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919609696000" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">

                    +91 9609696000
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919091919090" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">

                    +91 9091919090
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@brightsmile.com" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    internationalcdh@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className=' text-[13px]'>
                    <div>Monday to Saturday : 9.00 AM - 7.00 PM</div>
                    <div>Sunday : 10.00 AM - 6.00 PM (All Sundays open)</div>
                    {/* <div>Sunday: Closed</div> */}
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <a href="/services/general-dentistry" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Dental Implant
                  </a>
                </li>
                <li>
                  <a href="/services/cosmetic-dentistry" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Full Mouth Rehabilitaion
                  </a>
                </li>
                <li>
                  <a href="/services/dental-implants" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Invisible Aligners
                  </a>
                </li>
                <li>
                  <a href="/services/orthodontics" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Smile Makeover
                  </a>
                </li>
                <li>
                  <a href="/services/teeth-whitening" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Crowns & Bridges
                  </a>
                </li>
                <li>
                  <a href="/services/emergency-care" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Teeth Whitening
                  </a>
                </li>
                <li>
                  <a href="/services/pediatric-dentistry" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Braces Treatment
                  </a>
                </li>
                <li>
                  <a href="/services/root-canal-therapy" className="hover:text-blue-300 text-gray-300 transition-colors text-[13px]">
                    Pediatric dentistry
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
                    Social Service
                  </a>
                </li>
                <li>
                  <a href="/our-team" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/patient-resources" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/insurance" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    Nervous?
                  </a>
                </li>
                <li>
                  <a href="/testimonials" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
                    Carrer
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
          </div>
          <div className=' md:hidden block mt-[40px]'>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className=' text-[13px]'>

                  Virani Chowk, 1st Floor Vidyanagar Main Road &  Corner,
                  <br />
                  Commissioner Bunglow Rd,
                  <br />
                  Rajkot, Gujarat 360002
                </span>
              </li>
     <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919609696000" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">

                    +91 9609696000
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+919091919090" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">

                    +91 9091919090
                  </a>
                </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@brightsmile.com" className="hover:text-blue-300 transition-colors text-[13px] text-gray-300">
        internationalcdh@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className=' text-[13px]'>
                  <div>Monday to Saturday : 9.00 AM - 7.00 PM</div>
                  <div>Sunday : 10.00 AM - 6.00 PM (All Sundays open)</div>
                  <div>Sunday: Closed</div>
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
                CITY DENTAL HOSPITAL, RAJKOT
              </h2>
              <p className="mb-2 text-[13px]">
                Affordable Dental Implants | Cosmetic Dentistry | Teeth Whitening | Invisalign | Emergency Dental Care |
                Family Dentistry | Pediatric Dentistry | Dental Crowns and Bridges | Dental Veneers | Tooth Extraction |
                Wisdom Teeth Removal | Dental Fillings | Root Canal Treatment | Dentures | Gum Disease Treatment
              </p>
              <p className=' text-[12px]'>
                Serving patients in Manhattan, Brooklyn, Queens, The Bronx, Staten Island, and surrounding areas.
                Conveniently located near public transportation.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 flex md:order-1 order-2 ">© {currentYear} All Rights Reserved by CDH || Designed and
                Developed with ❤️ by Grafizen International LLC.</p>
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




 



   
         {isOpen && (
           <div className="fixed font-Poppins inset-0 z-50 flex items-center justify-center modal-overlay bg-black/50 backdrop-blur-sm p-4">
             <div className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden  shadow-2xl  max-h-[600px] overflow-y-auto relative animate-fadeIn">
               {/* Close button */}
   
   
               {/* Header with tooth pattern */}
               <div className="CDH-uae rounded-t-[16px] z-[200] fixed px-6 py-[10px] w-[92%] md:w-[100%] md:max-w-3xl">
   
                 <h2 className="text-[20px] font-[600] text-white">Book your free slot for One-on-One dental meet up</h2>
                 {/* <p className="text-teal-100 mt-[3px] text-[13px]">Complete the form to schedule your one-on-one dental meet</p> */}
                 <button
                   onClick={() => setIsOpen(false)}
                   className="absolute top-4 right-4 text-[#fff] hover:text-gray-600 z-10"
                 >
                   <X className="w-6 h-6" />
                 </button>
               </div>
   
               <div className="p-6 h-[500px] mt-[50px] min-h-[870px] ">
                 <div className="grid grid-cols-1 h-[100%] md:grid-cols-2 gap-6">
                   {/* Left Column */}
                   <div className="space-y-6 md:pt-0 pt-[20px]">
                     {/* Treatment Selection */}
                     <div className="space-y-3">
                       <div className="flex items-center gap-2">
                         <Smile className="w-5 h-5 text-teal-600" />
                         <h3 className="text-lg font-semibold text-gray-800">Treatment Required</h3>
                       </div>
   
                       <div className="grid grid-cols-1 gap-2 pl-7">
                         {treatments.map((treatment) => (
                           <label
                             key={treatment}
                             className={`flex items-center gap-3 p-2 border rounded-lg cursor-pointer transition-all ${formData.treatment.includes(treatment)
                               ? "border-teal-500 bg-teal-50"
                               : "border-gray-200 hover:border-teal-200"
                               }`}
                           >
                             <input
                               type="checkbox"
                               name="treatment"
                               value={treatment}
                               checked={formData.treatment.includes(treatment)}
                               onChange={handleInputChange}
                               className="sr-only"
                             />
                             <div
                               className={`w-5 h-5 rounded border flex items-center justify-center ${formData.treatment.includes(treatment)
                                 ? "bg-teal-500 border-teal-500 text-white"
                                 : "border-gray-300"
                                 }`}
                             >
                               {formData.treatment.includes(treatment) && <Check className="w-3 h-3" />}
                             </div>
                             <span className="text-gray-700 text-[13px]">{treatment}</span>
                           </label>
                         ))}
                       </div>
                       {errors.treatment && <p className="text-red-500 text-sm pl-7">{errors.treatment}</p>}
                     </div>
   
                     {/* City Selection */}
                     <div className="space-y-3">
                       <div className="flex items-center gap-2">
                         <MapPin className="w-5 h-5 text-teal-600" />
                         <h3 className="text-lg font-semibold text-gray-800">City for one-on-one dental meet</h3>
                       </div>
   
                       <div className="grid grid-cols-1 gap-2 pl-7">
                         {cities.map((city) => (
                           <label
                             key={city}
                             className={`flex items-center gap-3 p-2 border rounded-lg cursor-pointer transition-all ${formData.city === city
                               ? "border-teal-500 bg-teal-50"
                               : "border-gray-200 hover:border-teal-200"
                               }`}
                           >
                             <input
                               type="radio"
                               name="city"
                               value={city}
                               checked={formData.city === city}
                               onChange={handleInputChange}
                               className="sr-only"
                             />
                             <div
                               className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.city === city ? "border-4 border-teal-500" : "border-gray-300"
                                 }`}
                             ></div>
                             <span className="text-gray-700 text-[13px]">{city}</span>
                           </label>
                         ))}
                       </div>
                       {errors.city && <p className="text-red-500 text-sm pl-7">{errors.city}</p>}
                     </div>
   
                     {/* Dental Reports */}
                     <div className="space-y-3">
                       <div className="flex items-center gap-2">
                         <FileText className="w-5 h-5 text-teal-600" />
                         <h3 className="text-lg font-semibold text-gray-800">Do you have any dental reports?</h3>
                       </div>
   
                       <div className="grid grid-cols-1 gap-2 pl-7">
                         {["Yes- I will carry them", "No- I need a fresh consultation"].map((option) => (
                           <label
                             key={option}
                             className={`flex items-center gap-3 p-2 border rounded-lg cursor-pointer transition-all ${formData.hasReports === option
                               ? "border-teal-500 bg-teal-50"
                               : "border-gray-200 hover:border-teal-200"
                               }`}
                           >
                             <input
                               type="radio"
                               name="hasReports"
                               value={option}
                               checked={formData.hasReports === option}
                               onChange={handleInputChange}
                               className="sr-only"
                             />
                             <div
                               className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.hasReports === option ? "border-4 border-teal-500" : "border-gray-300"
                                 }`}
                             ></div>
                             <span className="text-gray-700 text-[13px]">{option}</span>
                           </label>
                         ))}
                       </div>
                       {errors.hasReports && <p className="text-red-500 text-[13px] pl-7">{errors.hasReports}</p>}
                     </div>
                   </div>
   
                   {/* Right Column */}
                   <div className="space-y-6">
                     {/* Time Slot */}
                     <div className="space-y-3">
                       <div className="flex items-center gap-2">
                         <Calendar className="w-5 h-5 text-teal-600" />
                         <h3 className="text-lg font-semibold text-gray-800">Preferred time slot</h3>
                       </div>
   
                       <div className="grid grid-cols-1 gap-2 pl-7">
                         {timeSlots.map((slot) => (
                           <label
                             key={slot.value}
                             className={`flex items-center gap-3 p-2 border rounded-lg cursor-pointer transition-all ${formData.timeSlot === slot.value
                               ? "border-teal-500 bg-teal-50"
                               : "border-gray-200 hover:border-teal-200"
                               }`}
                           >
                             <input
                               type="radio"
                               name="timeSlot"
                               value={slot.value}
                               checked={formData.timeSlot === slot.value}
                               onChange={handleInputChange}
                               className="sr-only"
                             />
                             <div
                               className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.timeSlot === slot.value ? "border-4 border-teal-500" : "border-gray-300"
                                 }`}
                             ></div>
                             <span className="text-gray-700 text-sm">{slot.label}</span>
                           </label>
                         ))}
                       </div>
                       {errors.timeSlot && <p className="text-red-500 text-[13px] pl-7">{errors.timeSlot}</p>}
                     </div>
   
                     {/* Contact Information */}
                     <div className="space-y-3">
                       <div className="flex items-center gap-2">
                         <User className="w-5 h-5 text-teal-600" />
                         <h3 className="text-lg font-semibold text-gray-800">Your Contact Information</h3>
                       </div>
   
                       <div className="space-y-3 pl-7">
                         <div className="relative">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                             <User className="w-4 h-4 text-gray-400" />
                           </div>
                           <input
                             type="text"
                             id="name"
                             name="name"
                             value={formData.name}
                             onChange={handleInputChange}
                             className={`w-full pl-10 p-2.5 border rounded-lg focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all ${errors.name ? "border-red-500" : "border-gray-300"
                               }`}
                             placeholder="Full Name"
                           />
                           {errors.name && <p className="text-red-500  text-[13px] mt-1">{errors.name}</p>}
                         </div>
   
                         <div className="relative">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                             <Phone className="w-4 h-4 text-gray-400" />
                           </div>
   
                           {/* Static Country Code Display */}
                           <div className="absolute left-9 top-1/2 transform -translate-y-1/2 z-10">
                             <div className="text-[16px] font-[400] px-2 py-[2px] rounded-md bg-white text-gray-800 w-[50px] text-center">
                               +61
                             </div>
                           </div>
   
                           <input
                             type="tel"
                             id="phone"
                             name="phone"
                             value={formData.phone}
                             onChange={(e) => {
                               const input = e.target.value;
                               if (/^\d{0,9}$/.test(input)) {
                                 setFormData((prev) => ({
                                   ...prev,
                                   phone: input,
                                   countryCode: '+61', // ✅ enforce +971
                                 }));
                               }
                             }}
                             className={`w-full pl-[90px] p-2.5 border rounded-lg focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all ${errors.phone ? "border-red-500" : "border-gray-300"
                               }`}
                             placeholder="Phone Number"
                           />
                           {errors.phone && <p className="text-red-500 text-[13px] mt-1">{errors.phone}</p>}
                         </div>
   
   
                         <div className="relative">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                             <Mail className="w-4 h-4 text-gray-400" />
                           </div>
                           <input
                             type="email"
                             id="email"
                             name="email"
                             value={formData.email}
                             onChange={handleInputChange}
                             className={`w-full pl-10 p-2.5 border rounded-lg focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-300"
                               }`}
                             placeholder="Email Address"
                           />
                           {errors.email && <p className="text-red-500 text-[13px] mt-1">{errors.email}</p>}
                         </div>
   
                         <div className="relative">
                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                             <Home className="w-4 h-4 text-gray-400" />
                           </div>
                           <input
                             type="text"
                             id="userCity"
                             name="userCity"
                             value={formData.userCity}
                             onChange={handleInputChange}
                             className={`w-full pl-10 p-2.5 border rounded-lg focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all ${errors.userCity ? "border-red-500" : "border-gray-300"
                               }`}
                             placeholder="Your City"
                           />
                           {errors.userCity && <p className="text-red-500 text-sm mt-1">{errors.userCity}</p>}
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className=" flex md:hidden pb-[20px]">
   
   
                     <button
                       type="submit"
                       className=" CDH-uae text-white my-[10px] px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
                       onClick={handleSubmit}
                     >
                       <span>Book Your Consultation</span>
                       <Check className="w-5 h-5" />
                     </button>
                   </div>
                 </div>
   
                 {/* Submit Button */}
                 <div className="md:mt-  md:mb-[0px] pb-[29px] md:flex hidden justify-center">
                   <button
                     type="submit"
                     className=" CDH-uae text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
                     onClick={handleSubmit}
                   >
                     <span>Book Your Consultation</span>
                     <Check className="w-5 h-5" />
                   </button>
                 </div>
               </div>
             </div>
           </div>
         )}
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
