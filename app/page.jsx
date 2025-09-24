import Navigation from "../components/navigation"
import HeroSection from "../components/hero-section"
import RolesSection from "../components/roles-section"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <RolesSection />
      <Footer />
    </div>
  )
}
