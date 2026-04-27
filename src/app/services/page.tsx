'use client'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import {
  MdLocalShipping,
  MdMap,
  MdSupportAgent,
  MdDescription,
  MdHeadset
} from 'react-icons/md'

export default function Services() {
  const services = [
    { title: 'Load Booking', icon: MdLocalShipping, desc: 'Instant access to premium loads from top brokers nationwide' },
    { title: 'Route Planning', icon: MdMap, desc: 'Optimized routes maximizing profit & minimizing deadhead miles' },
    { title: 'Driver Support', icon: MdSupportAgent, desc: '24/7 expert dispatch team handling all driver needs' },
    { title: 'Documentation', icon: MdDescription, desc: 'Complete paperwork handling - rate con, BOL, POD management' },
    { title: '24/7 Dispatch', icon: MdHeadset, desc: 'Round-the-clock coverage so you never miss a load' }
  ]

  return (
    <main className="min-h-screen bg-[#02122F] text-white">
      <Navbar />

      {/* ✅ HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=60"
          alt="Truck dispatching services"
          fill
          priority
          quality={60}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#02122F]/75" />

        <div className="relative text-center px-6 max-w-4xl mx-auto z-10">
          <h1 className="fade-up text-4xl md:text-6xl font-bold mb-6 text-[#F0ECDD]">
            Our Services
          </h1>

          <p className="fade-up delay-1 text-lg md:text-xl text-[#8BA3C5] mb-8">
            Comprehensive truck dispatching solutions designed to maximize your revenue and minimize stress
          </p>

          <div className="fade-up delay-2 flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/pricing" className="px-8 py-3 rounded-xl font-semibold text-lg inline-block"
              style={{ background: 'linear-gradient(to right, #8BA3C5, #F0ECDD)', color: '#02122F' }}>
              View Pricing
            </Link>

            <Link href="/contact" className="px-8 py-3 rounded-xl font-semibold text-lg border inline-block"
              style={{ borderColor: 'rgba(139,163,197,0.7)', color: '#F0ECDD' }}>
              Get a Quote
            </Link>

          </div>
        </div>
      </section>

      {/* ✅ SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="fade-up text-3xl md:text-5xl font-bold text-center mb-14 text-[#F0ECDD]">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`fade-up delay-${i % 3} card-hover p-8 rounded-2xl border`}
                style={{
                  background: 'rgba(35,53,77,0.6)',
                  border: '1px solid rgba(139,163,197,0.25)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-[#8BA3C5]/20">
                  <service.icon size={40} style={{ color: '#8BA3C5' }} />
                </div>

                <h3 className="text-xl font-bold text-center mb-4 text-[#F0ECDD]">
                  {service.title}
                </h3>

                <p className="text-center text-[#8BA3C5]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}