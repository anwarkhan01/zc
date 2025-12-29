import { Link } from "react-router-dom"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-red-500">ZC</span>
              <span className="text-lg font-semibold text-white">Zean Classes</span>
            </div>
            <p className="text-sm text-gray-400">
              Premier coaching institute dedicated to academic excellence and student growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#branches" className="text-sm hover:text-red-500 transition-colors">
                  Branches
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-sm hover:text-red-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-sm hover:text-red-500 transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@zeanclassess.com"
                  className="hover:text-red-500 transition-colors"
                >
                  info@zeanclassess.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-red-500 transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zean Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

