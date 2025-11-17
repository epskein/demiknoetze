export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-0 px-4 sm:px-6 lg:px-8 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Hero Image - Left side, made larger and extended to align with about section */}
          <div className="flex justify-center md:justify-start -ml-4 md:ml-0">
            <div className="w-full max-w-2xl">
              <img src="/images/demi-header-2.png" alt="Demi Knoetze" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Hero Text - Right side */}
          <div className="space-y-8 pb-20">
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase opacity-90">Digital Marketing Creative</p>
              <h1 className="font-heading text-6xl tracking-tight leading-tight md:text-9xl">HELLO! I&#39;M DEMI </h1>
            </div>
            <p className="text-lg leading-relaxed opacity-95 max-w-md">
              I create work that feels alive, intentional, and impossible to ignore. Let's turn your ideas into
              experiences that make people feel something.
            </p>
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-white text-primary rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
