'use client'
import { motion } from 'framer-motion'

export default function ServiceCard({ 
  title, 
  icon: IconComponent, 
  desc = 'Reliable and efficient trucking solutions.', 
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
    >
      {/* Centered Icon */}
      {IconComponent && (
        <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-indigo-200 transition-all duration-300">
          <IconComponent size={40} className="text-indigo-600" />
        </div>
      )}
      
      <h3 className="font-semibold text-xl mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  )
}