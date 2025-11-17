export default function Footer() {
  return (
    <footer className="border-t border-primary/20 py-8 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium">© {new Date().getFullYear()} Demi Knoetze. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Instagram
            </a>
            <a href="mailto:hello@example.com" className="text-sm font-medium hover:opacity-80 transition-opacity">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
