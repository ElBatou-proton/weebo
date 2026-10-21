interface NavigationProps {
  activeSection: string
  scrolled: boolean
  mobileMenuOpen: boolean
  onScrollToSection: (sectionId: string) => void
  onToggleMobileMenu: () => void
}

export function Navigation({
  activeSection,
  scrolled,
  mobileMenuOpen,
  onScrollToSection,
  onToggleMobileMenu,
}: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/weebo-logo-alt.png" alt="Weebo Logo" className="logo w-40" />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => onScrollToSection('home')}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === 'home'
                    ? 'text-purple-400 scale-105'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => onScrollToSection('about')}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === 'about'
                    ? 'text-purple-400 scale-105'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => onScrollToSection('services')}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === 'services'
                    ? 'text-purple-400 scale-105'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => onScrollToSection('portfolio')}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === 'portfolio'
                    ? 'text-purple-400 scale-105'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => onScrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                Contact Us
              </button>
            </div>
          </div>
          <button
            onClick={onToggleMobileMenu}
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
              onClick={() => onScrollToSection('home')}
              className={`block w-full text-left text-sm font-medium transition-colors ${
                activeSection === 'home' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onScrollToSection('about')}
              className={`block w-full text-left text-sm font-medium transition-colors ${
                activeSection === 'about' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onScrollToSection('services')}
              className={`block w-full text-left text-sm font-medium transition-colors ${
                activeSection === 'services' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => onScrollToSection('portfolio')}
              className={`block w-full text-left text-sm font-medium transition-colors ${
                activeSection === 'portfolio' ? 'text-purple-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => onScrollToSection('contact')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
