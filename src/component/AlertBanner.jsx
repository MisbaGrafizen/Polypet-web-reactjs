import React, { useState, useEffect } from "react";

import { Modal as NextUIModal, ModalContent } from "@nextui-org/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Youtube, Shield, X, Check, Smile, Calendar, FileText, User, Home } from "lucide-react"

import axios from "axios";

export default function AlertBanner() {
  const [datainputModal, setDatainputModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [step, setStep] = useState(1);
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
    name: "",
    phone: "",
    email: "",
    userCity: "",
    city: "",
    treatment: [],
    hasReports: "",
    timeSlot: "",
    countryCode: "+61",
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
    if (!formData.phone || formData.phone.length !== 9) tempErrors.phone = 'Valid phone is required';
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
    setIsSubmitting(true);

    try {
      const res = await axios.post("https://server.grafizen.in/api/v2/cdh/admin/appointment", formData);
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
    } finally {
    setIsSubmitting(false); 
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
      <div className=" md:w-[85%] mx-auto  w-[100%]  mb-[40px] mt-[20px] p-4">
        <div className="bg-[#fff] shadow-md rounded-[20px]  border border-gray-100 md:h-[180px] p-[15px] md:p-[20px]">
          <div className="flex items-center w-[100%] gap-[12%]">
            <div className="flex items-center  relative gap-6">
              <div
                className=" CDH-uae z-[10] w-[50px]  justify-center items-center h-[50px] pl-[11px] pt-[13px]  p-3  rounded-[50px]"
                style={{ boxShadow: "0px 2px 4px rgba(255, 138, 0, 0.1)" }}
              >
                <i className=" text-[#fff] text-[25px] fa-regular fa-shield-check"></i>
              </div>

              <div className="  absolute text-left gap-[5px] leadeing-[20px]  shadow-md  justify-start  h-[38px] left-[16px] font-[600] font-Poppins CDH-gradiant  pl-[30px] pt-[13px] items-center  flex flex-col rounded-[20px]  text-[14px] CDH-gradient  border-[1.3px]  w-[125px]">
                <p className=" leading-3 ">Book Now</p>
                <p className=" leading-3"></p>
              </div>
            </div>
            {/* Title */}
            <h2 className="md:text-[26px]  md:flex hidden font-[600]  text-gray-900 font-Poppins">
              Book your slot for Free One-on-One Dental Meet Up
            </h2>
          </div>

          {/* Message */}
          <p className="text-[15px] text-gray-600 w-[] font-Poppins mt-[10px] max-w-[800px]">
            Slots are limited - Reserve your meeting with Dr. Anand Jasani & Team City Dental in Sydney, Brisbane or Melbourne.

          </p>

          {/* Read More Button */}
          <div className="flex justify-end mt-[10px] md:mt-[-10px]">
            <button className="CDH-uae font-Poppins text-white px-5 py-2 rounded-lg text-[15px] font-medium hover:bg-[#F85A2A]/90 transition-colors" onClick={() => setIsOpen(true)}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {isOpen && (

        <div className="fixed font-Poppins inset-0 z-50 flex items-center justify-center modal-overlay bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full  max-w-3xl rounded-2xl md:flex  hidden overflow-hidden  shadow-2xl  max-h-[600px] overflow-y-auto relative animate-fadeIn">
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
                        {errors.name && <p className="text-red-500 absolute top-[30px]  left-[10px] bg-white text-[13px] mt-1">{errors.name}</p>}
                      </div>

                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Phone className="w-4 h-4 text-gray-400" />
                        </div>

                        {/* Static Country Code Display */}
                        <div className="absolute left-9 top-1/2 transform -translate-y-1/2 z-10">
                          <div className="text-[16px] font-[400] px-2 py-[2px] rounded-md bg-transparent text-gray-800 w-[50px] text-center">
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
                                countryCode: '+61',
                              }));
                            }
                          }}
                          className={`w-full pl-[90px] p-2.5 border rounded-lg focus:ring-[0px] focus:ring-teal-500 focus:border-teal-500 outline-none transition-all ${errors.phone ? "border-red-500" : "border-gray-300"
                            }`}
                          placeholder="Phone Number"
                        />
                        {errors.phone && <p className="text-red-500 absolute top-[30px]  left-[10px] bg-white text-[13px] mt-1">{errors.phone}</p>}
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
                        {errors.email && <p className="text-red-500 absolute top-[30px]  left-[10px] bg-white text-[13px] mt-1">{errors.email}</p>}
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
                        {errors.userCity && <p className="text-red-500 absolute top-[30px]  left-[10px] bg-white text-[13px] mt-1">{errors.userCity}</p>}
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
                    {isSubmitting ? "Submitting..." : "Book Your Consultation"}
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
                  {isSubmitting ? "Submitting..." : "Book Your Consultation"}
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white w-full  max-w-3xl rounded-2xl flex  md:hidden overflow-hidden  shadow-2xl  max-h-[600px] overflow-y-auto relative animate-fadeIn">

            <div className="CDH-uae rounded-t-[16px] z-[200] fixed px-6 py-[10px] w-[92%] md:w-[100%] md:max-w-3xl">

              <h2 className="text-[18px] font-[600] leading-5 text-white">Book your free slot for One-on-One dental meet up</h2>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-[#fff] hover:text-gray-600 z-10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 w-[100%] h-[500px] mt-[30px] min-h-[270px] ">
              <div className="grid grid-cols-1 h-[100%] md:grid-cols-2 gap-6 w-[100%]">
                {/* Left Column */}
                {/* <div className="space-y-6 md:pt-0 pt-[20px]">

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Smile className="w-5 h-5 text-teal-600" />
                      <h3 className="text-lg font-semibold text-gray-800">Treatment Required</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-2 ">
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
                  <button className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto CDH-uae text-[#fff] items-center  w-[60%] px-[20px] ">
                    Next
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>

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
                            if (/^\d{0,10}$/.test(input)) {
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


                </div> */}



                <div className="space-y-6 w-[100%] h-fit pt-5 transition-all duration-500">

                  {step === 1 && (
                    <div className="animate-fade-in w-full space-y-3">
                      <div className="flex items-center gap-2">
                        <Smile className="w-5 h-5 text-teal-600" />
                        <h3 className="text-lg font-semibold text-gray-800">Treatment Required</h3>
                      </div>

                      <div className="grid grid-cols-1 gap-2 ">
                        {treatments.map((treatment) => (
                          <label
                            key={treatment}
                            className={`flex items-center gap-3 p-[7px] border rounded-lg cursor-pointer transition-all ${formData.treatment.includes(treatment)
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
                      {/* {errors.treatment && <p className="text-red-500 text-sm pl-7">{errors.treatment}</p>} */}

                      <button onClick={() => setStep(2)} className=" flex gap-[10px]  mt-[40px]  font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto CDH-uae text-[#fff] items-center  w-[60%] px-[20px] ">
                        Next
                        <i className="fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                  )}


                  {step === 2 && (
                    <div className="animate-fade-in h-[100%] flex flex-col justify-between space-y-3">
                      <div className="flex  gap-2">
                        <MapPin className="w-5 h-5 mt-[px] text-teal-600" />
                        <h3 className="text-lg font-semibold leading-5 text-gray-800">City for one-on-one dental meet</h3>
                      </div>

                      <div className="grid grid-cols-1 gap-2  pt-[10px]">
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
                      {/* {errors.city && <p className="text-red-500 text-sm pl-7">{errors.city}</p>} */}
                      <div className="flex gap-[40px] justify-between w-[100%] pt-[180px] mx-auto">
                        <button onClick={() => setStep(1)} className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto= text-[#ff1616] border-[1.5px] border-[#ff1616] items-center  w-[60%] px-[20px] ">
                          <i className="fa-regular fa-arrow-left"></i>
                          Back

                        </button>
                        <button onClick={() => setStep(3)} className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto CDH-uae text-[#fff] items-center  w-[60%] px-[20px] ">
                          Next
                          <i className="fa-regular fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in space-y-3">
                      <div className="flex gap-2">
                        <Calendar className="w-5 h-5 text-teal-600" />
                        <h3 className="text-lg font-semibold text-gray-800">Preferred time slot</h3>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
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
                      <div className="flex gap-[40px] justify-between w-[100%] pt-[200px] mx-auto">
                        <button onClick={() => setStep(2)} className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto= text-[#ff1616] border-[1.5px] border-[#ff1616] items-center  w-[60%] px-[20px] ">
                          <i className="fa-regular fa-arrow-left"></i>
                          Back

                        </button>
                        <button onClick={() => setStep(4)} className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto CDH-uae text-[#fff] items-center  w-[60%] px-[20px] ">
                          Next
                          <i className="fa-regular fa-arrow-right"></i>
                        </button>
                      </div>

                    </div>
                  )}

                  {step === 4 && (
                    <div className="animate-fade-in space-y-3">
                      <div className="flex  gap-2">
                        <FileText className="w-5 h-5 mt-[px] text-teal-600" />
                        <h3 className="text-lg font-semibold leading-[22px] text-gray-800">Do you have any dental reports?</h3>
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
                      <div className="flex gap-[40px] justify-between w-[100%] pt-[230px] mx-auto">
                        <button onClick={() => setStep(3)} className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto= text-[#ff1616] border-[1.5px] border-[#ff1616] items-center  w-[60%] px-[20px] ">
                          <i className="fa-regular fa-arrow-left"></i>
                          Back

                        </button>
                        <button onClick={() => setStep(5)} className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto CDH-uae text-[#fff] items-center  w-[60%] px-[20px] ">
                          Next
                          <i className="fa-regular fa-arrow-right"></i>
                        </button>
                      </div>

                    </div>
                  )}
                  {step === 5 && (
                    <>


                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <User className="w-5 h-5 text-teal-600" />
                          <h3 className="text-lg font-semibold text-gray-800">Your Contact Information</h3>
                        </div>

                        <div className="space-y-3 pt-[10px]">
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
                      <div className="pt-[10px] w-[100%]">


                        <div className="flex gap-[40px] justify-between w-[100%] pt-[80px] mx-auto">
                          <button onClick={() => setStep(4)} className=" flex gap-[10px]   font-[500] justify-between rounded-md  h-[40px] text-[20px] mx-auto= text-[#ff1616] border-[1.5px] border-[#ff1616] items-center  w-[60%] px-[20px] ">
                            <i className="fa-regular fa-arrow-left"></i>
                            Back

                          </button>
                          <button onClick={handleSubmit} className=" flex gap-[10px]   font-[600] justify-center rounded-md  h-[40px] text-[20px] mx-auto CDH-uae text-[#fff] items-center  w-[60%] px-[20px] ">

                            Submit
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>


              </div>

              {/* Submit Button */}
              <div className="md:mt-  md:mb-[0px] pb-[29px] md:flex hidden justify-center">
                <button
                  type="submit"
                  className=" CDH-uae text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center" onClick={handleSubmit}

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
  );
}
