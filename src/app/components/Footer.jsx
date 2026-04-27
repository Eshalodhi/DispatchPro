'use client'
import Link from 'next/link'
import { 
  FaFacebook, 
  FaWhatsapp, 
  FaPhone, 
  FaHome, 
  FaCogs, 
  FaDollarSign, 
  FaTruck,
  FaBox,
  FaMapMarkedAlt,
  FaHeadset
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12 pb-8 px-6"> {/* Reduced py-16 to py-12 pb-8 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4 block">
            🚛 DispatchPro
          </Link>
          <p className="text-gray-400 mb-6">24/7 truck dispatch services maximizing your profits.</p>
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 bg-indigo-500/20 hover:bg-indigo-500 rounded-xl flex items-center justify-center text-xl hover:scale-110 transition-all">
              <FaFacebook />
            </a>
            <a href="#" className="w-12 h-12 bg-indigo-500/20 hover:bg-indigo-500 rounded-xl flex items-center justify-center text-xl hover:scale-110 transition-all">
              <FaWhatsapp />
            </a>
            <a href="#" className="w-12 h-12 bg-indigo-500/20 hover:bg-indigo-500 rounded-xl flex items-center justify-center text-xl hover:scale-110 transition-all">
              <FaPhone />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2"><FaHome /> Home</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white flex items-center gap-2"><FaCogs /> Services</Link></li>
            <li><Link href="/pricing" className="text-gray-400 hover:text-white flex items-center gap-2"><FaDollarSign /> Pricing</Link></li>
            <li><Link href="/drivers" className="text-gray-400 hover:text-white flex items-center gap-2"><FaTruck /> Drivers</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6">Services</h3>
          <ul className="space-y-3">
            <li><Link href="/services" className="text-gray-400 hover:text-white flex items-center gap-2"><FaBox /> Load Booking</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white flex items-center gap-2"><FaMapMarkedAlt /> Route Planning</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white flex items-center gap-2"><FaHeadset /> 24/7 Dispatch</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6">Contact</h3>
          <div className="space-y-4 text-gray-400">
            <p className="flex items-center gap-2"><FaPhone /> (555) 123-DISP</p>
            <p className="flex items-center gap-2">📧 dispatch@dispatchpro.com</p>
            <p className="flex items-center gap-2">📍 Dallas, TX</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm"> {/* Reduced pt-8 to pt-6 */}
        <p>&copy; 2024 DispatchPro. All rights reserved.</p>
      </div>
    </footer>
  )
}