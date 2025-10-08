import React from 'react'
import factory from "../../../public/imges/aboutus/Factory-1.jpg"

export default function AboutCom() {
    return (
        <>


            <div className="w-full  ">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div className="relative">
                            <div className="bg-white rounded-2xl shadow-lg">
                                <img
                                    src={factory}
                                    alt="Modern Office Building"
                                    className="w-full h-[400px]  object-cover rounded-xl"
                                />

                                {/* Floating Stats Cards */}
                             

                                <div className="absolute -bottom-4 -left-4 border bg-[#0c3ee147] text-white justify-center items-center flex flex-col p-4  backdrop-blur-[10px] rounded-lg shadow-lg">
                                    <div className="text-2xl font-bold">500+</div>
                                    <div className="text-sm">Happy Clients</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-4">
                            {/* Section Label */}
                            {/* <div className="inline-block">
                                <span className="text-blue-900 font-semibold text-sm uppercase border  border-blue-900 [tracking-wider bg-blue-200 px-4 py-[3px] rounded-full">
                                    ABOUT US
                                </span>
                            </div> */}

                            {/* Main Heading */}
                            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
                                Why Choose Our Financial Services
                            </h2>

                            {/* Description Paragraphs */}
                            <div className="space-y-4 text-[14px] text-gray-600 text-justify leading-[20px]">
                                <p>
                                    Excellence Financial Services is one of the largest providers of comprehensive financial solutions in
                                    India. The company is anchored by forward-looking professionals who bring decades of experience in
                                    accounting, taxation, and business advisory services.
                                </p>

                                <p>
                                    Excellence Financial Services India has been serving businesses since 2008, established with a vision to
                                    provide world-class financial expertise. Excellence Financial Services India has been serving businesses since 2008, established with a vision to
                                    provide world-class financial expertise.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex border h-[50px] rounded-[10px] shadow-md border-gray-200 items-center gap-3">
                                    <div className="w-[50px] h-[100%] shadow-lg border-r bg-blue-900 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold"><i className=" text-[23px] fa-regular fa-badge-check"></i></span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Expert Team</div>
                                        <div className="text-[10px] text-gray-600">Certified Professionals</div>
                                    </div>
                                </div>

                                <div className="flex border h-[50px] rounded-[10px] shadow-md border-gray-200 items-center gap-3">
                                     <div className="w-[50px] h-[100%] shadow-lg border-r bg-blue-900 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold"><i className=" text-[23px] fa-regular fa-badge-check"></i></span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">24/7 Support</div>
                                        <div className="text-[10px] text-gray-600">Always Available</div>
                                    </div>
                                </div>

                               
                            </div>

                       
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
