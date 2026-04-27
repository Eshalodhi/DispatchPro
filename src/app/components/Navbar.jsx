'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MdMenu, MdClose } from 'react-icons/md'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Drivers', href: '/drivers' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      <div 
        className="backdrop-blur-2xl border-b"
        style={{
          background: 'rgba(2, 18, 47, 0.75)',
          borderColor: 'rgba(139, 163, 197, 0.2)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div>
                <span className="text-2xl font-bold text-[#F0ECDD] tracking-tight">
                  DispatchPro
                </span>
                <p className="text-[10px] text-[#8BA3C5] -mt-1">TRUCK DISPATCH</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="px-3 py-2.5 text-[#8BA3C5] hover:text-[#F0ECDD] font-medium transition-all duration-300 relative group text-sm lg:text-base"
                  >
                    {link.name}
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#8BA3C5] group-hover:w-4/5 transition-all duration-300 rounded" />
                  </Link>
                </li>
              ))}
              
              <Link 
                href="/contact"
                className="ml-4 px-6 py-2.5 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(to right, #8BA3C5, #F0ECDD)',
                  color: '#02122F',
                  boxShadow: '0 10px 20px rgba(139, 163, 197, 0.3)',
                }}
              >
                Get Quote
              </Link>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-3xl text-[#8BA3C5] p-2"
            >
              {isOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6 border-t"
              style={{ borderColor: 'rgba(139, 163, 197, 0.2)' }}
            >
              <div className="flex flex-col pt-4 space-y-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="block px-5 py-3 text-[#8BA3C5] hover:text-[#F0ECDD] hover:bg-white/5 rounded-xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Link 
                  href="/contact"
                  className="mx-5 mt-4 py-3.5 text-center rounded-xl font-semibold text-[#02122F]"
                  style={{
                    background: 'linear-gradient(to right, #8BA3C5, #F0ECDD)',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}