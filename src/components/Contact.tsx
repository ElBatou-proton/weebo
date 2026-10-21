import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')

    try {
      // For now, just simulate a successful submission
      // In production, you would send this to your backend/API
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg">
            Ready to start your project? Let's talk!
          </p>
        </div>
        <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 relative z-10">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            {formStatus === 'success' && (
              <div className="text-green-400 text-center py-2">
                Message sent successfully!
              </div>
            )}
            {formStatus === 'error' && (
              <div className="text-red-400 text-center py-2">
                Failed to send message. Please try again.
              </div>
            )}
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
