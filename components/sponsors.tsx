"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Sponsors() {
  const sponsors = {
    titlePartner: [{ name: "TechCorp", logo: "/placeholder.svg?height=80&width=200" }],
    venuePartner: [{ name: "InnovateLabs", logo: "/placeholder.svg?height=80&width=200" }],
    drivenBy: [
      { name: "CloudTech", logo: "/placeholder.svg?height=60&width=150" },
      { name: "DataSoft", logo: "/placeholder.svg?height=60&width=150" },
    ],
    foodPartner: [
      { name: "AI Solutions", logo: "/placeholder.svg?height=60&width=150" },
      { name: "StartupHub", logo: "/placeholder.svg?height=60&width=150" },
    ],
    associatedBy: [
      { name: "DevTools", logo: "/placeholder.svg?height=50&width=120" },
      { name: "CodeBase", logo: "/placeholder.svg?height=50&width=120" },
      { name: "TechFlow", logo: "/placeholder.svg?height=50&width=120" },
    ],
    otherSponsors: [
      { name: "WebCorp", logo: "/placeholder.svg?height=40&width=100" },
      { name: "AppDev", logo: "/placeholder.svg?height=40&width=100" },
      { name: "CodeLab", logo: "/placeholder.svg?height=40&width=100" },
      { name: "TechStart", logo: "/placeholder.svg?height=40&width=100" },
      { name: "DevHub", logo: "/placeholder.svg?height=40&width=100" },
      { name: "InnoTech", logo: "/placeholder.svg?height=40&width=100" },
    ],
  }

  return (
    <section id="sponsors" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-purple-600">Sponsors</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Proudly supported by leading technology companies and organizations
          </p>
        </motion.div>

        {/* Pyramid Layout */}
        <div className="space-y-8 sm:space-y-12">
          {/* Level 1: Title Partner (Top of pyramid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Title Partner</h3>
            <div className="flex justify-center">
              {sponsors.titlePartner.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={200}
                    height={80}
                    className="h-20 w-auto object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Level 2: Venue Partner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6">Venue Partner</h3>
            <div className="flex justify-center">
              {sponsors.venuePartner.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={180}
                    height={70}
                    className="h-16 w-auto object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Level 3: Driven By & Food Partner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Driven By */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-6">Driven By</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.drivenBy.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-4 rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={150}
                      height={60}
                      className="h-12 w-auto object-contain"
                      unoptimized
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Food Partner */}
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-6">Food Partner</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.foodPartner.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-4 rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={150}
                      height={60}
                      className="h-12 w-auto object-contain"
                      unoptimized
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Level 4: Associated By */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-base font-bold text-gray-900 mb-6">Associated By</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {sponsors.associatedBy.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-3 rounded-lg hover:shadow-sm transition-shadow"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={120}
                    height={50}
                    className="h-10 w-auto object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Level 5: Other Sponsors (Bottom of pyramid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-base font-bold text-gray-900 mb-6">Other Sponsors</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {sponsors.otherSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-2 rounded-lg hover:shadow-sm transition-shadow"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Become a Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Partner with us to reach talented developers and showcase your brand to the tech community across Nepal
            </p>
            <a
              href="/proposal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              Sponsorship Opportunities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
