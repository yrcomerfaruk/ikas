'use client'

import React, { useRef } from 'react'

const CategoriesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categories = [
    { name: 'Elektronik', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&q=80', badge: null },
    { name: 'Giyim', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&q=80', badge: null },
    { name: 'Ev & Yaşam', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80', badge: null },
    { name: 'Spor', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&q=80', badge: null },
    { name: 'Kozmetik', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80', badge: null },
    { name: 'Kitap', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&q=80', badge: null },
    { name: 'Çanta', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=80', badge: null },
    { name: 'Saat', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80', badge: null },
    { name: 'Aksesuar', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&q=80', badge: null },
    { name: 'Yiyecek', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80', badge: null }
  ]

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

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Kategoriler</h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-1"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-1"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex flex-col items-center min-w-[80px] flex-shrink-0"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2 shadow-md">
                {/* Image */}
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                
                {/* Badge */}
                {category.badge && (
                  <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {category.badge}
                  </div>
                )}
              </div>
              <span className="text-gray-800 text-xs font-medium text-center leading-tight">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
