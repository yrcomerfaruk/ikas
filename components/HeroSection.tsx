'use client'

import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'slider/1.png',
      title: 'TÜM ÜRÜNLERDE',
      discount: '%20 İNDİRİM',
      brands: 'Wunder'
    },
    {
      image: 'slider/2.png',
      title: 'HAFTANIN FIRSATI',
      discount: '%30 İNDİRİM',
      brands: 'Wunder'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative bg-gray-900 text-white">
      {/* Main Banner */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center max-w-2xl">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                {slides[currentSlide].title}
              </h1>
              <div className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-4">
                {slides[currentSlide].discount}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button className="bg-white text-gray-900 px-4 py-1.5 rounded-full font-medium text-xs">
                  ALIŞVERİŞE BAŞLA
                </button>
                <button className="border-2 border-white text-white px-4 py-1.5 rounded-full font-medium text-xs">
                  KAMPANYALARI GÖR
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thin line below slider */}
      <div className="w-full h-px bg-gray-200"></div>
    </section>
  )
}

export default HeroSection
