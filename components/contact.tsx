"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, User, Calendar } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Contact <span className="text-purple-600">Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Have questions about CyberUtsav 2.0? Get in touch with our organizing team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

            {/* Event Coordinator */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 text-white mb-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 mr-3" />
                <h4 className="text-lg font-semibold">Event Coordinator</h4>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-lg">Dikshant Pandey</p>
                <p className="text-purple-100">CyberUtsav 2.0 Organizing Committee</p>
                <div className="flex items-center mt-3">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>9815210614 | 9705707707</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>contact@cyberutsav.xyz</span>
                </div>
              </div>
            </div>

            {/* General Contact */}
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Mail className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <h5 className="font-semibold text-gray-900">Email</h5>
                  <p className="text-gray-600">contact@cyberutsav.xyz</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <h5 className="font-semibold text-gray-900">Event Locations</h5>
                  <p className="text-gray-600">Kathmandu, Pokhara, Chitwan, Butwal</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600 mr-4" />
                <div>
                  <h5 className="font-semibold text-gray-900">Event Dates</h5>
                  <p className="text-gray-600">July 5-7, 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Looking for quick answers?</p>
          <a
            href="#faq"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Check Our FAQ
          </a>
        </motion.div>
      </div>
    </section>
  )
}
