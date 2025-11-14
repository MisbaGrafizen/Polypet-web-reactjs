import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Package,
  Droplet,
  Layers,
  Boxes,
  FlaskConical,
  Sparkles,
} from "lucide-react"
import ProductSection from "../../component/flkesCom/ProductSection"
import PETFlakesSection from "../../../src/component/flkesCom/PETFlakesSection"
import SidebarNav from "../../component/flkesCom/SidebarNav"
import Header from "../../component/Header"
import Footer from "../../component/Footer"

const categories = [
  { id: "pet-strap", name: "PET Strap", icon: Package },
  { id: "polyester-fiber", name: "Polyester Staple Fiber", icon: Layers },
  { id: "masterbatch", name: "PET Masterbatch", icon: FlaskConical },
  { id: "granules", name: "PET Granules", icon: Droplet },
  { id: "sheet", name: "PET Sheet", icon: Boxes },
]

export default function MainPagePet() {
  const [activeCategory, setActiveCategory] = useState(null)

  // // smooth scroll into view on category change
  // useEffect(() => {
  //   if (activeCategory) {
  //     const section = document.getElementById("product-section")
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth", block: "start" })
  //     }
  //   }
  // }, [activeCategory])

  return (
    <>

      <Header />
      <div className=" pt-[40px] bg-white">




        {/* Header */}
        {/* <header className="border-b border-blue-200 bg-gradient-to-r from-white to-blue-50">
          <div className="mx-auto  w-[70%]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  Premium PET Solutions
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-blue-950 mb-2">
                Dynamic Polypet
              </h1>
              <p className="text-blue-600 max-w-2xl text-lg">
                Leading PET Recycling & Processing Excellence from Rajkot, India
                – Superior Quality, Sustainable Innovation
              </p>
            </motion.div>
          </div>
        </header> */}

        {/* Main Section */}
        <main className="mx-auto  w-[82%] px-4 py-16 ">
          {/* PET Flakes Section */}
          <PETFlakesSection />

          {/* Sidebar + Product Area */}
          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar - now sticky */}
            <div className="lg:col-span-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <SidebarNav
                  categories={categories}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              </motion.div>
            </div>

            {/* Product Details */}
            <div id="product-section" className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {activeCategory ? (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductSection
                      category={activeCategory}
                      categories={categories}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-12 backdrop-blur-sm"
                  >
                    <div className="text-center space-y-4">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="inline-flex p-4 rounded-full bg-blue-100 border border-blue-300"
                      >
                        <Package className="h-8 w-8 text-blue-700" />
                      </motion.div>
                      <p className="text-xl font-semibold text-blue-950">
                        Select a Product Category
                      </p>
                      <p className="text-sm text-blue-600">
                        Explore our comprehensive range of PET products and
                        solutions
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>


      <Footer />
    </>
  )
}
