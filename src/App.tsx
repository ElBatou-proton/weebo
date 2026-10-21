import { useState, useEffect } from 'react'

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
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white tracking-tight">weebo</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === 'home' ? 'text-purple-400 scale-105' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === 'about' ? 'text-purple-400 scale-105' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === 'services' ? 'text-purple-400 scale-105' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === 'portfolio' ? 'text-purple-400 scale-105' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left text-sm font-medium transition-colors ${
                  activeSection === 'home' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left text-sm font-medium transition-colors ${
                  activeSection === 'about' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left text-sm font-medium transition-colors ${
                  activeSection === 'services' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`block w-full text-left text-sm font-medium transition-colors ${
                  activeSection === 'portfolio' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Building the Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-[length:300%_300%] animate-gradient">
              AI-Powered Web Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are web developers from Bolivia with over 15 years of experience, leveraging the power of AI to create innovative digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
            >
              Start Your Project
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Weebo</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Passionate developers from Bolivia bringing global expertise to every project
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="text-purple-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🇧🇴</div>
              <h3 className="text-xl font-semibold text-white mb-2">From Bolivia</h3>
              <p className="text-gray-400">
                Proud web developers from Bolivia, bringing our unique perspective and passion to every project we undertake.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="text-purple-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-400">
                We harness the power of artificial intelligence to build smarter, faster, and more efficient web solutions.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="text-purple-400 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">15+ Years Experience</h3>
              <p className="text-gray-400">
                With over a decade and a half of experience, we've seen it all and solved it all in web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              No project is too small or too big for us
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="text-purple-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm">
                Custom websites and web applications built with modern technologies.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="text-purple-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-lg font-semibold text-white mb-2">Mobile Apps</h3>
              <p className="text-gray-400 text-sm">
                Cross-platform mobile applications that work seamlessly on any device.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="text-purple-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm">
                Beautiful, intuitive designs that enhance user experience and engagement.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <div className="text-purple-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-gray-400 text-sm">
                Leverage AI to automate processes and create intelligent solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A glimpse of the projects we've brought to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'E-Commerce Platform', category: 'Web Development', emoji: '🛒' },
              { title: 'Healthcare App', category: 'Mobile App', emoji: '🏥' },
              { title: 'Corporate Website', category: 'Web Design', emoji: '🏢' },
              { title: 'AI Chatbot', category: 'AI Integration', emoji: '💬' },
              { title: 'Restaurant Management', category: 'Web Application', emoji: '🍽️' },
              { title: 'Fitness Tracker', category: 'Mobile App', emoji: '💪' },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.emoji}</span>
                </div>
                <div className="p-6">
                  <span className="text-purple-400 text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold text-white mt-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300 text-lg">
              Ready to start your project? Let's talk!
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-purple-500/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">weebo</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2024 Weebo. All rights reserved. Built with ❤️ in Bolivia
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
