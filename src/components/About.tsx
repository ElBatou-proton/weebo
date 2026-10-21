export function About() {
  return (
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
  )
}
