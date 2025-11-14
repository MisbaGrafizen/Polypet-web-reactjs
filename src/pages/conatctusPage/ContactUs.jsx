import React, { useState } from 'react'
import Header from '../../component/Header'
import ContactImage from "../../../public/imges/contactus/conatct.jpg"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Footer from '../../component/Footer'

export default function ContactUs() {

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ email: "", name: "", message: "" })
            setSubmitted(false)
        }, 2000)
    }

    return (
        <>
            <Header />
            <div className="min-h-screen font-Poppins bg-gradient-to-br pt-[20px] md:pt-[110px] ">
                <div className="relative flex flex-col gap-[100px]">
                    <div className="relative w-[80%] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 bg-[#062e9520] rounded-full text-sm font-medium text-[#062f95] mb-6">
                                    PET Recycling Machinery Manufacturer
                                </div>
                                <h1 className="md11:text-5xl md77:text-4xl text-[30px] font-[700] leading-[30px] md77:font-[600] text-gray-900 mb-7 md77:leading-[46px]">
                                    Take The Next Step
                                    <span style={{ color: "#062f95" }} className="block">
                                        & Reach Out Today
                                    </span>
                                </h1>
                                <p className="text-[17px] md11:text-[16px] font-[400] leading-[1.8] md:leading-[23px] mb-10 max-w-3xl">
                                    Founded in 2003, <b>Dynamic Polypet Pvt. Ltd.</b> is a trusted manufacturer of PET Recycling Machinery — including Pet Flakes, Mixed Pet Flakes, and Pet Bottle Washing Plants. Based in Rajkot, Gujarat, India, we deliver high-quality, globally compliant machinery with customer satisfaction at our core.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button
                                        className="px-3 md77:px-8 py-3 bg-gradient-to-br from-[#1b2644] to-blue-600 text-white font-semibold rounded-[10px] hover:opacity-90 transition-opacity shadow-lg text-[13px] md77:text-[16px]"
                                    >
                                        Enquire Now
                                    </button>

                                    <a
                                        href="tel:+919998877778"
                                        className="flex items-center gap-2 text-[#1b2644] font-semibold rounded-[10px] transition-all text-[13px] md77:text-[16px] hover:text-blue-700"
                                    >
                                        <div className="flex items-center justify-center rounded-full">
                                            <i className="fa-regular text-[20px] fa-phone-volume"></i>
                                        </div>
                                        <span>
                                            Call Now: <span className="text-[#03189d]">+91 99988 77778</span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden h-[350px] w-[500px] flex items-center justify-center">
                                    <img
                                        className="w-[100%] h-[100%] object-cover"
                                        src={ContactImage}
                                        alt="Dynamic Polypet Contact"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- CONTACT DETAILS SECTION ---------- */}
                    <main className="mt-[90px] bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900 pt-20 pb-20">
                        <div className="max-w-6xl mx-auto px-4">
                            <div className="relative mb-16">
                                <div className="flex justify-center absolute top-[-230px] md:grid-cols-2 lg:grid-cols-4 mx-auto left-0 right-0 gap-6 transform">
                                    {[
                                        {
                                            icon: MapPin,
                                            title: "OUR MAIN OFFICE",
                                            desc: "Survey No. – 42, Plot No. 1,\nNr. Hanumanji Temple,\nPaddhari–Haripar Road,\nNr. Moviya Circle, Paddhari,\nRajkot – 360110."
                                        },
                                        {
                                            icon: Phone,
                                            title: "PHONE NUMBER",
                                            desc: "+91 99988 77778\n+91 91062 87635"
                                        },
                                        {
                                            icon: Mail,
                                            title: "EMAIL",
                                            desc: "info@dynamicpolypet.com"
                                        },
                                        {
                                            icon: Linkedin,
                                            title: "WEB",
                                            desc: "www.dynamicpolypet.com"
                                        },
                                    ].map((item, idx) => {
                                        const Icon = item.icon
                                        return (
                                            <div
                                     
  key={idx}
  className={`bg-white/90 border border-blue-200 backdrop-blur-md rounded-3xl p-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 
  ${idx === 0 ? "w-[340px] pb-[10px]" : "w-[250px]"}`}  // 👈 Address box wider
>
                                                <div className="flex justify-center mb-4">
                                                    <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full">
                                                        <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                                                    </div>
                                                </div>
                                                <h3 className="text-center font-bold text-gray-900 text-sm mb-3">{item.title}</h3>
                                                <p className="text-center text-gray-600 text-[13px] ">{item.desc}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* ---------- CONTACT FORM ---------- */}
                            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    {/* Left Side - Form */}
                                    <div className="space-y-8">
                                        <div>
                                            <label className="block text-white font-semibold text-sm mb-3">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email address"
                                                className="w-full bg-white/20 backdrop-blur-md border-b-2 border-white/50 rounded-lg px-4 py-3 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white focus:bg-white/30 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-semibold text-sm mb-3">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                className="w-full bg-white/20 backdrop-blur-md border-b-2 border-white/50 rounded-lg px-4 py-3 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white focus:bg-white/30 transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white font-semibold text-sm mb-3">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Enter your message"
                                                rows={4}
                                                className="w-full bg-white/20 backdrop-blur-md border-b-2 border-white/50 rounded-lg px-4 py-3 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white focus:bg-white/30 transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-white text-blue-700 font-[600] text-[18px] py-4 rounded-full hover:shadow-lg hover:from-cyan-200 hover:to-blue-300 transition-all duration-300 mt-6"
                                        >
                                            {submitted ? "MESSAGE SENT!" : "SUBMIT"}
                                        </button>
                                    </div>

                                    {/* Right Side - Info + Social */}
                                    <div className="text-white text-center lg:text-right">
                                        <h1 className="text-5xl lg:text-6xl font-cu mb-8 font-[600]">Get in touch</h1>

                                        <p className="text-lg font-semibold leading-[20px] mb-4 text-blue-100">
                                            Manufacturing world-class PET Recycling Machinery from Rajkot, Gujarat.
                                        </p>

                                        <p className="text-sm text-white/80 leading-relaxed mb-12">
                                            At <b>Dynamic Polypet Pvt. Ltd.</b>, we believe in quality, precision, and performance. 
                                            Contact us today to discuss your requirements for PET recycling, washing, or processing plants.
                                        </p>

                                        <div className="flex justify-center lg:justify-end gap-6">
                                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                                <a
                                                    key={idx}
                                                    href="#"
                                                    className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all border border-white/20"
                                                >
                                                    <Icon className="w-5 h-5 text-white" fill={idx !== 2 ? "currentColor" : "none"} />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}
