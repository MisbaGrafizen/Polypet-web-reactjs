"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ModernSkillsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeSkill, setActiveSkill] = useState(0)

  const skills = [
    {
      id: 1,
      title: "To break things down and build them better",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
      description:
        "We analyze complex problems and reconstruct solutions that exceed expectations, focusing on innovation and quality.",
    },
    {
      id: 2,
      title: "Dexterous team of professionals",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      description:
        "Our highly skilled experts bring diverse experience and specialized knowledge to every project we undertake.",
    },
    {
      id: 3,
      title: "Excellent transport & logistic facility",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      description:
        "Our advanced logistics network ensures timely delivery and efficient transportation across global markets.",
    },
  ]

  const metrics = [
    { name: "MOST UPDATED", value: 100 },
    { name: "ALWAYS FULFILL OUR COMMITMENT", value: 99 },
    { name: "DELIVERY IN TIME", value: 98 },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [skills.length])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-10 w-[85%]  rounded-[20px] mx-auto px-[20px] overflow-hidden min-h-[450px] bg-gradient-to-br from-blue-900 to-slate-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400"
              style={{
                width: Math.random() * 8 + 2 + "px",
                height: Math.random() * 8 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.25,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite alternate`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div> */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      <div className=" mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className=" flex gap-16 "
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-4 w-[60%]">
            <div>
              {/* <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
              /> */}

                            <span className="text-blue-900 font-semibold  text-sm uppercase border  border-blue-900 [tracking-wider bg-blue-200 px-4 py-[3px] rounded-full">
                                  Skills
                                </span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl mt-[10px] font-bold text-white tracking-tight">
                OUR SKILLS
              </motion.h2>
            </div>

            <motion.p variants={itemVariants} className="text-slate-300 text-[14px] text-justify leading-[20px]">
              We are a famous and dependable firm that is actively committed to offering a premium quality range of
              products in numerous specifications within the minimum time period and at genuine rates. A few of the
              essential factors that help us to become the prime choice of the patrons are listed below:
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className={`flex items-start p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeSkill === index
                      ? "bg-gradient-to-r from-slate-800/80 to-slate-700/80 shadow-lg border-l-4 border-cyan-400"
                      : "hover:bg-slate-800/50"
                  }`}
                  onClick={() => setActiveSkill(index)}
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`p-2 rounded-lg mr-4 ${
                      activeSkill === index
                        ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white"
                        : "bg-slate-700/50 text-cyan-400"
                    }`}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-[500] text-white mb-1">{skill.title}</h3>
                    {activeSkill === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-slate-300 text-sm"
                      >
                        {skill.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Metrics */}
          <motion.div variants={itemVariants} className="relative w-[40%]">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative   backdrop-blur-2xl rounded-2xl p-6 border bg-[#042b5752] border-slate-300/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Performance Metrics
              </h3>

              <div className="space-y-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-300">{metric.name}</span>
                      <span className="text-lg font-bold text-white">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 1.5, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          index === 0
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                            : index === 1
                              ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                              : "bg-gradient-to-r from-indigo-400 to-purple-500"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "200+", label: "Projects Completed" },
                  { value: "50+", label: "Global Partners" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                    className="p-4 rounded-lg bg-slate-700/30"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  )
}
