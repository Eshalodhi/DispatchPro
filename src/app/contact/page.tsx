'use client'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { useState } from 'react'

export default function Contact() {

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const form = e.currentTarget

  const formData = {
    company: (form.company as HTMLInputElement).value,
    trucks: (form.trucks as HTMLInputElement).value,
    email: (form.email as HTMLInputElement).value,
    message: (form.message as HTMLTextAreaElement).value
  }

  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  })

  const data = await res.json()

  if (data.success) {
    alert("Submitted successfully")
    form.reset()
  }
}

  return (
    <main className="bg-[#02122F] text-white min-h-screen">

      <Navbar />
      
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - FORM */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F0ECDD]">
              Get Your Free Quote
            </h1>

            <p className="text-lg text-[#8BA3C5] mb-10">
              Tell us about your fleet and we'll create a custom dispatch plan
            </p>
            
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 bg-[rgba(35,53,77,0.65)] backdrop-blur-xl p-8 rounded-3xl border border-[rgba(139,163,197,0.25)] shadow-xl"
            >

              {/* Company */}
              <div>
                <label className="block text-sm mb-2 text-[#8BA3C5]">
                  Company Name
                </label>
                <input
                  name="company"
                  type="text"
                  required
                  className="w-full p-4 rounded-xl bg-[#02122F] border border-[rgba(139,163,197,0.3)] text-white focus:ring-2 focus:ring-[#8BA3C5] outline-none"
                />
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="trucks"
                  type="text"
                  placeholder="Number of Trucks"
                  required
                  className="w-full p-4 rounded-xl bg-[#02122F] border border-[rgba(139,163,197,0.3)] text-white focus:ring-2 focus:ring-[#8BA3C5] outline-none"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-4 rounded-xl bg-[#02122F] border border-[rgba(139,163,197,0.3)] text-white focus:ring-2 focus:ring-[#8BA3C5] outline-none"
                />
              </div>

              {/* Message */}
              <textarea 
                name="message"
                rows={5} 
                placeholder="Tell us about your needs..."
                required
                className="w-full p-4 rounded-xl bg-[#02122F] border border-[rgba(139,163,197,0.3)] text-white focus:ring-2 focus:ring-[#8BA3C5] outline-none"
              />

              {/* Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Get Free Quote"}
              </button>

              {/* Success Message */}
              {success && (
                <p className="text-green-400 text-center mt-2">
                  ✅ Form submitted successfully!
                </p>
              )}

            </form>
          </div>
          
          {/* RIGHT - CONTACT INFO */}
          <div className="space-y-10">

            <div className="p-6 rounded-2xl bg-[rgba(35,53,77,0.65)] border border-[rgba(139,163,197,0.25)]">
              <h3 className="text-xl font-semibold mb-2 text-[#8BA3C5]">
                📞 Call Us
              </h3>
              <p className="text-2xl font-bold text-[#F0ECDD]">
                (555) 123-DISP
              </p>
              <p className="text-[#8BA3C5] text-sm">
                24/7 Dispatch Available
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[rgba(35,53,77,0.65)] border border-[rgba(139,163,197,0.25)]">
              <h3 className="text-xl font-semibold mb-2 text-[#8BA3C5]">
                📧 Email
              </h3>
              <p className="text-[#F0ECDD] font-medium">
                dispatch@yourcompany.com
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[rgba(35,53,77,0.65)] border border-[rgba(139,163,197,0.25)]">
              <h3 className="text-xl font-semibold mb-2 text-[#8BA3C5]">
                📍 Location
              </h3>
              <p className="text-[#F0ECDD]">
                123 Trucking Ave<br />Dallas, TX 75201
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}