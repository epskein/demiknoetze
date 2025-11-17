import ProjectCard from "./project-card"

export default function Projects() {
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
      image: "/coffee-shop-cafe-branding.jpg",
    },
    {
      id: 3,
      name: "O'Well Water",
      description: "Lifestyle hydration brand merging wellness and sustainability.",
      image: "/water-bottle-wellness-brand.jpg",
    },
    {
      id: 4,
      name: "Trigz Girl Dinner",
      description: "Playful campaign inspired by viral Girl Dinner movement.",
      image: "/snack-food-campaign-girl-dinner.jpg",
    },
    {
      id: 5,
      name: "Creators' Corner",
      description: "Creative stationery store and collaborative workspace.",
      image: "/stationery-store-creative-workspace.jpg",
    },
    {
      id: 6,
      name: "YUMMEEE! Sweets",
      description: "Nostalgic candy brand celebrating discontinued sweets.",
      image: "/candy-sweets-nostalgic-retro.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
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
