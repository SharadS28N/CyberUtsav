import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Event Info */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              CyberUtsav 2.0
            </h3>
            <p className="text-gray-300 mb-4 max-w-md text-sm sm:text-base">
              The ultimate 12-hour hackathon experience bringing together the brightest minds in technology across
              Nepal. Code, create, compete, and conquer!
            </p>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>July 5-7, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Kathmandu, Pokhara, Chitwan</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>contact@cyberutsav.xyz</span>
              </div>
              <div className="flex items-center">
                <span>Organized by: Tech Gurkha Digital Services Pvt. Ltd</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <Link href="#about" className="hover:text-purple-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="hover:text-purple-400 transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="#prizes" className="hover:text-purple-400 transition-colors">
                  Prizes
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-purple-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="hover:text-purple-400 transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-gray-300 mb-4 text-sm sm:text-base">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>9815210614</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>contact@cyberutsav.xyz</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} CyberUtsav 2.0. All rights reserved.</p>
          <p className="mt-2 text-xs sm:text-sm">
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            {" | "}
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Code of Conduct
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
