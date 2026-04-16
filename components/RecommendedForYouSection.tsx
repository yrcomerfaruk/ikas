'use client'

import React, { useRef } from 'react'

const RecommendedForYouSection = () => {
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
  const products = [
    {
      id: 1,
      name: 'Basic T-Shirt',
      brand: 'Paen',
      price: '8.999 TL',
      rating: 4.3,
      reviews: 1250,
      image: 'product/7.png',
      badge: 'ÇOK SATAN'
    },
    {
      id: 2,
      name: 'Dyson V15 Detect',
      brand: 'Dyson',
      price: '12.999 TL',
      rating: 4.7,
      reviews: 890,
      image: 'product/3.png',
      badge: null
    },
    {
      id: 3,
      name: 'MacBook Air M3',
      brand: 'Apple',
      price: '34.999 TL',
      rating: 4.9,
      reviews: 2340,
      image: 'product/4.png',
      badge: 'YENİ'
    },
    {
      id: 4,
      name: 'PlayStation 5',
      brand: 'Sony',
      price: '18.999 TL',
      rating: 4.8,
      reviews: 5670,
      image: 'product/5.png',
      badge: null
    },
    {
      id: 5,
      name: 'Canon EOS R50',
      brand: 'Canon',
      price: '15.999 TL',
      rating: 4.6,
      reviews: 450,
      image: 'product/6.png',
      badge: null
    }
  ]

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L14.09 8.26L21 9.27L16.5 13.14L17.82 20L12 16.77L6.18 20L7.5 13.14L3 9.27L9.91 8.26L12 2Z"/>
          </svg>
        )
      } else {
        stars.push(
          <svg key={i} className="w-3 h-3 text-gray-300 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L14.09 8.26L21 9.27L16.5 13.14L17.82 20L12 16.77L6.18 20L7.5 13.14L3 9.27L9.91 8.26L12 2Z"/>
          </svg>
        )
      }
    }
    return stars
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Sizin İçin Önerilenler</h2>
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

        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
        >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-48 bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-52">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 rounded text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded text-xs font-semibold">
                    {product.rating}/5
                  </div>
                  <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-3">
                  <div className="text-base font-bold text-gray-900 mb-1">{product.price}</div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">{product.brand}</p>
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{product.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-sm text-gray-500 flex items-center">
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

export default RecommendedForYouSection
