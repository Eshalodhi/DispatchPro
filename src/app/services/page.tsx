'use client'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MdLocalShipping, 
  MdMap, 
  MdSupportAgent, 
  MdDescription, 
  MdHeadset 
} from 'react-icons/md'

export default function Services() {
  const services = [
    { 
      title: 'Load Booking', 
      icon: MdLocalShipping, 
      desc: 'Instant access to premium loads from top brokers nationwide' 
    },
    { 
      title: 'Route Planning', 
      icon: MdMap, 
      desc: 'Optimized routes maximizing profit & minimizing deadhead miles' 
    },
    { 
      title: 'Driver Support', 
      icon: MdSupportAgent, 
      desc: '24/7 expert dispatch team handling all driver needs' 
    },
    { 
      title: 'Documentation', 
      icon: MdDescription, 
      desc: 'Complete paperwork handling - rate con, BOL, POD management' 
    },
    { 
      title: '24/7 Dispatch', 
      icon: MdHeadset, 
      desc: 'Round-the-clock coverage so you never miss a load' 
    }
  ]

  return (
    <main className="min-h-screen bg-[#02122F] text-white">
      <Navbar />
      
      {/* Hero Section - Consistent with Home Page */}
      <section className="relative min-h-[70vh] pt-20 pb-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Truck dispatching services"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#02122F]/85 via-[#02122F]/70 to-[#02122F]/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,163,197,0.12)_0%,transparent_70%)]"></div>

        <motion.div 
          initial={{opacity:0, y:40}} 
          animate={{opacity:1, y:0}}
          transition={{duration: 0.9}}
          className="relative text-center px-6 max-w-4xl mx-auto z-10"
        >
          <motion.h1 
            initial={{opacity:0, y:30}} 
            animate={{opacity:1, y:0}}
            transition={{delay: 0.2}}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[#F0ECDD]"
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            transition={{delay: 0.4}}
            className="mb-10 text-xl md:text-2xl text-[#8BA3C5] max-w-2xl mx-auto"
          >
            Comprehensive truck dispatching solutions designed to maximize your revenue and minimize stress
          </motion.p>

          <motion.div 
            initial={{opacity:0, y:30}} 
            animate={{opacity:1, y:0}}
            transition={{delay: 0.6}}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/pricing">
              <button 
                className="px-10 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl"
                style={{
                  background: 'linear-gradient(to right, #8BA3C5, #F0ECDD)',
                  color: '#02122F',
                }}
              >
                View Pricing
              </button>
            </Link>
            
            <Link href="/contact">
              <button 
                className="px-10 py-4 rounded-2xl font-semibold text-lg border backdrop-blur-xl transition-all hover:scale-105 active:scale-95 hover:bg-white/10"
                style={{
                  borderColor: 'rgba(139, 163, 197, 0.7)',
                  color: '#F0ECDD',
                }}
              >
                Get a Quote
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid - Premium Glassmorphic Cards */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#F0ECDD]"
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08, y: -16 }}
                className="group p-10 rounded-3xl backdrop-blur-2xl border transition-all duration-500 cursor-pointer"
                style={{
                  background: 'rgba(35, 53, 77, 0.68)',
                  border: '1px solid rgba(139, 163, 197, 0.25)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div 
                  className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: 'rgba(139, 163, 197, 0.15)',
                    border: '1px solid rgba(139, 163, 197, 0.35)'
                  }}
                >
                  <service.icon 
                    size={54} 
                    style={{ color: '#8BA3C5' }} 
                    className="group-hover:text-[#F0ECDD] transition-colors"
                  />
                </div>

                <h3 className="text-2xl font-bold text-center mb-5 text-[#F0ECDD] group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-center text-[#8BA3C5] leading-relaxed text-[17px]">
                  {service.desc}
                </p>

                <div className="h-1 w-12 mx-auto mt-10 bg-gradient-to-r from-transparent via-[#8BA3C5] to-transparent group-hover:w-20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}