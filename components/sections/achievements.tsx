"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awards = [
  {
    id: 1,
    year: "2024",
    title: "Luxury Stay Award",
    description: "Recognized for exceptional luxury accommodations and world-class service standards.",
    icon: Award,
  },
  {
    id: 2,
    year: "2023",
    title: "Top Hospitality Innovator",
    description: "Leading innovation in hospitality technology and guest experience enhancement.",
    icon: Trophy,
  },
  {
    id: 3,
    year: "2022",
    title: "Ultimate Comfort Award",
    description: "Excellence in providing unmatched comfort and luxury amenities to our guests.",
    icon: Star,
  },
  {
    id: 4,
    year: "2021",
    title: "Outstanding Hospitality Award",
    description: "Exceptional service delivery and commitment to guest satisfaction excellence.",
    icon: Medal,
  },
]

export default function Achievements() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-yellow-500 rounded-full" />
          </div>
          <p className="text-yellow-500 font-semibold mb-2 tracking-wider uppercase text-sm">OUR ACHIEVEMENTS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            Proudly Recognized for Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-4">
            Our commitment to excellence has been recognized by prestigious hospitality organizations worldwide.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 p-4 sm:p-5 lg:p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Badge */}
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-200">
                  <award.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-yellow-600" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-semibold">
                  {award.year}
                </div>
              </div>

              {/* Award Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 sm:mb-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 font-playfair">{award.title}</h3>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-400 mt-1 sm:mt-0 block sm:hidden lg:block">
                    {award.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {award.description}
                </p>

                {/* Stars */}
                <div className="flex items-center mt-3">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 mr-1" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
