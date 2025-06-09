"use client"

import { motion } from "framer-motion"
import { Code, Trophy, Users, Zap, MapPin, Clock, Heart } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Code,
      title: "12-Hour Challenge",
      description: "Intensive 12-hour coding marathon to build innovative software solutions.",
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      description: "Compete with the best minds and win exciting prizes worth NRs. 65K+.",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Form teams of 2-4 members and collaborate to create amazing projects.",
    },
    {
      icon: Zap,
      title: "Software Focus",
      description: "Build websites, mobile apps, or PC software using any technology stack.",
    },
  ]

  const cities = [
    { name: "Kathmandu", description: "Capital City Hub" },
    { name: "Pokhara", description: "Tourist City" },
    { name: "Chitwan", description: "Central Region" },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-purple-600">CyberUtsav 2.0</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            CyberUtsav 2.0 is a 12-hour hackathon organized by Tech Gurkha Digital Services Pvt. Ltd where teams of 2-4
            members build innovative software solutions. Projects are committed to GitHub and teams showcase their
            creativity through innovative ideas.
          </p>
        </motion.div>

        {/* Diversity & Inclusion Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white"
        >
          <div className="text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-purple-200" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Diversity & Innovation</h3>
            <p className="text-purple-100 mb-6 max-w-3xl mx-auto text-sm sm:text-base">
              CyberUtsav 2.0 welcomes participants from all backgrounds and experiences. We believe diverse teams create
              the most innovative solutions. We especially encourage underrepresented groups, including women in tech,
              to participate and showcase their talents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-lg font-semibold mb-2">Open to All</h4>
                <p className="text-purple-100 text-sm">Everyone is welcome regardless of background or experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-lg font-semibold mb-2">Inclusive Environment</h4>
                <p className="text-purple-100 text-sm">Safe and supportive space for all participants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-lg font-semibold mb-2">Equal Opportunities</h4>
                <p className="text-purple-100 text-sm">Fair platform for innovation and recognition</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 sm:p-8 text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">Event Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="h-10 w-10 mx-auto mb-3 text-purple-200" />
              <h4 className="text-lg font-semibold mb-2">12-Hour Hackathon</h4>
              <p className="text-purple-100 text-sm">Non-stop coding from Day 1 to Day 2</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Code className="h-10 w-10 mx-auto mb-3 text-purple-200" />
              <h4 className="text-lg font-semibold mb-2">GitHub Integration</h4>
              <p className="text-purple-100 text-sm">All projects must be committed to GitHub</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Users className="h-10 w-10 mx-auto mb-3 text-purple-200" />
              <h4 className="text-lg font-semibold mb-2">Team-Based</h4>
              <p className="text-purple-100 text-sm">Teams of 2-4 members required</p>
            </div>
          </div>
        </motion.div>

        {/* Cities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">Event Cities</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{city.name}</h4>
                <p className="text-sm sm:text-base text-gray-600">{city.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 sm:p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why CyberUtsav 2.0?</h3>
              <p className="text-purple-100 mb-6 text-sm sm:text-base">
                Experience the thrill of a 12-hour hackathon where innovation meets collaboration. Build real software
                solutions and showcase your skills to industry experts across Nepal.
              </p>
              <ul className="space-y-2 text-purple-100 text-sm sm:text-base">
                <li>• Software-focused projects only</li>
                <li>• GitHub-based project management</li>
                <li>• Industry mentorship and guidance</li>
                <li>• Inclusive and diverse community</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <h4 className="text-xl sm:text-2xl font-bold mb-2">Event Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold">150</p>
                    <p className="text-purple-200 text-sm sm:text-base">Total Spots</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold">12</p>
                    <p className="text-purple-200 text-sm sm:text-base">Hours</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold">3</p>
                    <p className="text-purple-200 text-sm sm:text-base">Cities</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold">NRs. 65K+</p>
                    <p className="text-purple-200 text-sm sm:text-base">Prize Pool</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
