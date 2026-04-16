'use client'

import React, { useRef } from 'react'

const DailyDealsSection = () => {
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
  const deals = [
    {
      name: 'PAEN Classic Orta Boy Valiz',
      brand: 'Paen',
      image: 'product/1.png',
      originalPrice: '5.999 TL',
      discountPrice: '4.999 TL',
      discount: '%17',
      rating: 4.5,
      reviews: 1250
    },
    {
      name: 'Dynavit® Multi Daily',
      brand: 'Dynavit',
      image: 'product/2.png',
      originalPrice: '999 TL',
      discountPrice: '499 TL',
      discount: '%49',
      rating: 4.8,
      reviews: 2340
    },
    {
      name: 'Palermo Cow Print Chocolate Brown',
      brand: 'Wunder - Puma',
      image: 'product/3.png',
      originalPrice: '4.299 TL',
      discountPrice: '2.899 TL',
      discount: '%33',
      rating: 4.6,
      reviews: 890
    },
    {
      name: 'AMİNO ASİT PAKETİ',
      brand: 'Protein Oceon',
      image: 'product/4.png',
      originalPrice: '999 TL',
      discountPrice: '499 TL',
      discount: '%45',
      rating: 4.9,
      reviews: 1560
    },
    {
      name: 'Supreme x Nike Running Hat',
      brand: 'Wunder - Nike',
      image: 'product/5.png',
      originalPrice: '1.999 TL',
      discountPrice: '999 TL',
      discount: '%23',
      rating: 4.7,
      reviews: 670
    },
    {
      name: 'Jordan Brooklyn Fleece Hoodie',
      brand: 'Wunder - Jordan',
      image: 'product/6.png',
      originalPrice: '34.999 TL',
      discountPrice: '29.999 TL',
      discount: '%14',
      rating: 4.8,
      reviews: 3420
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
            <h2 className="text-xl font-bold text-gray-900">Günün Fırsatları</h2>
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
            {deals.map((deal, index) => (
              <div key={index} className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-56">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 rounded text-xs font-semibold">
                    {deal.discount}
                  </div>
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 rounded text-xs font-semibold">
                    {deal.rating}/5
                  </div>
                  <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-3">
                  <div className="flex items-baseline space-x-2 mb-1">
                    <span className="text-base font-bold text-gray-900">{deal.discountPrice}</span>
                    <span className="text-xs text-gray-500 line-through">{deal.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">{deal.brand}</p>
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{deal.name}</h3>
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

export default DailyDealsSection
