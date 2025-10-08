"use client"

import { useState } from "react"
import drying from "../../../public/imges/petBottleIMachine/drying.jpg"
import  storing from "../../../public/imges/petBottleIMachine/sorting.jpg"
import  washing from "../../../public/imges/petBottleIMachine/washing.jpg"



export default function PETBottleWashingSection() {
  const [activeTab, setActiveTab] = useState("sorting")

  const tabs = [
    {
      id: "sorting",
      label: "SORTING AND CRUSHING",
      equipment: [
        "Bale Breaker",
        "Twin Screw",
        "Trommel",
        "Sorting Belt with Structure",
        "Label Remover Twin Shaft",
        "Pre washer",
        "U-truff Screw",
        "Crusher",
      ],
      image: storing,
    },
    {
      id: "washing",
      label: "WASHING",
      equipment: ["Incline Screw", "Spin Dryer", "Floating Tank", "Hot washer"],
      image: washing,
    },
    {
      id: "drying",
      label: "DRYING AND CLEANING",
      equipment: [
        "Pneumatic Drying System",
        "Vibrator",
        "Zig-Zag",
        "Metal Sorter with Z Elevator",
        "Storage Silo",
        "Blade Sharpening",
        "Electric Panel",
      ],
      image: drying,
    },
  ]

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  const getEquipmentIcon = (equipmentName) => {
    const iconMap = {
      "Bale Breaker": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
      "Twin Screw": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
        </svg>
      ),
      Trommel: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      "Sorting Belt with Structure": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      ),
      "Label Remover Twin Shaft": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
      "Pre washer": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      "U-truff Screw": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      Crusher: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a4 4 0 100 8m0-8a4 4 0 110 8m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      "Incline Screw": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
      "Spin Dryer": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      "Floating Tank": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z"
          />
        </svg>
      ),
      "Hot washer": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
        </svg>
      ),
      "Pneumatic Drying System": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      Vibrator: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      "Zig-Zag": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      "Metal Sorter with Z Elevator": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
      ),
      "Storage Silo": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      "Blade Sharpening": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      "Electric Panel": (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    }

    return (
      iconMap[equipmentName] || (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    )
  }

  return (
    <section className=" ">
      <div className=" w-[85%] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 mx-auto flex justify-center ">
              {/* <span className="text-blue-900 font-semibold text-sm uppercase border  border-blue-900 [tracking-wider bg-blue-200 px-4 py-[3px] rounded-full">WE ARE KNOWN FOR</span> */}
          </div>
          <h2 className="text-4xl text-center mx-auto font-bold text-slate-800 mb-4">PET bottle Washing and Crushing Line</h2>

          {/* Tab Navigation - Updated to Rounded Design */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white border rounded-[80px] p-[6px] items-center">
<div className="relative flex gap-4 items-center">
  {/* Sliding Background Indicator */}
  <div
    className="absolute h-10 bg-blue-600 rounded-full transition-all duration-300"
    style={{
      width: "auto",
      transform: `translateX(${tabs.findIndex((t) => t.id === activeTab) * 120}px)`, // adjust 120px depending on your button width
    }}
  ></div>

  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`relative z-10 px-5 py-[10px]  rounded-[50px] font-semibold text-sm transition-colors duration-300 ${
        activeTab === tab.id
          ? "text-white ] bg-gradient-to-br from-blue-900 to-blue-700"
          : "text-slate-600 hover:text-slate-800"
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>

            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed text-justify">
                Dynamic Polypet is grown up to high-tech group cooperation that specialized in R&D and manufacturing of
                the industrial machinery for plastic recycling. We offer recycling equipment fit for large-scale,
                large-volume recycling of post-consumer, post-commercial, and post-industrial plastic scrap.
              </p>
            </div>

            {/* Equipment List */}
            <div className="bg-white rounded-[20px] min-h-[30px] shadow-md border-[1.2px] border-blue-100 p-6">
              <h3 className="text-xl font-bold border-b-[1.5px] border-blue-800 border-dashed text-slate-800 pb-3 mb-3 flex items-center">
          
                Equipment Components
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentTab.equipment.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 border-l-[4px] border-l-blue-300 bg-transparent bg-gradient-to-r from-blue-50 to-blue-0  rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="text-blue-500 mr-2 group-hover:text-blue-600 transition-colors">
                      {getEquipmentIcon(item)}
                    </div>
                    <span className="text-slate-700 text-[13px] leading-4 font-[500]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons - COMPLETELY NEW DESIGNS */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Primary Button - Sleek Modern Style */}
              {/* <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white/30"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></div>
                <div className="relative flex items-center justify-center">
                  <span className="mr-3">Request Quote</span>
                  <div className="w-5 h-5border-2 border-white/60 flex items-center justify-center group-hover:border-white transition-colors">
                    <svg
                      className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button> */}
{/* 

              <button className="group relative px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:text-white">
                <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-blue-600/10 group-hover:border-b-white/20 transition-colors"></div>
                <div className="relative flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  <span>Download Brochure</span>
                </div>
              </button>


              <button className="group relative px-10 py-4 bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-slate-100 hover:border-slate-300">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                <div className="relative flex items-center justify-center ml-2">
                  <div className="w-8 h-8 border border-slate-300 rounded-full flex items-center justify-center mr-3 group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300">
                    <svg
                      className="w-4 h-4 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span>Technical Specs</span>
                </div>
              </button> */}
            </div>
          </div>

          {/* Right Column - Equipment Image */}
          <div className="relative">
            <div className="bg-white rounded-[20px] shadow-lg border border-gray-200 overflow-hidden">
              <div className=" h-[450px]  bg-[#9a9c9d] relative">
                <img
                  src={currentTab.image || "/placeholder.svg"}
                  alt={`${currentTab.label} Equipment`}
                  className="w-full h-full  object-contain"
                />

                {/* Equipment Badge */}
                <div className="absolute top-4 left-4">
                  <div className=" text-white px-4 text-[13px]  bg-gradient-to-br from-blue-900 to-blue-700 rounded-[20px] py-1 font-semibold shadow-lg">
                    {currentTab.label}
                  </div>
                </div>

                {/* Features Overlay */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="text-xs text-slate-600 mb-1">Equipment Count</div>
                    <div className="text-2xl font-bold text-blue-600">{currentTab.equipment.length}</div>
                  </div>
                </div>
              </div>

              {/* Image Footer */}  
              <div className="p-4 bg-slate-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Industrial Grade Equipment</div>
                    <div className="text-xs text-slate-600">High-efficiency plastic recycling machinery</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Quality Assured</div>
                  <div className="text-xs text-slate-600">ISO Certified Equipment</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>


   
      </div>
    </section>
  )
}
