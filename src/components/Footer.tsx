export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-purple-500/20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-4 md:mb-0">
            <img src="/weebo-logo-alt.png" alt="Weebo Logo" className="logo w-40" />
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {currentYear} Weebo. All rights reserved. Built with ❤️ in Bolivia
        </div>
      </div>
    </footer>
  )
}
