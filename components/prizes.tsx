"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Award, Gift } from "lucide-react"

export default function Prizes() {
  const prizes = [
    {
      position: "1st Place",
      amount: "NRs. 30,000",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      benefits: ["Cash Prize", "Internship Opportunities", "Mentorship Program", "Certificate"],
    },
    {
      position: "2nd Place",
      amount: "NRs. 20,000",
      icon: Medal,
      color: "from-gray-400 to-gray-600",
      benefits: ["Cash Prize", "Internship Opportunities", "Certificate", "Goodies"],
    },
    {
      position: "3rd Place",
      amount: "NRs. 10,000",
      icon: Award,
      color: "from-orange-400 to-orange-600",
      benefits: ["Cash Prize", "Certificate", "Goodies", "Recognition"],
    },
  ]

  const specialPrizes = [
    { title: "Best Innovation", amount: "NRs. 5,000", icon: "🚀" },
    { title: "Best UI/UX", amount: "NRs. 5,000", icon: "🎨" },
    { title: "People's Choice", amount: "NRs. 5,000", icon: "❤️" },
  ]

  return (
    <section id="prizes" className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Prizes & <span className="text-purple-600">Rewards</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Compete for exciting prizes worth over NRs. 65,000 and amazing opportunities
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                index === 0 ? "md:-mt-4 md:scale-105" : ""
              }`}
            >
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${prize.color} rounded-full flex items-center justify-center`}
              >
                <prize.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{prize.position}</h3>
                <p className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4 sm:mb-6">{prize.amount}</p>

                <ul className="space-y-2">
                  {prize.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="text-gray-600 flex items-center justify-center text-sm sm:text-base"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Prizes - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            Special Category Prizes
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl">
              {specialPrizes.map((prize, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl sm:text-4xl mb-3">{prize.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{prize.title}</h4>
                  <p className="text-xl sm:text-2xl font-bold text-purple-600">{prize.amount}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 sm:p-8 text-white">
            <Gift className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Additional Benefits for All Participants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Participation Certificate</h4>
                <p className="text-purple-100 text-xs sm:text-sm">Official certificate for all participants</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Networking Opportunities</h4>
                <p className="text-purple-100 text-xs sm:text-sm">Connect with industry professionals</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Swag & Goodies</h4>
                <p className="text-purple-100 text-xs sm:text-sm">Exclusive event merchandise</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
