"use client"

import { motion } from "framer-motion"

export default function SidebarNav({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="lg:col-span-1">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-4 space-y-3 rounded-2xl border border-blue-700/50  shadow-lg p-4 backdrop-blur-sm"
      >
        <div className="space-y-1">
          <h3 className="text-xs font-[600] uppercase tracking-wider">Product Categories</h3>
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" />
        </div>

        <div className="space-y-2">
          {categories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className={`relative w-full rounded-[10px] px-3 py-3 text-left transition-all duration-300 group ${
                  activeCategory === category.id
                    ? " dynamic-bg text-white shadow-lg shadow-blue-500/30"
                    : "text-blue-800 hover:bg-blue-800/50 border border-transparent hover:border-blue-700/50"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      activeCategory === category.id ? "text-white" : "text-blue-700"
                    }`}
                  />
                  <span className="text-sm  font-medium">{category.name}</span>
                </div>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -right-1 top-4 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-300 shadow-lg"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
