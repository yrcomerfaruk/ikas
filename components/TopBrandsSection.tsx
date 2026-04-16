'use client'

import React, { useRef } from 'react'

const TopBrandsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  const brands = [
    { name: 'Paen', image: '/brands/paen.png' },
    { name: 'Protein Ocean', image: '/brands/pro.png' },
    { name: 'Deriden', image: '/brands/deriden.png' },
    { name: 'Eczacıbaşı Dynavit', image: '/brands/dyn.png' },
    { name: 'Konfor', image: '/brands/konfor.jpg' },
    { name: 'Miniso', image: '/brands/miniso.png' },
    { name: 'Wunder', image: '/brands/wunder.png' },
    { name: 'Faruk Sağın', image: '/brands/frk.png' },
    { name: 'Kozvit', image: '/brands/koz.png' },
    { name: 'Mekap', image: '/brands/mekap.jpg' }
  ]

  return (
    <section className="py-10 bg-gray-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Popüler Markalar</h2>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="p-2 bg-white rounded-full shadow-sm transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => scroll('right')} className="p-2 bg-white rounded-full shadow-sm transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Brand List (No Cards, Rounded Logos) */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 flex flex-col items-center group cursor-pointer"
            >
              {/* Yuvarlak Logo Alanı */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-sm border border-gray-100 mb-3">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Marka İsmi */}
              <span className="text-xs font-semibold text-gray-600 tracking-tight text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="flex justify-end mt-4">
          <a href="#" className="ttext-sm text-gray-500 flex items-center">
            TÜMÜNÜ GÖR
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TopBrandsSection