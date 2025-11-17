export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-5xl md:text-6xl tracking-tight mb-12 text-center uppercase">Let's Connect</h2>

        <div className="space-y-12">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Phone</h3>
              <a href="tel:+27123456789" className="text-lg hover:opacity-80 transition-opacity">
                +27 (123) 456-789
              </a>
            </div>

            <div className="space-y-3 text-center">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Email</h3>
              <a href="mailto:hello@example.com" className="text-lg hover:opacity-80 transition-opacity">
                hello@example.com
              </a>
            </div>

            <div className="space-y-3 text-center">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Instagram</h3>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-80 transition-opacity"
              >
                @yourinstagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold">Send me a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/90 border-0 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/90 border-0 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-white/90 border-0 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full bg-white/90 border-0 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-primary rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
