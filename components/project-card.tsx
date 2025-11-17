import Link from "next/link"

interface Project {
  id: number
  name: string
  description: string
  image: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group space-y-4 cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-gray-200">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-tight text-gray-900">{project.name}</h3>
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">{project.description}</p>
      </div>
      <Link
        href={`/projects/${project.id}`}
        className="inline-block text-sm font-bold text-primary hover:opacity-80 transition-opacity"
      >
        See more →
      </Link>
    </div>
  )
}
