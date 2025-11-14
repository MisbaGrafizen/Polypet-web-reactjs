"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ImageSlider from "../../component/Machines/ImageSlider";
import ProductShowcase from "../../component/Machines/ProductShowcase";


import baleBrekaer from "../../../public/imges/AllMachines/Bale-Breaker.jpg"
import crusher from "../../../public/imges/AllMachines/Crusher.jpg"
import doubleSheftlavelRemove from "../../../public/imges/AllMachines/Double-shaft-lable-remover01.jpg"
import shortingBeltwith from "../../../public/imges/AllMachines/Sorting-Belt-with-strucuture01.jpg"
import Tarommelo1 from "../../../public/imges/AllMachines/Trommel01.jpg"
import TwinScrew from "../../../public/imges/AllMachines/Twin-Screw.jpg"
import uTraff from "../../../public/imges/AllMachines/U-truff-Screw.jpg"





const products = [
    {
        id: 1,
        title: "Bale Breaker",
        description:
            "Two types of bale opener machines – horizontal and vertical – designed for PET bottle bales (500 kg/h to 3000 kg/h). Made of mild steel with dual shafts and VFD speed control for uniform feed and low clogging.",
        image: baleBrekaer,
        specs: [
            { label: "Capacity", value: "500 - 3000 kg/h" },
            { label: "Motor Power", value: "5.5 - 15 kW" },
            { label: "Material", value: "Mild Steel" },
            { label: "Control", value: "VFD Speed Control" },
        ],
        features: ["Dual shaft design", "Low clogging", "Horizontal & Vertical options", "Energy efficient"],
        color: "from-blue-600 to-blue-800",
    },
    {
        id: 2,
        title: "Twin Screw Conveyor",
        description:
            "Heavy-duty U-trough twin screw conveyors that elevate PET bottles efficiently from 500 kg/h to 3000 kg/h, made of mild steel for stable operation.",
        image: TwinScrew,
        specs: [
            { label: "Capacity", value: "500 - 3000 kg/h" },
            { label: "Motor Power", value: "7.5 - 18.5 kW" },
            { label: "Trough Type", value: "U-Shaped" },
            { label: "Angle", value: "30° - 45°" },
        ],
        features: ["Stable elevation", "Gentle handling", "Low maintenance", "Continuous operation"],
        color: "from-blue-700 to-blue-900",
    },
    {
        id: 3,
        title: "Trommel Screener",
        description:
            "Dry trommel screener that removes dust, stones, and caps after de-baling. Multi-mesh filtration and reduced abrasion increase output quality (capacity 500–3000 kg/h).",
        image: Tarommelo1,
        specs: [
            { label: "Capacity", value: "500 - 3000 kg/h" },
            { label: "Motor Power", value: "3 - 7.5 kW" },
            { label: "Mesh Options", value: "8-16 mm" },
            { label: "Separation", value: "Dust, Stones, Caps" },
        ],
        features: ["Multi-mesh filtration", "Low abrasion", "High precision", "Easy maintenance"],
        color: "from-blue-500 to-blue-700",
    },
    {
        id: 4,
        title: "Sorting Belt with Structure",
        description:
            "Variable-speed sorting conveyor with dual-side workspace for manual sorting. Built on MS-pipe structure with chutes for waste material drop (500–3000 kg/h).",
        image: shortingBeltwith,
        specs: [
            { label: "Capacity", value: "500 - 3000 kg/h" },
            { label: "Motor Power", value: "3 - 5.5 kW" },
            { label: "Belt Width", value: "800 - 1200 mm" },
            { label: "Workspace", value: "Dual-Side Access" },
        ],
        features: ["Variable speed control", "Dual-side workspace", "Waste chutes", "Robust MS frame"],
        color: "from-blue-600 to-blue-800",
    },
    {
        id: 5,
        title: "Label Remover Twin Shaft",
        description:
            "Two-part label remover — first removes PVC labels, second uses suction blower to discard them. Carbide-tipped blades provide 95–98% removal efficiency (capacity 500–3000 kg/h).",
        image: doubleSheftlavelRemove,
        specs: [
            { label: "Capacity", value: "500 - 3000 kg/h" },
            { label: "Motor Power", value: "11 - 22 kW" },
            { label: "Efficiency", value: "95 - 98%" },
            { label: "Blade Type", value: "Carbide-Tipped" },
        ],
        features: ["Two-stage removal", "Suction blower", "High efficiency", "Durable blades"],
        color: "from-blue-700 to-blue-900",
    },
    {
        id: 6,
        title: "Pre-Washer System",
        description:
            "Removes 90% of contaminants before granulation using high-temperature chemical or hot-water wash. Continuous and batch types available with water-recycling system.",
        image: "/industrial-pre-washer-washing-system.jpg",
        specs: [
            { label: "Capacity", value: "500 - 3000 kg/h" },
            { label: "Temperature", value: "Up to 90°C" },
            { label: "Wash Type", value: "Hot Water/Chemical" },
            { label: "Recycling", value: "Water Recovery System" },
        ],
        features: ["90% contaminant removal", "Temperature controlled", "Water recycling", "Batch & continuous"],
        color: "from-blue-500 to-blue-700",
    },
    {
        id: 7,
        title: "U-Type Screw Conveyor",
        description:
            "Collects and transfers materials from open sides through a U-channel design; built for durability and simplicity.",
        image: uTraff,
        specs: [
            { label: "Capacity", value: "500 - 3000 kg/h" },
            { label: "Motor Power", value: "5.5 - 15 kW" },
            { label: "Channel Type", value: "U-Design" },
            { label: "Length", value: "Custom" },
        ],
        features: ["Simple design", "Open-side collection", "Durable construction", "Flexible routing"],
        color: "from-blue-600 to-blue-800",
    },
    {
        id: 8,
        title: "Heavy-Duty Crusher",
        description:
            "Heavy-duty crusher for PE, PP, PVC, PET and more. Custom rotor and hopper designs crush plastic into fine particles (capacity 300–3000 kg/h).",
        image: crusher,
        specs: [
            { label: "Capacity", value: "300 - 3000 kg/h" },
            { label: "Motor Power", value: "15 - 45 kW" },
            { label: "Material Types", value: "PE, PP, PVC, PET" },
            { label: "Particle Size", value: "Customizable" },
        ],
        features: ["Multi-material capable", "Custom rotors", "Fine particles", "Heavy-duty construction"],
        color: "from-blue-700 to-blue-900",
    },
]

export default function Shorting() {
    const containerRef = useRef(null);

    return (
        <>
            <Header />
            <main ref={containerRef} className="w-full pt-[110px]">
                {/* Hero Section */}
                <section className="relative m flex w-[70%] px-[20px] rounded-[20px] py-[20px] mx-auto flex-col items-center justify-center     overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
                    {/* Animated background bottles */}
                    {/* <AnimatedBottles /> */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-center max-w-3xl"
                    >
                        <h1 className="text-[30px]  font-[600] text-white mb-3 leading-tight">Sorting and Crushing</h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[14px] max-w-[800px] text-blue-100 mb-3 leading-tight"
                        >
                            Dynamic Polypet offers a complete range of PET bottle sorting and crushing machinery designed for efficient
                            recycling — from bale breaking to crushing, ensuring seamless flow and maximum productivity.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    {/* <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute bottom-8 bg-white p-[10px] border border-blue-800  rounded-[30px] left-1/2 -translate-x-1/2"
                    >
                        <div className="text-blue-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </motion.div> */}
                </section>

                {/* Divider */}
                {/* <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" /> */}

                {/* Image Slider Section */}
                <section className="py-10 mt-[30px] px-6 bg-slate-50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <h2 className="text-4xl  font-bold text-slate-900 mb-4 text-center">Complete Sorting Line</h2>
                        <p className="text-slate-600 text-center mb-12 text-lg">
                            Our integrated machinery for efficient PET bottle processing
                        </p>
                        <ImageSlider />
                    </motion.div>
                </section>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* Products Section */}
                <section className="py-10 px-6 bg-gradient-to-b from-white to-blue-50">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
                            <p className="text-slate-600 text-[15px] max-w-2xl mx-auto">
                                Each machine is engineered for precision, durability, and maximum efficiency in your recycling process.
                            </p>
                        </motion.div>

                        <div className="space-y-12">
                            {products.map((product, index) => (
                                <ProductShowcase key={product.id} product={product} index={index} isLeft={index % 2 === 0} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* CTA Section */}
                {/* <section className="py-[20px] px-6 bg-gradient-to-br from-slate-900 to-blue-900">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center text-white"
                    >
                        <h2 className="text-[30px] font-bold mb-2">Ready to Transform Your Recycling Process?</h2>
                        <p className="text-sm mb-8 text-slate-200">
                            Contact Dynamic Polypet today to learn more about our complete machinery solutions.
                        </p>
                        <button className="px-8 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                            Get in Touch
                        </button>
                    </motion.div>
                </section> */}
            </main>
            <Footer />
        </>
    );
}
