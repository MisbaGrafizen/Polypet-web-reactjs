"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Droplet, Check, Zap, Award } from "lucide-react"
// import Image from "next/image"
import { useState } from "react"

import clearFlakes from "../../../public/imges/flakesImges/Clear-PET-Flex.jpg"
import greenFlakes from "../../../public/imges/flakesImges/Green_PET_Flex.png"
import lightFlakes from "../../../public/imges/flakesImges/Light-blue-PET-Flex.jpg"

const flakes = [
    {
        id: "light-blue",
        name: "Light Blue PET Flakes",
        badge: "Premium Grade",
        description: "Premium light blue PET flakes engineered for transparent packaging materials with superior clarity",
        image: lightFlakes,
        specs: ["99.2% Purity", "Premium Grade", "Thermal Stable"],
        applications: ["Soft drink bottles", "Beverage containers", "Cosmetic packaging", "Edible oil bottles"],
        features: [
            "Excellent clarity and transparency",
            "Consistent melting properties",
            "Superior mechanical strength",
            "Food-grade certified",
        ],
    },
    {
        id: "clear",
        name: "Clear PET Flakes",
        badge: "Crystal Clear",
        description: "Crystal clear recycled PET flakes with exceptional thermal stability and high purity",
        image: clearFlakes,
        specs: ["Crystal Clear", "High Purity", "Thermal Resistant"],
        applications: ["Sheets and containers", "Toy manufacturing", "Kitchenware", "Protective covers"],
        features: [
            "Good mechanical properties",
            "Narrow molecular weight",
            "Precise melting point",
            "High demand standard",
        ],
    },
    {
        id: "green",
        name: "Green PET Flakes",
        badge: "Eco-Friendly",
        description: "Sustainable green PET flakes for environmentally conscious packaging solutions",
        image: greenFlakes,
        specs: ["Green Certified", "Eco-Sustainable", "Recyclable"],
        applications: ["PET strap production", "Sustainable packaging", "Green initiatives", "Eco-friendly bottles"],
        features: ["High strength material", "Excellent stiffness", "Long shelf life", "Environmental approved"],
    },
]

export default function PETFlakesSection() {
    const [activeFlake, setActiveFlake] = useState("light-blue")

    return (
        <section className="space-y-5">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-3"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-400">
                    <Droplet className="h-4 w-4 text-blue-700" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">PET Flakes Collection</span>
                </div>
                <h2 className="text-4xl  font-[700] text-blue-950 text-balance">Premium PET Flakes</h2>
                <p className=" max-w-2xl mx-auto text-lg">
                    Expertly crafted recycled PET flakes for superior packaging performance
                </p>
            </motion.div>

            {/* Interactive Flake Tabs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center flex-wrap">
                {flakes.map((flake, idx) => (
                    <motion.button
                        key={flake.id}
                        onClick={() => setActiveFlake(flake.id)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        // transition={{ delay: idx * 0.1, duration: 0.3 }}
                        className={`group relative overflow-hidden rounded-[10px] px-6 py-3 font-semibold transition-all duration-300 ${activeFlake === flake.id
                                ? " dynamic-bg  text-white shadow-lg "
                                : "border-1 border-blue-300 bg-white text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                            }`}
                    // whileHover={{ scale: 1.05, y: -2 }}
                    // whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center gap-2 text-sm">
                            <Droplet className="h-4 w-4" />
                            {flake.name}
                            {/* {activeFlake === flake.id && (
                <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs font-semibold">{flake.badge}</span>
              )} */}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Flake Content Display with Images */}
            <AnimatePresence mode="wait">
                {flakes.map(
                    (flake) =>
                        activeFlake === flake.id && (
                            <motion.div
                                key={flake.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.1 }}
                                className="rounded-xl border border-blue-200  shadow-lg  p-5 backdrop-blur-sm overflow-hidden"
                            >
                                <div className=" flex  justify-between items-center">
                                    {/* Image Section */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1, duration: 0.4 }}
                                        className="rounded-xl w-[40%] overflow-hidden border border-blue-200 shadow-lg"
                                    >
                                        <img
                                            src={flake.image || "/placeholder.svg"}
                                            alt={flake.name}

                                            className="w-full h-[360px] object-cover"
                                        />
                                    </motion.div>

                                    {/* Content Section */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15, duration: 0.4 }}
                                        className="flex w-[55%] flex-col justify-center space-y-6"
                                    >
                                        <div>
                                            <h3 className="text-3xl font-bold dynamic-text mb-2">{flake.name}</h3>
                                            <p className="  text-[16px]">{flake.description}</p>
                                        </div>

                                        {/* Quick Specs */}
                                        {/* <div className="grid grid-cols-3 gap-3">
                                            {flake.specs.map((spec, i) => (
                                                <div key={i} className="rounded-lg  border-[1px] border-blue-700 py-[10px] text-center">
                                                    <p className="text-[14px] font-semibold text-blue-700">{spec}</p>
                                                </div>
                                            ))}
                                        </div> */}

                                        {/* Features with Icons */}
                                        <div>
                                            <h4 className="text-sm font-semibold dynamic-text uppercase mb-3 flex items-center gap-2">
                         
                                                Key Features
                                            </h4>
                                            <div className="space-y-2">
                                                {flake.features.map((feature, i) => (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <i className="fa-regular text-[#2054ff] fa-shield-check"></i>
                                                        <span className="text-sm ">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Applications with Icons */}
                                        <div>
                                            <h4 className="text-sm font-semibold  dynamic-text uppercase mb-3 flex items-center gap-2">
                                                {/* <Zap className="h-4 w-4 text-blue-600" /> */}
                                                Applications
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {flake.applications.map((app, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-xs font-medium text-blue-700"
                                                    >
                                                        {app}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ),
                )}
            </AnimatePresence>
        </section>
    )
}
