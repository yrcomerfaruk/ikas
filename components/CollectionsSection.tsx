'use client'

import React, { useRef } from 'react'

const CollectionsSection = () => {
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
  const collections = [
    {
      title: 'Elektronik Fırsatları',
      subtitle: 'Yeni Sezon Ürünleri',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
      bgColor: 'bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400'
    },
    {
      title: 'Giyim & Aksesuar',
      subtitle: 'Trend Koleksiyonlar',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      bgColor: 'bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400'
    },
    {
      title: 'Ev & Yaşam',
      subtitle: 'Dekorasyon Ürünleri',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
      bgColor: 'bg-gradient-to-br from-green-400 via-yellow-400 to-orange-400'
    },
    {
      title: 'Spor & Outdoor',
      subtitle: 'Aktif Yaşam Ürünleri',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
      bgColor: 'bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400'
    },
    {
      title: 'Kozmetik & Kişisel Bakım',
      subtitle: 'Güzellik Ürünleri',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
      bgColor: 'bg-gradient-to-br from-purple-400 via-pink-400 to-red-400'
    },
    {
      title: 'Kitap & Eğitim',
      subtitle: 'Okuma Zamanı',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
      bgColor: 'bg-gradient-to-br from-yellow-400 via-green-400 to-blue-400'
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-sm text-gray-500 mb-1">Size Özel</div>
            <h2 className="text-2xl font-bold text-gray-900">Favori Koleksiyonları Keşfet!</h2>
          </div>
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

        {/* Collections Grid */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
            {collections.map((collection, index) => (
              <div
                key={index}
                className={`relative h-80 w-72 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer ${collection.bgColor}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={collection.image} alt={collection.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white font-bold text-lg">{collection.title}</h3>
                  {collection.subtitle && (
                    <p className="text-white/80 text-sm">{collection.subtitle}</p>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-sm text-gray-500 flex items-center">
              TÜMÜNÜ İNCELE
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
      </div>
    </section>
  )
}

export default CollectionsSection
