'use client'
import Navbar from "@/app/components/Navbar"
import Footer from '@/app/components/Footer'
import ServiceCard from '@/app/components/ServiceCard'
import { motion } from 'framer-motion'
import HeroSection from '@/app/components/HeroSection'
import {
  MdLocalShipping,
  MdMap,
  MdSupportAgent,
  MdAccessTime,
  MdAttachMoney,
  MdFlashOn
} from 'react-icons/md'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  const services = [
    { title: 'Load Booking', icon: MdLocalShipping, desc: 'Access premium loads instantly from top brokers' },
    { title: 'Route Planning', icon: MdMap, desc: 'Optimized routes for maximum profit & efficiency' },
    { title: 'Driver Support', icon: MdSupportAgent, desc: '24/7 expert dispatch team always ready to help' }
  ]

  const whyUsFeatures = [
    { title: '24/7 Support', desc: 'Round-the-clock assistance for all drivers', icon: MdAccessTime },
    { title: 'High Paying Loads', desc: 'Premium loads averaging $3.50+/mile', icon: MdAttachMoney },
    { title: 'Fast Payments', desc: 'Weekly direct deposits, no waiting', icon: MdFlashOn }
  ]

  return (
    <main className="min-h-screen bg-[#02122F] text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection
        title="Professional Truck Dispatch Services"
        subtitle="We maximize your profits & handle everything 24/7"
        imageUrl="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        cta1Link="/pricing"
        cta2Link="/services"
        ctaText1="Get Started Free"
        ctaText2="View Services"
      />

      {/* SERVICES SECTION - Enhanced Version */}
<section className="py-24 px-6 relative">
  <div className="absolute inset-0 bg-gradient-to-br from-[#02122F] via-[#23354D] to-[#02122F]"></div>
  
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
    className="max-w-6xl mx-auto relative z-10"
  >
    <motion.h2
      variants={itemVariants}
      className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-[#F0ECDD] via-[#8BA3C5] to-[#F0ECDD] bg-clip-text text-transparent"
    >
      Our Services
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.08, 
            y: -16,
            transition: { duration: 0.4 }
          }}
          className="group relative p-10 rounded-3xl backdrop-blur-2xl border transition-all duration-500 cursor-pointer overflow-hidden"
          style={{
            background: 'rgba(35, 53, 77, 0.65)',
            border: '1px solid rgba(139, 163, 197, 0.3)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8BA3C5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          {/* Icon Container */}
          <div 
            className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            style={{
              background: 'rgba(139, 163, 197, 0.15)',
              border: '1px solid rgba(139, 163, 197, 0.4)'
            }}
          >
            <service.icon 
              size={52} 
              style={{ color: '#8BA3C5' }} 
              className="transition-all group-hover:text-[#F0ECDD]"
            />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-center mb-4 text-[#F0ECDD] group-hover:text-white transition-colors">
            {service.title}
          </h3>
          
          <p className="text-center text-[#8BA3C5] text-[17px] leading-relaxed">
            {service.desc}
          </p>

          {/* Bottom accent line */}
          <div className="h-1 w-12 mx-auto mt-8 bg-gradient-to-r from-transparent via-[#8BA3C5] to-transparent group-hover:w-20 transition-all duration-500" />
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      {/* WHY CHOOSE US - Premium Glassmorphic Cards */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#495B7D_0%,transparent_60%)]"></div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8BA3C5] via-[#F0ECDD] to-[#8BA3C5] bg-clip-text text-transparent"
          >
            Why Choose Us?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-[#8BA3C5] mb-20 max-w-3xl mx-auto"
          >
            Trusted by 500+ trucking companies across North America
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUsFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -14 }}
                className="p-10 rounded-3xl backdrop-blur-2xl border transition-all duration-500 group cursor-pointer flex flex-col items-center text-center"
                style={{
                  background: 'rgba(35, 53, 77, 0.72)',
                  border: '1px solid rgba(139, 163, 197, 0.25)',
                  boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div 
                  className="w-24 h-24 rounded-3xl flex items-center justify-center mb-8 transition-all group-hover:scale-110"
                  style={{ 
                    background: 'rgba(139, 163, 197, 0.12)',
                    border: '1px solid rgba(139, 163, 197, 0.35)'
                  }}
                >
                  <feature.icon size={54} style={{ color: '#8BA3C5' }} />
                </div>

                <h3 className="font-bold text-3xl mb-4 text-[#F0ECDD] group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#8BA3C5] text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA SECTION */}
<section className="py-24 px-6 text-center relative">
  <div className="absolute inset-0 bg-gradient-to-br from-[#02122F] via-[#23354D] to-[#02122F]" />

  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F0ECDD]">
      Ready to Maximize Your Profits?
    </h2>

    <p className="text-[#8BA3C5] text-lg mb-10">
      Join hundreds of drivers earning more with our professional dispatch services.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">
      <a
        href="/drivers"
        className="bg-gradient-to-r from-[#8BA3C5] to-[#F0ECDD] text-[#02122F] px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all"
      >
        Become a Driver
      </a>

      <a
        href="/contact"
        className="border border-[#8BA3C5] text-[#F0ECDD] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#8BA3C5]/20 transition-all"
      >
        Get Free Quote
      </a>
    </div>
  </div>
</section>

      <Footer />
    </main>
  )
}