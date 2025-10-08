import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// import logo from "../../../public/logo-black.avif"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Plant Head",
      company: "GreenReplast India Pvt. Ltd.",
      text: "Dynamic Polypet installed our 5-ton/day PET recycling line. The machinery quality and technical support have been excellent, helping us achieve higher efficiency and consistent PET flakes.",
      location: "Ahmedabad, India",
    },
    {
      id: 2,
      name: "Anita Verma",
      role: "Procurement Manager",
      company: "EcoPoly Fibres",
      text: "We source recycled PET flakes from Dynamic Polypet. Their quality control and commitment to timely delivery are far superior compared to other suppliers we worked with earlier.",
      location: "Delhi, India",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Operations Director",
      company: "Global Packaging Solutions",
      text: "Dynamic Polypet helped us set up a recycling unit for export-grade rPET. Their after-sales support and training program ensured smooth plant operations from day one.",
      location: "London, UK",
    },
    {
      id: 4,
      name: "Fatima Ali",
      role: "Sustainability Lead",
      company: "PureBeverages Ltd.",
      text: "Working with Dynamic Polypet has been a game-changer in achieving our sustainability goals. Their solutions made it possible for us to integrate rPET packaging across multiple product lines.",
      location: "Dubai, UAE",
    },
  ];


  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: '-50%',
          transition: { duration: 55, ease: "linear" },
        });
        controls.set({ x: 0 }); // reset position
      }
    };
    animate();
  }, [controls]);

  return (
    <div className=" px-4">
      <div className="w-[100%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-7">
          {/* <h3 className="text-[#062f95] border font-[600] px-[10px] bg-[#062f95]/10  rounded-full  py-[2px] border-[#062f95] w-fit uppercase tracking-widest text-[14px] mx-auto mb-2">TESTIMONIALS</h3> */}
          <h1 className="text-4xl md:text-[40px] font-[600] text-gray-900 mb-3">
            What Our Clients Say About
            <span className="text-[#062f95] font-[700] ml-2">Dynamic Polypet</span>
          </h1>

          <p className="text-[14px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide, our commitment to excellence is reflected in the testimonials from
            our valued clients and partners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex gap-[24px]   overflow-x-auto mb-2">
          <motion.div
            className="flex gap-6 w-max pb-[20px]"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-[#132142]  text-white ] md:w-[350px] justify-center p-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center justify-center pl-[10px] w-fit mb-5">
            <div className="w-10 h-10 rounded-full border-1 text-white flex items-center justify-center font-[600] mr-4">
  {testimonial.name.charAt(0).toUpperCase()}
</div>

                  <div className="text-left">
                    <h3 className="font-semibold text-[16px]">{testimonial.name}</h3>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stars + Testimonial */}
                <div className="border border-gray-500/50 rounded-md py-3 mb-[10px] px-6  mx-[10px]">
                  <div className="flex justify-center  absolute bg-[#132142] w-fit mx-auto left-0 right-0 top-[66px] px-[10px] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-yellow-400"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
             <p className="text-[13px] overflow-y-auto max-h-[100px] text-gray-200 leading-[20px] ">
  {testimonial.text.split(" ").slice(0, 30).join(" ")}...
</p>
                </div>

                {/* Bubble Pointer */}
                <div className="absolute -bottom-4 right-[0px] transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#132142]"></div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}
