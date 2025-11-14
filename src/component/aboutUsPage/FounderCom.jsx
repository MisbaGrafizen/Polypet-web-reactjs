import React from 'react'
import { MapPin, Clock, CheckCircle } from "lucide-react"
import director from "../../../public/imges/aboutus/dipak.png" // 🔹 Replace with your Managing Director's image path

export default function FounderCom() {
  return (
    <>
      <section className="md:w-[83%] w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left side - Director Image */}
          <div className="flex flex-col md:order-2">
            <div className="relative rounded-2xl border">
              <div className="relative z-10 md:w-[400px] bg-white rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <div className="h-[390px] relative">
                  <img
                    src={director}
                    alt="Managing Director - Dynamic Polypet"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="absolute top-4 -left-4 w-24 h-24 rounded-full bg-blue-100 z-0"></div>
              <div className="absolute bottom-8 -right-6 w-32 h-32 rounded-full bg-blue-100 z-0"></div>

              <div className="absolute -bottom-4 w-[270px] md:w-fit border border-[rgba(255,230,230,0.42)] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full py-2 px-2 z-20">
                <p className="text-center text-[12px] md:text-[13px] font-medium text-gray-800">
                  Managing Director
                </p>
              </div>
            </div>

            <div className="pt-5 text-center">
              <h3 className="text-2xl font-bold dynamic-text ">Mr. Dipak sir</h3>
              <p className="  font-medium text-sm">
                Managing Director, Dynamic Polypet Pvt. Ltd.
              </p>
              <div className="mt-2 flex justify-center space-x-4">
                <span className="inline-flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Rajkot, India
                </span>
                {/* <span className="inline-flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  Since 2008
                </span> */}
              </div>
            </div>
          </div>

          {/* Right side - Director content */}
          <div className="lg:w-7/12 w-[90%] mx-auto md:mx-0 flex flex-col order-1">
            <div className="flex bg-[#cfd8eb] border-[#062f95] border text-[#062f95] w-fit px-4 py-1 rounded-full text-sm font-medium mb-4">
              Managing Director
            </div>

            <h2 className="text-[27px] md:text-3xl font-[700] text-[#062f95] leading-[33px] md:leading-[40px] mb-3">
              Our Journey of{" "}
              <span className=" dynamic-text text-black">Innovation & Sustainability</span>
            </h2>

            <p className="text-[15px] text-gray-700 text-justify mb-6">
              At <span className="text-[#062f95] font-semibold">Dynamic Polypet Pvt. Ltd.</span>, our journey since 2008 has been
              marked by innovation, quality, and sustainability. As the Managing Director,
              I am proud to lead a team dedicated to delivering superior plastic recycling
              machineries that meet the highest global standards.
            </p>

            <p className="text-[15px] text-gray-700 text-justify mb-6">
              Our relentless focus on Research & Development has driven us to develop
              cutting-edge recycling techniques and energy-efficient processes, positioning
              us as leaders in the industry. We are committed to sustainable practices,
              ensuring that our growth contributes positively to the community and the
              environment.
            </p>

            <p className="text-[15px] text-gray-700 text-justify mb-6">
              Looking ahead, we are poised to expand into new markets, invest in renewable
              energy, and continue our tradition of excellence. I extend my heartfelt
              gratitude to our team, clients, partners, and stakeholders for their
              unwavering support — and I am confident that together, we will achieve even
              greater success.
            </p>
{/* 
            <div className="bg-gradient-to-br from-[#1b2644] to-blue-600 rounded-xl border shadow-md p-4 mb-8">
              <h3 className="font-bold text-[#fff] text-lg mb-2">
                Core Commitments:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    Innovation-driven recycling technology
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    Sustainable and energy-efficient processes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    Commitment to global quality standards
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-[#fff] mr-2 mt-0.5" />
                  <span className="text-[14px] text-[#fff]">
                    Expanding renewable energy initiatives
                  </span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
