'use client'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import HeroSection from '../components/HeroSection'
import { useState } from 'react'

export default function Drivers() {

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    const form = e.currentTarget

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      mc: form.mc.value,
      truck: form.truck.value,
      message: form.message.value
    }

    try {
      const res = await fetch('/api/driver', {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        form.reset()
      }

    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative">
        <HeroSection
          title="Become a Professional Driver"
          subtitle="Join 5,000+ independent drivers and start getting high-paying loads with weekly payouts and full support."
          imageUrl="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
          cta1Link="#form"
          cta2Link="/pricing"
          ctaText1="Apply Now"
          ctaText2="View Pricing"
        />
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <p className="text-3xl font-bold text-indigo-500">5000+</p>
              <p className="text-gray-500 dark:text-gray-400">Active Drivers</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-indigo-500">$3.5/mile</p>
              <p className="text-gray-500 dark:text-gray-400">Avg Load Rate</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-indigo-500">Weekly</p>
              <p className="text-gray-500 dark:text-gray-400">Fast Payments</p>
            </div>

          </div>

        </div>
      </section>

      {/* FORM SECTION */}
      <section id="form" className="py-15 px-6 mt-12">
        <div className="max-w-3xl mx-auto text-center">

  {/* ✅ HEADING ADDED */}
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-500">
    Driver Registration
  </h2>

  <p className="text-gray-600 dark:text-gray-400 mb-10">
    Fill out the form below and our team will contact you shortly.
  </p>
          <form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-10 md:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              required
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              name="mc"
              type="text"
              placeholder="MC/DOT Number"
              required
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              name="truck"
              type="text"
              placeholder="Truck Type"
              required
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Availability & Preferences"
              required
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-indigo-500/40 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Join Our Network"}
            </button>

            {success && (
              <p className="text-green-500 mt-2">
                ✅ Driver registered successfully!
              </p>
            )}

          </form>

          <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm">
            No fees. No contracts. Get paid weekly on the best loads.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  )
}