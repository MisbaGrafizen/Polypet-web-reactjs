// src/components/AboutUs.jsx
import React from 'react';
import image from "../../../public/imges/Herosection/first1Desktop.jpg"; // replace with your image path
import { CheckCircle, Clock, Leaf } from "lucide-react";

export default function AboutUsPageCom() {
  return (
    <>
      <div className="w-[78%] mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          {/* Text block */}
          <div className="space-y-4 md:w-[55%]">
            <h1 className="text-[45px] font-[600] text-gray-800 tracking-tight">
              About <b className="font-[600] text-[#00a0e3]">Us</b>
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700">
              Driving <span className="text-[#00a0e3]">Sustainability & Quality</span> in Plastic Recycling
            </h2>

            <p className="text-gray-600 text-justify leading-relaxed">
              Founded in the year 2003, Dynamic Polypet Pvt. Ltd. has emerged as a dependable and reputed
              manufacturer of a broad range of PET Flakes, Mixed PET Flakes, and Pet Bottle Washing Plants.
              Based in Rajkot (Gujarat, India), we are committed to building an eco-friendly future through innovation,
              consistency, and uncompromised quality.
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Our advanced infrastructure and modern manufacturing facilities enable us to produce high-quality products
              that meet global standards. Under the guidance of
            </p>

            {/* Quick stats */}
            <div className="flex gap-[30px] pt-2">
              <div className="bg-gray-50 p-4 shadow-md w-[200px] rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#00a0e3]">20+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-gray-50 p-4 w-[200px] shadow-md rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#00a0e3]">1000+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Image block */}
          <div className="relative h-[450px] md:w-[42%] w-full rounded-lg overflow-hidden shadow-xl">
            <img
              src={image}
              alt="Dynamic Polypet Manufacturing Unit"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-5 p-6">
              <div className="inline-block bg-white px-4 py-[4px] rounded-md shadow-md">
                <h3 className="text-gray-800 font-[600]">Est. 2003</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 px-[20px]">
          <div className="text-center mb-8">
            <h2 className="text-[40px] font-[600] text-gray-800">
              Our Core <b className="font-[600] text-[#00a0e3]">Values</b>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                desc: "We follow strict quality standards to ensure our products meet the expectations of global clients and industries.",
                icon: <CheckCircle className="h-6 w-6 text-white" />,
              },
              {
                title: "Integrity",
                desc: "Transparency, honesty, and responsibility are the foundation of all our operations and partnerships.",
                icon: <Clock className="h-6 w-6 text-white" />,
              },
              {
                title: "Sustainability",
                desc: "We are dedicated to environmental responsibility, turning plastic waste into reusable resources for a greener future.",
                icon: <Leaf className="h-6 w-6 text-white" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-tr-[30px] shadow-md rounded-[2px] border-[1.2px] border-[#00c3ff] hover:shadow-lg transition-shadow"
              >
                <div className=' flex gap-[10px] items-center'>


                  <div className="w-12 h-12 bg-[#00c3ff] rounded-[8px] shadow-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
