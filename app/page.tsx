import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import CategoriesSection from '@/components/CategoriesSection'
import DailyDealsSection from '@/components/DailyDealsSection'
import TopBrandsSection from '@/components/TopBrandsSection'
import RecommendedForYouSection from '@/components/RecommendedForYouSection'
import CollectionsSection from '@/components/CollectionsSection'
import AppDownloadSection from '@/components/AppDownloadSection'
import TrustBadgesSection from '@/components/TrustBadgesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <DailyDealsSection />
        <TopBrandsSection />
        <RecommendedForYouSection />
        <CollectionsSection />
        <AppDownloadSection />
        <TrustBadgesSection />
      </main>
      <Footer />
    </div>
  );
}
