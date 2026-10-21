import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <Navigation
        activeSection={activeSection}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        onScrollToSection={scrollToSection}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <Hero onScrollToSection={scrollToSection} />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
