"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Skills() {
  const { elementRef, isVisible } = useScrollAnimation()

  const skillsData = [
    {
      category: "SOFTWARE",
      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva",
        "Adobe Lightroom",
        "Shopify",
        "CapCut",
        "Meta Business Suite",
      ],
    },
    {
      category: "SKILLS/SERVICES",
      skills: [
        "Brand Development",
        "Creative Direction",
        "Campaign Strategy",
        "Visual Identity Design",
        "Content Creation",
        "Social Media Marketing",
        "Photography & Editing",
        "Styling & Production",
        "Web Design (Shopify)",
        "Copywriting & Storytelling",
        "Video Editing",
      ],
    },
    {
      category: "STRENGTHS",
      skills: [
        "Strategic Creativity",
        "Strong Aesthetic Vision",
        "Conceptual Thinking",
        "Leadership & Collaboration",
        "Emotional Intelligence",
        "Innovation & Adaptability",
        "Authentic Communication",
        "Editorial Eye",
      ],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div ref={elementRef} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-5xl md:text-6xl tracking-tight mb-20 uppercase">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {skillsData.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-6">
              <div className="inline-block bg-white text-primary px-6 py-3 rounded-full">
                <h3 className="text-sm font-bold tracking-widest uppercase">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-4">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-base">
                    <span className="text-white mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
