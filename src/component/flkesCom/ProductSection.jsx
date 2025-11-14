"use client"

import { motion } from "framer-motion"
import { Shield, Sparkles, Target, ArrowRight, Zap, Award } from "lucide-react"


import { CheckCircle, Boxes,} from "lucide-react"
import PetStrap from "../../../public/imges/FlakesImages/PET_Strap.png"
import PetMasterbatch from "../../../public/imges/FlakesImages/PET-Masterbatch.jpg"
import PetSheet from "../../../public/imges/FlakesImages/PET_Sheet.png"
import PetStaple from "../../../public/imges/FlakesImages/Polyster-Staple-Fiber.jpg"
import Petgargunle from "../../../public/imges/FlakesImages/engineering-plastic-master-batch-granule-500x500-500x500-1.jpg"







const productData = {
  "pet-strap": {
    title: "PET Strap",
    icon: Shield,
    subtitle: "Heavy-Duty Packaging Solutions",
    description:
      "PET Strap represents the evolution of packaging technology – engineered for strength, sustainability, and reliability. Manufactured from premium recycled PET, our straps outperform traditional steel and PP alternatives.",
    image: PetStrap,
    color: " from-blue-900 to-blue-700",
    sections: [
      {
        title: "Why Choose PET Strap?",
        icon: Sparkles,
        items: [
          "Superior strength with 40% less weight than steel",
          "100% recyclable and eco-friendly",
          "Rust and rot-proof for outdoor applications",
          "Heat-sealable for automated machinery",
          "Cost-effective alternative to traditional strapping",
          "Safe handling with no sharp edges",
        ],
      },
      {
        title: "Technical Features",
        icon: Award,
        items: [
          "High tensile breaking strength: 600+ N/mm²",
          "Elongation: 5-10% for shock resistance",
          "Weather & UV resistant materials",
          "Available in Plain and Textured surfaces",
          "ISO 9001:2000 certified production",
          "Consistent performance across climates",
        ],
      },
      {
        title: "Industry Applications",
        icon: Target,
        items: [
          "Baling: Cotton, jute, coir, rubber, manmade fiber",
          "Pelletization: Cartons, film rolls, baggage, bottles",
          "Heavy Industries: Steel, glass, ceramic, automobile",
          "Stone & marble bundling",
          "Logistics & packaging",
          "Agricultural product bundling",
        ],
      },
    ],
  },
  "polyester-fiber": {
    title: "Polyester Staple Fiber",
    icon: Zap,
    subtitle: "Premium Textile Innovation",
    description:
      "Polyester Staple Fiber (PSF) leads the textile revolution with superior properties for diverse applications. Made from purified raw materials, our PSF delivers consistency and performance.",
    image: PetStaple,
    color: " from-blue-900 to-blue-700",
    sections: [
      {
        title: "Product Excellence",
        icon: Sparkles,
        items: [
          "Soft, luxurious texture for comfort",
          "High elastic resilience for durability",
          "100% recyclable from post-consumer bottles",
          "Hollow PSF variant for premium resilience",
          "Eco-friendly production process",
          "Meets international quality standards",
        ],
      },
      {
        title: "Technical Specifications",
        icon: Award,
        items: [
          "Fineness: 1.2-2.0 denier available",
          "Length: 32-64 mm customizable",
          "Tenacity: High strength fibers",
          "Crimp: Permanent for volume",
          "Moisture regain: Standard specifications",
          "Temperature resistance: Up to 120°C",
        ],
      },
      {
        title: "End-Use Applications",
        icon: Target,
        items: [
          "Home Textiles: Cushions, pillows, quilts, mattresses",
          "Apparel: Jackets, sweaters, thermal wear",
          "Industrial: Non-woven fabrics, geotextiles",
          "Automotive: Felts, speaker components",
          "Wadding: Polyfill for toys and soft toys",
          "Specialty: Filtration and technical textiles",
        ],
      },
    ],
  },
  masterbatch: {
    title: "PET Masterbatch",
    icon: Sparkles,
    subtitle: "Color & Performance Solutions",
    description:
      "Our PET masterbatches combine color brilliance with process stability. Engineered for high-temperature applications without compromising quality or consistency.",
    image: PetMasterbatch,
    color: "from-blue-900 to-blue-700",
    sections: [
      {
        title: "Color & Quality",
        icon: Sparkles,
        items: [
          "Brilliant color consistency across batches",
          "Low dosage requirements (1-3%)",
          "Heat stable up to 320°C processing",
          "Wide color palette available",
          "Excellent dispersibility in PET",
          "Food-grade certified masterbatches",
        ],
      },
      {
        title: "Performance Features",
        icon: Award,
        items: [
          "Superior color strength and vibrancy",
          "Minimal color migration",
          "Thermal stability guarantee",
          "Compatible with all PET grades",
          "Consistent melt flow properties",
          "UV and weathering resistant options",
        ],
      },
      {
        title: "Market Applications",
        icon: Target,
        items: [
          "Beverage Bottles: Soft drinks, juices, water",
          "Pharmaceutical: Medicine bottles, containers",
          "Cosmetics: Beauty and personal care packaging",
          "Food Packaging: Oil, sauce, condiment bottles",
          "Household Products: Detergent & chemical bottles",
          "Injection Molding: Trays, containers, caps",
        ],
      },
    ],
  },
  granules: {
    title: "PET Granules",
    icon: Zap,
    subtitle: "Reprocessed Excellence",
    description:
      "Premium reprocessed PET granules engineered for consistent quality. Free-flowing, low-moisture formulation for optimal processing performance.",
    image: Petgargunle,
    color: "from-blue-900 to-blue-700",
    sections: [
      {
        title: "Superior Quality",
        icon: Sparkles,
        items: [
          "100% recycled post-consumer PET",
          "Free-flowing granules for easy handling",
          "Low moisture content: <0.03%",
          "Minimal metal contamination",
          "Consistent particle size distribution",
          "FDA approved for food contact",
        ],
      },
      {
        title: "Technical Specifications",
        icon: Award,
        items: [
          "Intrinsic Viscosity: 0.68-0.72 dl/g",
          "Melting Point: 260°C ± 5°C",
          "Crystallinity: Controllable grades",
          "Ash Content: ≤0.008%",
          "Chip Size: 2.0×3.0 mm average",
          "Color Grade: Clear, semi-clear options",
        ],
      },
      {
        title: "Primary Applications",
        icon: Target,
        items: [
          "Bottle Manufacturing: Beverage & liquor bottles",
          "Fiber Production: Polyester staple fibers",
          "Strapping: PET strap granule extrusion",
          "Masterbatches: Base for color formulation",
          "Injection Molding: Trays, containers, caps",
          "Sheet Production: Transparent PET sheets",
        ],
      },
    ],
  },
  sheet: {
    title: "PET Sheet",
    icon: Award,
    subtitle: "Transparent Packaging Innovation",
    description:
      "R-PET sheets manufactured from 100% post-consumer bottles. Recyclable, transparent, and FDA-approved for premium packaging applications.",
    image: PetSheet,
    color: "from-blue-900 to-blue-700",
    sections: [
      {
        title: "Sustainability & Performance",
        icon: Sparkles,
        items: [
          "100% recycled content from PET bottles",
          "Fully recyclable material",
          "FDA approved for food contact",
          "No noxious fumes during processing",
          "Supports global recycling initiatives",
          "Traceable from raw to finished product",
        ],
      },
      {
        title: "Technical Properties",
        icon: Award,
        items: [
          "Thickness: 0.25mm to 5mm customizable",
          "Transparency: Crystal clear grades",
          "Stiffness: High rigidity maintained",
          "Impact Resistance: Superior durability",
          "Temperature Range: -20°C to +70°C safe",
          "Processing: Suitable for vacuum forming",
        ],
      },
      {
        title: "Packaging Applications",
        icon: Target,
        items: [
          "Food Packaging: Fresh produce, bakery items",
          "Toy Packaging: Safe, transparent display boxes",
          "Electronics: Protective packaging shells",
          "Pharmaceuticals: Medicine packaging solutions",
          "Cosmetics: Beauty product displays",
          "Special: Vacuum forming, thermoforming applications",
        ],
      },
    ],
  },
}


export default function ProductSection({ category }) {
  const product = productData[category]
  if (!product) return null

  const Icon = product.icon

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Product Header with Image */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.1 }}
        className="rounded-2xl border border-blue-200 bg-white p-6 backdrop-blur-sm overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.1}}
            className="rounded-xl overflow-hidden border border-blue-200 shadow-lg"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.1 }}
            className="flex flex-col justify-start space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className={`rounded-lg bg-gradient-to-br ${product.color} p-3 flex-shrink-0`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Featured Product</span>
                <h2 className="text-3xl font-bold text-blue-950">{product.title}</h2>
              </div>
            </div>
            <p className="text-blue-600 font-semibold text-lg">{product.subtitle}</p>
            <p className="text-blue-700 leading-relaxed">{product.description}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Product Sections */}
      {/* <div className="grid gap-6">
        {product.sections.map((section, idx) => {
          const SectionIcon = section.icon
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: 0.15 + idx * 0.1, duration: 0.3 }}
              className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-8 backdrop-blur-sm overflow-hidden group hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`rounded-lg bg-gradient-to-br ${product.color} p-3`}>
                  <SectionIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950">{section.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 + i * 0.03, duration: 0.3 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                    <span className="text-sm text-blue-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div> */}



        <div className="grid md:grid-cols-2 gap-10">
        {product.sections.slice(0, 2).map((section, i) => {
          const SectionIcon = section.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`rounded-md bg-gradient-to-br ${product.color} p-2 shadow-md`}
                >
                  <SectionIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] uppercase">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-[14px] text-gray-700"
                  >
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      {/* 🌍 Applications Section */}
      {product.sections[2] && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-2"
        >
          <h3 className="text-2xl font-bold text-[#003366] mb-8 uppercase flex items-center gap-2">
            <Boxes className="h-5 w-5 text-blue-600" /> Applications
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {product.sections[2].items.slice(0, 3).map((title, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-blue-50 rounded-xl border border-blue-100 p-6 hover:bg-blue-100/70 transition-all"
              >
                <Target className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-[14px] text-gray-700 font-medium leading-relaxed">
                  {title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>

    </>
  )
}
