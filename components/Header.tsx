'use client'

import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    'Kadın', 'Erkek', 'Ayakkabı', 'Çanta', 'Kozmetik', 
    'Aksesuar', 'Spor', 'Outdoor', 'Çocuk', 'Ev', 
    'Yaşam', 'Elektronik', 'Kampanyalar', 'Markalar'
  ]

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        ikas'ın eşsiz markaları, ikas hızıyla ikas bazaar'da
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="bazaar"
                className="h-20 w-auto"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Kategori, marka ve ürün ara..."
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:border-gray placeholder-gray-600 text-gray-600"
                />
                <svg
                  className="absolute right-4 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-black hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Hesabım</span>
              </button>
              <button className="flex items-center space-x-1 text-black hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Sepetim</span>
              </button>
              <button className="flex items-center space-x-1 text-black hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Favorilerim</span>
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/logo.jpg"
                  alt="bazaar"
                  className="h-20 w-auto"
                />
              </div>

              {/* User Actions */}
              <div className="flex items-center space-x-4">
                <button className="text-black hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className="text-black hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
                <button className="text-black hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Kategori, marka ve ürün ara..."
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:border-gray placeholder-gray-600 text-gray-600"
                />
                <svg
                  className="absolute right-4 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center space-x-6 py-3 overflow-x-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="text-gray-700 hover:text-gray-900 whitespace-nowrap text-sm font-medium"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Categories */}
            <div className="lg:hidden">
              <div className="flex items-center space-x-4 py-3 overflow-x-auto">
                {categories.slice(0, 10).map((category, index) => (
                  <button
                    key={index}
                    className="text-gray-700 hover:text-gray-900 whitespace-nowrap text-sm font-medium"
                  >
                    {category}
                  </button>
                ))}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-gray-900 whitespace-nowrap text-sm font-medium"
                >
                  Daha fazla
                </button>
              </div>

              {/* Mobile Menu Dropdown */}
              {isMenuOpen && (
                <div className="border-t border-gray-200 py-3">
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(10).map((category, index) => (
                      <button
                        key={index + 10}
                        className="text-gray-700 hover:text-gray-900 text-sm font-medium text-left py-1"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
