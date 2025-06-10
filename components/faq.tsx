"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who can participate in CyberUtsav 2.0?",
      answer:
        "The hackathon is open to High School Students (Grade 10 to Bachelor 1st Year) from Nepal and abroad. You can participate individually or form teams of up to 4 members.",
    },
    {
      question: "What is the registration fee?",
      answer: "Registration is completely free! We believe in making technology accessible to everyone.",
    },
    {
      question: "In which cities will the event be held?",
      answer:
        "CyberUtsav 2.0 will be held simultaneously in 3 major cities: Kathmandu, Pokhara, and Chitwan. You can choose to participate from any of these locations.",
    },
    {
      question: "Do I need to have a team before registering?",
      answer:
        "No, you can register individually. We'll have team formation sessions on Day 1 to help you find teammates with complementary skills.",
    },
    {
      question: "What should I bring to the event?",
      answer:
        "Bring your laptop, chargers, any hardware you might need, and your enthusiasm! We'll provide meals, snacks, and a comfortable workspace.",
    },
    {
      question: "Are there any specific technology requirements?",
      answer:
        "No specific technology stack is required. You're free to use any programming languages, frameworks, or tools you're comfortable with.",
    },
    {
      question: "Will there be mentors available?",
      answer:
        "Yes! We have industry experts and experienced developers from GDG Kathmandu who will be available throughout the event to guide and mentor participants in all cities.",
    },
    {
      question: "How will projects be judged?",
      answer:
        "Projects will be evaluated based on innovation, technical implementation, design, presentation, and potential impact. Detailed judging criteria will be shared during the opening ceremony.",
    },
    {
      question: "What is the theme for the hackathon?",
      answer:
        "CyberUtsav 2.0 features an open theme format, encouraging participants to explore diverse problem statements and create innovative solutions across various domains.",
    },
    {
      question: "How will project management be handled?",
      answer:
        "We will be using GitHub for project management and collaboration. Participants are encouraged to use GitHub for version control, issue tracking, and collaborative coding.",
    },
    {
      question: "How long is the hackathon?",
      answer:
        "CyberUtsav 2.0 is a 12-hour hackathon, providing a focused and intense environment for innovation and collaboration.",
    },
  ]

  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">Got questions? We've got answers!</p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-purple-600 transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Still have questions?</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
          <a href="#contact">Contact Us</a>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
