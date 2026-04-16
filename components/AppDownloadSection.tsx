'use client'

import React from 'react'

const AppDownloadSection = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white mb-8 lg:mb-0 lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              ikas Bazaar Uygulamasını İndir
            </h2>
            <p className="text-lg mb-6 text-purple-100">
              Mobil uygulama ile alışverişin keyfini çıkar! Özel fırsatlar ve hızlı teslimat avantajları sizi bekliyor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.43-3.06-.35-4.27-3.96-4.11-10.46.22-12.72 1.08-.56 2.22-.88 3.39-.88.93 0 1.7.21 2.41.56.51.25.96.6 1.34 1.03.22.25.41.53.56.83.18-.08.36-.16.54-.23 1.25-.49 2.58-.35 3.52.38.3.23.56.52.76.85-2.5 1.5-2.07 5.25.54 6.64-.52 1.3-1.22 2.5-2.09 3.52M12.03 7.25c-.15-2.23 1.66-4.07 3.9-4.25.21 2.36-1.92 4.41-3.9 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownloadSection
