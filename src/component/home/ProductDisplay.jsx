"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clearFlakes from "../../../public/imges/flakesImges/Clear-PET-Flex.jpg"
import greenFlakes from "../../../public/imges/flakesImges/Green_PET_Flex.png"
import lightFlakes from "../../../public/imges/flakesImges/Light-blue-PET-Flex.jpg"
import granulesFlakes from "../../../public/imges/flakesImges/PET-Granules.jpg"




const products = [
    {
        id: "light-blue-pet-flakes",
        name: "Light Blue PET Flakes",
        image: lightFlakes,
        description:
            "PET is used as a raw material for making packaging materials such as bottles and containers for packaging a wide range of food products and other consumer goods. Examples include soft drinks, alcoholic beverages, detergents, cosmetics, pharmaceutical products and edible oils. PET is one of the most common consumer plastics used. We are the Leading Manufacturer of PET Flakes in India.",
    },
    {
        id: "clear-pet-flakes",
        name: "Clear PET Flakes",
        image: clearFlakes,
        description:
            "Under the exemplary leadership and guidance of our expert professionals, we have been able to emerge as a trusted manufacturer and supplier of CLEAR PET Flakes. These are used in making of Sheets, Containers, Toys, Covers, Kitchenware and Many More. To process these flakes, we use the finest quality recycled PET materials. Packed in quality grade materials, these flakes come in different specifications for clients. We offer CLEAR PET Flakes at affordable prices to clients.",
    },
    {
        id: "green-pet-flakes",
        name: "Green PET Flakes",
        image: greenFlakes,
        description:
            "Being the best organizations, we are highly engaged to offer a premium quality range of Green PET Flakes. The provided flakes are widely used for making TRANSPARENT PET STRAPS. These flakes are highly appraised in the market owing to their effectiveness. These flakes are processed using supreme grade polyethylene terephthalate and pioneered technology under the stern guidance of our experienced workforce. Furthermore, to ensure the best quality, our quality inspectors test these flakes on several parameters.",
    },
    {
        id: "pet-granules",
        name: "PET Granules",
        image: granulesFlakes,
        description:
            "Backed by rich industry experience, we are presenting our client's wide array of Reprocessed PET Granules. Our product range is widely used for PET wrapping films and various non-melting particles. Reprocessed PET Granules are free-flowing, have low moisture content and also have less float ability and metal contamination. Our product range is highly demanded across a multitude of industries due to its high-quality standards and reliable performance.",
    },
]

const ProductDisplay = () => {
    const [activeProduct, setActiveProduct] = useState(products[0].id)

    const currentProduct = products.find((p) => p.id === activeProduct)

    return (
        <section className="w-full bg-white">
            <div className="mx-auto  w-[80%]">
                {/* Header Section */}
                <div className="mb-6 text-left ">
                    {/* <p className="text-blue-900  w-fit font-semibold text-sm uppercase border  border-blue-900 [tracking-wider bg-blue-200 px-4 py-[3px] rounded-full">Our Products</p> */}
                    <h2 className="mt-3 text-[35px] font-[600] text-gray-900">PET Flakes</h2>
                </div>

                {/* Product Navigation */}
                <div className="mb-6 flex flex-wrap gap-2 ">
                    {products.map((product) => (
                        <motion.button
                            key={product.id}
                            onClick={() => setActiveProduct(product.id)}
                            className={`relative  border px-5 py-2 text-sm font-medium transition-all duration-200 focus:outline-none ${activeProduct === product.id
                                    ? "bg-gradient-to-br from-blue-900 to-blue-700 rounded-t-[10px] rounded-bl-[10px] text-white shadow-md"
                                    : "border-gray-300 bg-white rounded-lg text-gray-700 hover:border-blue-400 hover:text-blue-700"
                                }`}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {product.name}
                        </motion.button>
                    ))}
                </div>

                {/* Product Content */}
                <AnimatePresence mode="wait">
                    {currentProduct && (
                        <motion.div
                            key={currentProduct.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid items-start gap-10 md:grid-cols-2 lg:gap-16"
                        >
                            {/* Image Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                                className="relative overflow-hidden rounded-2xl bg-blue-50 p-4 shadow-xl ring-1 ring-blue-100"
                            >
                                <img
                                    src={currentProduct.image || "/placeholder.svg"}
                                    alt={currentProduct.name}
                                    className="h-full w-full rounded-xl object-cover object-center"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                            </motion.div>

                            {/* Description Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                                className="space-y-6 flex flex-col h-[] justify-between"
                            >
                                <div className="  flex flex-col gap-[10px]">


                                    <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">{currentProduct.name}</h3>
                                    <p className="text-[16px] leading-[25px] text-justify text-gray-700">{currentProduct.description}</p>
                                </div>
                                <motion.button
                                    className="inline-flex items-center w-[150px] justify-center  rounded-t-[10px] rounded-bl-[10px] bg-gradient-to-br from-blue-900 to-blue-700 px-5 py-2 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default ProductDisplay
