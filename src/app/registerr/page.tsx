import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export default function Register() {
  return (
    <main>
      <Navbar />
      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Driver Registration</h1>
        <form className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Full Name" />
          <input className="w-full p-3 border rounded" placeholder="Phone" />
          <input className="w-full p-3 border rounded" placeholder="License Number" />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Register</button>
        </form>
      </div>
      <Footer />
    </main>
  )
}