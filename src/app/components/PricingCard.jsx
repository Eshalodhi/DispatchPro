'use client'
import { motion } from 'framer-motion'

export default function PricingCard({ title, price, features, popular = false }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 ${
        popular 
          ? 'border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50' 
          : 'border-gray-200 bg-white'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-xl font-semibold">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-4xl font-bold text-indigo-600 mb-8">{price}</div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
        popular 
          ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg' 
          : 'bg-indigo-500 text-white hover:bg-indigo-600'
      }`}>
        Get Started
      </button>
    </motion.div>
  )
}