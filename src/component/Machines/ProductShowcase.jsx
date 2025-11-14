"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Boxes,} from "lucide-react"

export default function ProductShowcase({ product, index, isLeft }) {
  const ref = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="rounded-xl overflow-hidden shadow-lg bg-white border border-blue-100"
    >
      {/* Product Header with Gradient */}
      <div className={` dynamic-bg py-4 px-[20px] text-white`}>

        <h3 className="text-2xl font-[600] mb-2">{product.title}</h3>
        <p className="text-blue-100  text-[14px] leading-[18px]">{product.description}</p>
      </div>

      {/* Grid Layout */}
      <div className="  flex  gap-8 p-8">
        {/* Image */}
        <div className="lg:col-span-1">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="  w-[500px] h-[400px] object-content rounded-lg shadow-md"
          />
        </div>

        {/* Specs and Features */}
        <div className="space-y-4 w-[70%]">
          {/* Specifications Grid */}
          <div>
            <h4 className="text-[15px] font-[600]  rounded-[5px] overflow-hidden bg-gradient-to-r  from-blue-50 to-blue-0 w-[400px] text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></span>
              Specifications
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-xs text-slate-600 font-[500] uppercase tracking-wide mb-1">{spec.label}</p>
                  <p className="text-lg font-[600] text-blue-700">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
             <h4 className="text-[15px] font-[600]  rounded-[5px] overflow-hidden bg-gradient-to-r  from-blue-50 to-blue-0 w-[400px] text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"></span>
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
     <CheckCircle className="w-[15px] h-[15px] text-blue-600" />
                  <span className="text-slate-700 text-[13px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

  
        </div>
      </div>
    </motion.div>
  )
}
