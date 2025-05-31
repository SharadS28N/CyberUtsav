"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIuMSI+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
            CyberUtsav
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent mt-2">
              2.0
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            The Ultimate 24-Hour Hackathon Experience. Code, Create, Compete, and Conquer!
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-purple-200 mx-auto mb-2" />
              <p className="text-purple-100 text-xs sm:text-sm">3 Days</p>
              <p className="text-white font-semibold text-sm sm:text-base">July 5-7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-200 mx-auto mb-2" />
              <p className="text-purple-100 text-xs sm:text-sm">Participants</p>
              <p className="text-white font-semibold text-sm sm:text-base">400</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-200 mx-auto mb-2" />
              <p className="text-purple-100 text-xs sm:text-sm">Cities</p>
              <p className="text-white font-semibold text-sm sm:text-base">4 Major</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-purple-200 mx-auto mb-2" />
              <p className="text-purple-100 text-xs sm:text-sm">Prize Pool</p>
              <p className="text-white font-semibold text-sm sm:text-base">NRs. 1L+</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("registration")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto bg-transparent"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  )
}
