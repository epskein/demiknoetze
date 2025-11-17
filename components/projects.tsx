"use client"

import ProjectCard from "./project-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Projects() {
  const { elementRef, isVisible } = useScrollAnimation()

  const projects = [
    {
      id: 1,
      name: "Maré Swimwear",
      description: "Sustainable swim brand designed to reconnect people with the ocean.",
      image: "/images/mare-main.jpg",
    },
    {
      id: 2,
      name: "Mzansi Blend",
      description: "Locally inspired café concept with warmth and purpose.",
      image: "/images/mzansi-main.jpg",
    },
    {
      id: 3,
      name: "O'Well Water",
      description: "Lifestyle hydration brand merging wellness and sustainability.",
      image: "/images/owell-main.jpg",
    },
    {
      id: 4,
      name: "Trigz Girl Dinner",
      description: "Playful campaign inspired by viral Girl Dinner movement.",
      image: "/images/trigs-main.jpg",
    },
    {
      id: 5,
      name: "Creators' Corner",
      description: "Creative stationery store and collaborative workspace.",
      image: "/images/creators-main.jpg",
    },
    {
      id: 6,
      name: "YUMMEEE! Sweets",
      description: "Nostalgic candy brand celebrating discontinued sweets.",
      image: "/images/yummy-main.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div ref={elementRef} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-heading text-5xl md:text-6xl tracking-tight mb-20 text-primary uppercase">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
