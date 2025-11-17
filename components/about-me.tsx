"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getAssetPath } from "@/lib/asset-path"

export default function AboutMe() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div ref={elementRef} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* About Me Heading Image, made much larger */}
        <div className="mb-20 flex justify-start">
          <img src={getAssetPath("/images/about-me.png")} alt="about me" className="h-40 object-contain" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase"></p>
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-gray-700">
                I'm a digital marketing and visual communication creative who leads with instinct and emotion. I see
                creativity as connection, a way to turn ideas into experiences that make people feel something. My work
                is driven by curiosity, shaped by contrast, and grounded in authenticity.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                I'm a sister, a daughter, and a designer who grew up in a quiet, traditional space but learned to see
                the world through possibility. I create for the thinkers, the dreamers, and the ones who see beauty in
                the unconventional.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                My vision is to keep pushing boundaries, to make work that feels alive, intentional, and impossible to
                ignore.
              </p>
            </div>
          </div>

          {/* Portrait Image, made larger and snapped to right edge */}
          <div className="flex items-center justify-end -mr-4 md:mr-0">
            {/* Placeholder for existing text content */}
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-48 h-full flex items-start pointer-events-none">
        <img
          src={getAssetPath("/images/demi-header.png")}
          alt="Demi Knoetze"
          className="w-auto object-contain pointer-events-auto h-[900px]"
        />
      </div>
    </section>
  )
}
