export function Portfolio() {
  const projects = [
    { title: 'E-Commerce Platform', category: 'Web Development', emoji: '🛒' },
    { title: 'Healthcare App', category: 'Mobile App', emoji: '🏥' },
    { title: 'Corporate Website', category: 'Web Design', emoji: '🏢' },
    { title: 'AI Chatbot', category: 'AI Integration', emoji: '💬' },
    { title: 'Restaurant Management', category: 'Web Application', emoji: '🍽️' },
    { title: 'Fitness Tracker', category: 'Mobile App', emoji: '💪' },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A glimpse of the projects we've brought to life
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
  )
}
