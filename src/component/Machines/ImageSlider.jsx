"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sliderImages = [
  "/complete-pet-bottle-sorting-line-industrial-machin.jpg",
  "/pet-recycling-machinery-assembly-line.jpg",
  "/industrial-plastic-processing-equipment.jpg",
  "/bottle-sorting-crushing-machinery-production-line.jpg",
]

export default function ImageSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % sliderImages.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-[95%] mx-auto    ">
      {/* Main Slider */}
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={sliderImages[current]}
            alt="Sorting line"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-900 rounded-full p-3 transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-slate-900 rounded-full p-3 transition-all"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 justify-center mt-8">
        {sliderImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`transition-all rounded-full ${
              index === current ? "w-8 h-3 bg-blue-900" : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-6 text-slate-600">
        <p className="text-sm font-medium">
          {current + 1} / {sliderImages.length}
        </p>
      </div>
    </div>
  )
}
