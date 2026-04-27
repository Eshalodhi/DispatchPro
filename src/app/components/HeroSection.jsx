'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection({ 
  title, 
  subtitle, 
  imageUrl, 
  cta1Link, 
  cta2Link, 
  ctaText1, 
  ctaText2 
}) {
  return (
    <section className="relative min-h-screen pt-20 pb-10 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt="Truck Dispatch"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02122F]/80 via-[#02122F]/60 to-[#02122F]/90"></div>
      
      {/* Subtle Glass Effect Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,163,197,0.08)_0%,transparent_70%)]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative text-center px-6 max-w-5xl mx-auto z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight tracking-tighter text-[#F0ECDD]"
        >
          {title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-10 text-xl md:text-2xl text-[#8BA3C5] max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA - Strong Glass Button */}
          <Link href={cta1Link || '/'}>
            <button 
              className="px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
              style={{
                background: 'linear-gradient(to right, #8BA3C5, #F0ECDD)',
                color: '#02122F',
                boxShadow: '0 15px 35px rgba(139, 163, 197, 0.4)',
              }}
            >
              {ctaText1 || 'Get Started Free'}
            </button>
          </Link>

          {/* Secondary CTA - Glass Border Button */}
          <Link href={cta2Link || '/'}>
            <button 
              className="px-10 py-4 rounded-2xl font-semibold text-lg border backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
              style={{
                borderColor: 'rgba(139, 163, 197, 0.6)',
                color: '#F0ECDD',
              }}
            >
              {ctaText2 || 'View Services'}
            </button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 flex items-center justify-center gap-8 text-sm text-[#8BA3C5]"
        >
          <div className="flex items-center gap-2">
            Trusted by 500+ Drivers
          </div>
          <div>24/7 Dispatch Support</div>
          <div>Premium Loads Only</div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#8BA3C5]"
      >
        <span className="text-xs tracking-widest mb-2">SCROLL TO EXPLORE</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#8BA3C5] to-transparent" />
      </motion.div>
    </section>
  )
}