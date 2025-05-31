"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import Image from "next/image"

export default function Team() {
  const teamMembers = [
    {
      name: "Dikshant Pandey",
      role: "Event Director",
      bio: "Tech entrepreneur with a passion for technology and innovation. Former winner of ICT-Nepal 2022 and Codevour 5.0",
      image: "/dikshant-pandey.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "dikshaynt@cyberutsav.xyz",
      },
    },
    {
      name: "Sharad Bhandari",
      role: "Technical Lead",
      bio: "Senior Software Engineer and hackathon mentor",
      image: "/sharad-bhandari.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sharad@cyberutsav.xyz",
      },
    },
    {
      name: "Sajwal Chaulagain",
      role: "Operations Manager",
      bio: "Expert in event management and logistics coordination",
      image: "/sajwal-chaulagain.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sajwal@cyberutsav.xyz",
      },
    },
    {
      name: "Sanskar Shrestha",
      role: "Marketing Head",
      bio: "Digital marketing specialist with focus on tech events",
      image: "/sansakar-shrestha.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sanskar@cyberutsav.xyz",
      },
    },
    {
      name: "Sajal",
      role: "Sponsorship Lead",
      bio: "Corporate relations expert with strong industry connections",
      image: "/sajal-devkota.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sajal@cyberutsav.xyz",
      },
    },
    {
      name: "Prayas Bhatt",
      role: "Community Manager",
      bio: "Building tech communities across Nepal for 5+ years",
      image: "/prayas-bhatt.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "prayas@cyberutsav.xyz",
      },
    },
  ]

  return (
    <section id="team" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Meet Our <span className="text-purple-600">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            The passionate individuals behind CyberUtsav 2.0, working tirelessly to create an unforgettable experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">{member.bio}</p>

                <div className="flex space-x-3 justify-center">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              We're always looking for passionate individuals to help us create amazing tech events. Get in touch if
              you'd like to be part of our mission.
            </p>
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
