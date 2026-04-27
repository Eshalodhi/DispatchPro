'use client'

import { useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { motion } from 'framer-motion'
import { MdCheck } from 'react-icons/md'

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      title: "Starter",
      monthly: 99,
      yearly: 79,
      description: "Perfect for beginners",
      features: [
        "Up to 100 loads",
        "Basic route planning",
        "Email support",
        "Load board access"
      ],
      cta: "Get Started"
    },
    {
      title: "Pro",
      monthly: 199,
      yearly: 159,
      description: "Best for growing fleets",
      features: [
        "Unlimited loads",
        "24/7 dispatch support",
        "Premium loads",
        "Documentation handling",
        "Route optimization"
      ],
      cta: "Choose Pro"
    },
    {
      title: "Enterprise",
      monthly: 499,
      yearly: 399,
      description: "For large companies",
      features: [
        "Everything in Pro",
        "Dedicated dispatcher",
        "Priority loads",
        "Analytics",
        "Payroll support",
        "API access"
      ],
      cta: "Contact Sales"
    }
  ]

  // 💳 Stripe handler (frontend placeholder)
  const handleCheckout = (plan: { title: any; monthly?: number; yearly?: number; description?: string; features?: string[]; cta?: string }) => {
    alert(`Proceeding to payment for ${plan.title}`)
    // later: connect Stripe here
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-24 pb-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-indigo-500">
          Pricing Plans
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Flexible pricing for every stage of your business
        </p>

        {/* TOGGLE */}
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-full flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full ${
                !isYearly ? 'bg-indigo-500 text-white' : ''
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full ${
                isYearly ? 'bg-indigo-500 text-white' : ''
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="pb-20 px-4 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {plans.map((plan, i) => {
            const price = isYearly ? plan.yearly : plan.monthly

            return (
              <motion.div
                key={plan.title}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(1)}

                whileHover={{ scale: 1.05, y: -10 }}

                className="relative p-[2px] rounded-3xl transition-all duration-500"
                style={{
                  background: activeIndex === i
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)'
                    : 'transparent'
                }}
              >
                {/* INNER CARD */}
                <div
                  className="p-8 rounded-3xl h-full backdrop-blur-xl transition-all duration-500"
                  style={{
                    background: activeIndex === i
                      ? 'rgba(30, 41, 59, 0.9)'
                      : 'rgba(30, 41, 59, 0.7)'
                  }}
                >

                  {/* BADGE */}
                  {activeIndex === i && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}

                  {/* TITLE */}
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>

                  {/* PRICE */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold">
                      ${price}
                    </span>
                    <span className="text-gray-400">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>

                  {/* FEATURES */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <MdCheck className="text-indigo-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <button
                    onClick={() => handleCheckout(plan)}
                    className={`w-full py-3 rounded-xl font-semibold transition ${
                      activeIndex === i
                        ? 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            )
          })}

        </div>
      </section>

      <Footer />
    </main>
  )
}