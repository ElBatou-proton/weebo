export function Services() {
  return (
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
  )
}
