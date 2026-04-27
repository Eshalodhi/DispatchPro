'use client'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/app/components/HeroSection'
import { 
  MdLocalShipping,
  MdMonetizationOn,
  MdVerified,
  MdHistory,
  MdRocketLaunch,
  MdFlashOn,
  MdNumbers
} from 'react-icons/md'

export default function About() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      
      {/* Hero */}
      <HeroSection
        title="About DispatchPro"
        subtitle="5+ years of dispatch excellence serving 500+ trucking companies"
        imageUrl="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
        cta1Link="/services"
        cta2Link="/pricing"
        ctaText1="Our Services"
        ctaText2="View Pricing"
      />

      {/* Stats */}
      <section className="py-24 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-4 gap-8">
            
            {[ 
              { icon: MdLocalShipping, value: "500+", label: "Active Drivers" },
              { icon: MdMonetizationOn, value: "$3.8M", label: "Monthly Revenue" },
              { icon: MdVerified, value: "98%", label: "Success Rate" },
              { icon: MdHistory, value: "5+", label: "Years Experience" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <item.icon className="text-4xl text-indigo-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-indigo-500 mb-2">
                  {item.value}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-500">
              Your Success is Our Mission
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Founded by truckers for truckers. We understand the challenges of 
              owner-operators and built our service to solve them.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
                <MdRocketLaunch className="text-3xl text-indigo-500 mb-3" />
                <h4 className="font-semibold text-lg mb-1">Max Profit</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  $3.50+/mile average
                </p>
              </div>

              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
                <MdFlashOn className="text-3xl text-indigo-500 mb-3" />
                <h4 className="font-semibold text-lg mb-1">Weekly Pay</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Paid every Friday
                </p>
              </div>

            </div>

            <Link
              href="/contact"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Start Today
            </Link>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl text-center border border-gray-200 dark:border-gray-700">
              <MdLocalShipping className="text-5xl text-indigo-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">
                Trusted by Thousands
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                10,000+ loads dispatched monthly
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-indigo-400">
            How We Work
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            {[
              { title: "Find Loads", desc: "Premium loads from brokers" },
              { title: "Dispatch", desc: "We handle everything" },
              { title: "Get Paid", desc: "Weekly direct deposit" }
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-800 rounded-xl"
              >
                <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MdNumbers className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}