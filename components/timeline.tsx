"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export default function Timeline() {
  const events = [
    {
      day: "Day 1",
      date: "July 5, 2025",
      title: "Opening and Start of Hackathon",
      events: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Participant Registration",
          description: "",
        },
        { time: "9:00 AM - 9:30 AM", title: "High Tea and Buffer Time", description: "" },
        {
          time: "9:30 AM - 10:30 AM",
          title: "Opening Ceremony (with Chief Guest)",
          description: "",
        },
        { time: "10:30 AM - 11:00 AM", title: "Break", description: "" },
        {
          time: "11:00 AM - 5:00 PM",
          title: "Hackathon Session (6 hours)",
          description: "",
        },
      ],
    },
    {
      day: "Day 2",
      date: "July 6, 2025",
      title: "Full-Day Hackathon Session",
      events: [
        { time: "9:00 AM - 9:30 AM", title: "Arrival and High Tea", description: "" },
        { time: "9:30 AM - 11:00 AM", title: "Remarks by Technology Experts", description: "" },
        {
          time: "11:00 AM - 5:00 PM",
          title: "Hackathon Session (6 hours)",
          description: "",
        },
        { time: "5:00 PM - 5:15 PM", title: "Buffer Time", description: "" },
        { time: "After 5:15 PM", title: "Return Home", description: "" },
      ],
    },
    {
      day: "Day 3",
      date: "July 7, 2025",
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
  ]

  return (
    <section id="timeline" className="py-16 sm:py-20 bg-gray-50">
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
            A carefully planned 3-day journey with a 12-hour hackathon across 3 days
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {events.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{day.day}</h3>
                  <p className="text-purple-600 font-semibold text-sm sm:text-base">{day.date}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{day.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-2 mr-3 flex-shrink-0">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-purple-600 font-semibold text-xs sm:text-sm">{event.time}</p>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{event.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
