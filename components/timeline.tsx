"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Timeline() {
  const [selectedCity, setSelectedCity] = useState(0)

  const cities = [
    {
      name: "Kathmandu",
      nepaliName: "काठमाण्डौ",
      dates: "21st Ashad - 23rd Ashad",
      nepaliDates: "२१ आषाढ - २३ आषाढ",
      color: "from-purple-600 to-purple-800",
      accentColor: "purple",
      description: "Capital City Hub",
      events: [
        {
          day: "Day 1",
          date: "21st Ashad, 2081",
          title: "Opening and Start of Hackathon",
          events: [
            { time: "8:00 AM - 9:00 AM", title: "Participant Registration", description: "" },
            { time: "9:00 AM - 9:30 AM", title: "High Tea and Buffer Time", description: "" },
            { time: "9:30 AM - 10:30 AM", title: "Opening Ceremony (with Chief Guest)", description: "" },
            { time: "10:30 AM - 11:00 AM", title: "Break", description: "" },
            { time: "11:00 AM - 5:00 PM", title: "Hackathon Session (6 hours)", description: "" },
          ],
        },
        {
          day: "Day 2",
          date: "22nd Ashad, 2081",
          title: "Full-Day Hackathon Session",
          events: [
            { time: "9:00 AM - 9:30 AM", title: "Arrival and High Tea", description: "" },
            { time: "9:30 AM - 11:00 AM", title: "Remarks by Technology Experts", description: "" },
            { time: "11:00 AM - 5:00 PM", title: "Hackathon Session (6 hours)", description: "" },
            { time: "5:00 PM - 5:15 PM", title: "Buffer Time", description: "" },
            { time: "After 5:15 PM", title: "Return Home", description: "" },
          ],
        },
        {
          day: "Day 3",
          date: "23rd Ashad, 2081",
          title: "Presentations and Closing Ceremony",
          events: [
            { time: "9:00 AM - 9:30 AM", title: "High Tea and Arrival", description: "" },
            { time: "9:30 AM - 10:00 AM", title: "Welcome of Judges", description: "" },
            { time: "10:00 AM - 1:00 PM", title: "Final Project Presentations", description: "" },
            { time: "1:00 PM - 2:00 PM", title: "Break and Networking", description: "" },
            { time: "2:00 PM - 2:45 PM", title: "Remarks from Judges", description: "" },
            { time: "2:45 PM - 3:15 PM", title: "Certificate Distribution", description: "" },
            { time: "3:15 PM - 4:15 PM", title: "Prize Distribution and Closing Ceremony", description: "" },
          ],
        },
      ],
    },
    {
      name: "Pokhara",
      nepaliName: "पोखरा",
      dates: "15th Shrawan - 17th Shrawan",
      nepaliDates: "१५ श्रावण - १७ श्रावण",
      color: "from-purple-600 to-purple-800",
      accentColor: "purple",
      description: "Tourist City",
      events: [
        {
          day: "Day 1",
          date: "15th Shrawan, 2081",
          title: "Opening and Start of Hackathon",
          events: [
            { time: "8:00 AM - 9:00 AM", title: "Participant Registration", description: "" },
            { time: "9:00 AM - 9:30 AM", title: "High Tea and Buffer Time", description: "" },
            { time: "9:30 AM - 10:30 AM", title: "Opening Ceremony (with Chief Guest)", description: "" },
            { time: "10:30 AM - 11:00 AM", title: "Break", description: "" },
            { time: "11:00 AM - 5:00 PM", title: "Hackathon Session (6 hours)", description: "" },
          ],
        },
        {
          day: "Day 2",
          date: "16th Shrawan, 2081",
          title: "Full-Day Hackathon Session",
          events: [
            { time: "9:00 AM - 9:30 AM", title: "Arrival and High Tea", description: "" },
            { time: "9:30 AM - 11:00 AM", title: "Remarks by Technology Experts", description: "" },
            { time: "11:00 AM - 5:00 PM", title: "Hackathon Session (6 hours)", description: "" },
            { time: "5:00 PM - 5:15 PM", title: "Buffer Time", description: "" },
            { time: "After 5:15 PM", title: "Return Home", description: "" },
          ],
        },
        {
          day: "Day 3",
          date: "17th Shrawan, 2081",
          title: "Presentations and Closing Ceremony",
          events: [
            { time: "9:00 AM - 9:30 AM", title: "High Tea and Arrival", description: "" },
            { time: "9:30 AM - 10:00 AM", title: "Welcome of Judges", description: "" },
            { time: "10:00 AM - 1:00 PM", title: "Final Project Presentations", description: "" },
            { time: "1:00 PM - 2:00 PM", title: "Break and Networking", description: "" },
            { time: "2:00 PM - 2:45 PM", title: "Remarks from Judges", description: "" },
            { time: "2:45 PM - 3:15 PM", title: "Certificate Distribution", description: "" },
            { time: "3:15 PM - 4:15 PM", title: "Prize Distribution and Closing Ceremony", description: "" },
          ],
        },
      ],
    },
    {
      name: "Chitwan",
      nepaliName: "चितवन",
      dates: "1st Bhadra - 3rd Bhadra",
      nepaliDates: "१ भाद्र - ३ भाद्र",
      color: "from-purple-600 to-purple-800",
      accentColor: "purple",
      description: "Central Region",
      events: [
        {
          day: "Day 1",
          date: "1st Bhadra, 2081",
          title: "Opening and Start of Hackathon",
          events: [
            { time: "8:00 AM - 9:00 AM", title: "Participant Registration", description: "" },
            { time: "9:00 AM - 9:30 AM", title: "High Tea and Buffer Time", description: "" },
            { time: "9:30 AM - 10:30 AM", title: "Opening Ceremony (with Chief Guest)", description: "" },
            { time: "10:30 AM - 11:00 AM", title: "Break", description: "" },
            { time: "11:00 AM - 5:00 PM", title: "Hackathon Session (6 hours)", description: "" },
          ],
        },
        {
          day: "Day 2",
          date: "2nd Bhadra, 2081",
          title: "Full-Day Hackathon Session",
          events: [
            { time: "9:00 AM - 9:30 AM", title: "Arrival and High Tea", description: "" },
            { time: "9:30 AM - 11:00 AM", title: "Remarks by Technology Experts", description: "" },
            { time: "11:00 AM - 5:00 PM", title: "Hackathon Session (6 hours)", description: "" },
            { time: "5:00 PM - 5:15 PM", title: "Buffer Time", description: "" },
            { time: "After 5:15 PM", title: "Return Home", description: "" },
          ],
        },
        {
          day: "Day 3",
          date: "3rd Bhadra, 2081",
          title: "Presentations and Closing Ceremony",
          events: [
            { time: "9:00 AM - 9:30 AM", title: "High Tea and Arrival", description: "" },
            { time: "9:30 AM - 10:00 AM", title: "Welcome of Judges", description: "" },
            { time: "10:00 AM - 1:00 PM", title: "Final Project Presentations", description: "" },
            { time: "1:00 PM - 2:00 PM", title: "Break and Networking", description: "" },
            { time: "2:00 PM - 2:45 PM", title: "Remarks from Judges", description: "" },
            { time: "2:45 PM - 3:15 PM", title: "Certificate Distribution", description: "" },
            { time: "3:15 PM - 4:15 PM", title: "Prize Distribution and Closing Ceremony", description: "" },
          ],
        },
      ],
    },
  ]

  const nextCity = () => {
    setSelectedCity((prev) => (prev + 1) % cities.length)
  }

  const prevCity = () => {
    setSelectedCity((prev) => (prev - 1 + cities.length) % cities.length)
  }

  return (
    <section id="timeline" className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Event <span className="text-purple-600">Timeline</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose your city to view the detailed 3-day hackathon schedule
          </p>
        </motion.div>

        {/* City Selector with 3D Cards */}
        <div className="relative mb-12">
          <div className="flex justify-center items-center space-x-2 mb-8">
            <motion.button
              onClick={prevCity}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </motion.button>

            <div className="relative w-72 sm:w-80 md:w-96 h-40 sm:h-48 md:h-52 perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCity}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl sm:rounded-2xl shadow-2xl transform-gpu overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="h-full flex flex-col justify-center items-center text-white p-3 sm:p-4 md:p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="text-center w-full"
                    >
                      <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-2 sm:mb-3 md:mb-4 text-white/80" />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                        {cities[selectedCity].name}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-3 leading-tight">
                        {cities[selectedCity].description}
                      </p>
                      <div className="bg-white/20 backdrop-blur-sm rounded-md sm:rounded-lg p-2 sm:p-3 w-full">
                        <p className="font-semibold text-xs sm:text-sm md:text-base leading-tight">
                          {cities[selectedCity].dates}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full"
                        animate={{
                          x: [0, 100, 0],
                          y: [0, -50, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.5,
                        }}
                        style={{
                          left: `${20 + i * 10}%`,
                          top: `${30 + i * 5}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              onClick={nextCity}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </motion.button>
          </div>

          {/* City Indicators */}
          <div className="flex justify-center space-x-2">
            {cities.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCity(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === selectedCity ? "bg-purple-600 scale-125" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Animated Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCity}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 sm:space-y-12"
          >
            {cities[selectedCity].events.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + dayIndex * 0.2, type: "spring", stiffness: 200 }}
                    className={`bg-gradient-to-r ${cities[selectedCity].color} text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4`}
                  >
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{day.day}</h3>
                    <p className={`text-${cities[selectedCity].accentColor}-600 font-semibold text-sm sm:text-base`}>
                      {day.date}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">{day.title}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + dayIndex * 0.2 + eventIndex * 0.1 }}
                      className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all hover:bg-gray-100"
                    >
                      <div className="flex items-start">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`bg-${cities[selectedCity].accentColor}-100 rounded-lg p-2 mr-3 flex-shrink-0`}
                        >
                          <Clock className={`h-3 w-3 sm:h-4 sm:w-4 text-${cities[selectedCity].accentColor}-600`} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-${cities[selectedCity].accentColor}-600 font-semibold text-xs sm:text-sm`}
                          >
                            {event.time}
                          </p>
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{event.title}</h4>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-64 h-64 bg-gradient-to-r ${cities[selectedCity].color} opacity-5 rounded-full blur-3xl`}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
              }}
              style={{
                left: `${10 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
