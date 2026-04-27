'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection({
  title,
  subtitle,
  imageUrl,
  cta1Link = '/',
  cta2Link = '/',
  ctaText1 = 'Get Started Free',
  ctaText2 = 'View Services'
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* ✅ Optimized Background Image */}
      <Image
        src={imageUrl}
        alt="Truck driving on highway representing professional dispatch services"
        fill
        priority
        quality={60}
        sizes="100vw"
        className="object-cover"
      />

      {/* ✅ Single lightweight overlay (replaces multiple heavy layers) */}
      <div className="absolute inset-0 bg-[#02122F]/70" />

      {/* ✅ Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight text-[#F0ECDD]">
          {title}
        </h1>

        <p className="mb-8 text-lg md:text-xl text-[#8BA3C5] max-w-3xl mx-auto">
          {subtitle}
        </p>

        {/* ✅ Accessible CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <Link
            href={cta1Link}
            className="px-8 py-3 rounded-xl font-semibold text-lg shadow-lg inline-block"
            style={{
              background: 'linear-gradient(to right, #8BA3C5, #F0ECDD)',
              color: '#02122F'
            }}
          >
            {ctaText1}
          </Link>

          <Link
            href={cta2Link}
            className="px-8 py-3 rounded-xl font-semibold text-lg border inline-block backdrop-blur-sm"
            style={{
              borderColor: 'rgba(139, 163, 197, 0.6)',
              color: '#F0ECDD'
            }}
          >
            {ctaText2}
          </Link>

        </div>

        {/* ✅ Trust Indicators */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[#8BA3C5]">
          <span>Trusted by 500+ Drivers</span>
          <span>24/7 Dispatch Support</span>
          <span>Premium Loads Only</span>
        </div>

      </div>

    </section>
  )
}