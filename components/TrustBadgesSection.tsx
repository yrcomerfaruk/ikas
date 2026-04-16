'use client'

import React from 'react'

const TrustBadgesSection = () => {
  const badges = [
    { id: 1, title: "Güvenli Ödeme", desc: "256-bit SSL", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
    { id: 2, title: "Çoklu Ödeme", desc: "Kart, Havale, Kapıda", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /> },
    { id: 3, title: "Hızlı Teslimat", desc: "1-3 İş Günü", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { id: 4, title: "Müşteri Memnuniyeti", desc: "7 Gün İade", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
  ]

  // Sonsuz döngü için listeyi iki kez render ediyoruz
  const allBadges = [...badges, ...badges];

  return (
    <section className="py-6 bg-white border-y border-gray-100 overflow-hidden">
      <div className="relative flex">
        {/* Kayan İçerik Grubu */}
        <div className="flex whitespace-nowrap animate-marquee">
          {allBadges.map((item, index) => (
            <div key={index} className="flex items-center px-12 space-x-4">
              {/* Siyah İkon */}
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              {/* Yazı Grubu */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                <span className="font-bold text-gray-900 uppercase tracking-wider text-sm">
                  {item.title}
                </span>
                <span className="hidden md:inline text-gray-400">|</span>
                <span className="text-xs text-gray-500 font-medium">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadgesSection