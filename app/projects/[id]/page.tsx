import { notFound } from 'next/navigation'
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { getAssetPath } from "@/lib/asset-path"

export const dynamic = "force-static"

const projectsData = [
  {
    id: 1,
    name: "Maré Swimwear",
    tagline: "Sustainable swim and lifestyle brand",
    description:
      "Maré Swimwear is a sustainable swim and lifestyle brand designed to reconnect people with the ocean. The brand focuses on eco-conscious fashion made from recycled materials to reduce ocean pollution, with a portion of proceeds going toward beach clean-up initiatives. The visual direction combines coastal minimalism with a trendy, youthful edge, making the pieces versatile enough to move effortlessly from beach to street. The aesthetic blends soft neutrals and sun-washed tones with organic textures, capturing the rhythm of the tide and the warmth of sunlight.",
    fullDescription: [
      "Maré represents a commitment to sustainable fashion and ocean conservation. Every piece is carefully crafted from recycled materials, combining functionality with environmental responsibility.",
      "The brand identity reflects coastal minimalism with modern sensibilities. Soft neutrals, sun-washed tones, and organic textures create a visual language that speaks to both the ocean and contemporary fashion.",
      "Through strategic partnerships with beach clean-up initiatives, Maré ensures that every purchase contributes to ocean preservation. The brand creates a movement where fashion becomes activism.",
    ],
    image: "/images/mare-main.jpg",
    gallery: [
      "/images/mare-1.jpg",
      "/images/mare-2.jpg",
    ],
  },
  {
    id: 2,
    name: "Mzansi Blend Coffee Bar",
    tagline: "Locally inspired café concept",
    description:
      "Mzanzi Blend Coffee Bar is a locally inspired café concept that brings warmth, personality, and purpose to every cup. Rooted in South African street culture, it's designed as a casual sidewalk coffee spot where customers feel at home, reflected in its slogan, \"Who doesn't love a pavement special?\" The brand merges community and compassion by donating a portion of proceeds to a local animal shelter, blending caffeine and kindness into one experience. I developed the full brand identity, designed the logo, created social media content, and directed both a lifestyle photoshoot and a video advert to capture the cozy, authentic tone of the brand. The aesthetic balances hand-drawn charm with minimal, earthy design, modern yet heartfelt.",
    fullDescription: [
      "Mzansi Blend captures the essence of South African café culture with warmth and authenticity. Every element, from the logo to the packaging, tells a story of community and connection.",
      "The brand identity blends hand-drawn charm with minimalist design principles. Earth tones, organic typography, and playful illustrations create a visual language that feels both modern and nostalgic.",
      "By supporting local animal shelters, Mzansi Blend transforms a simple coffee purchase into an act of kindness. The campaign resonates with socially conscious consumers who want their spending to matter.",
    ],
    image: "/images/mzansi-main.jpg",
    gallery: [
      "/images/mzansi-1.jpg",
      "/images/mzansi-2.jpg",
    ],
  },
  {
    id: 3,
    name: "O'Well Water",
    tagline: "Lifestyle hydration brand",
    description:
      "O'Well Water is a lifestyle hydration brand that merges wellness, sustainability, and modern design. The concept introduces a smart, refillable water bottle with a built-in filtration system, created for people who value movement and mindful living. Designed for hikes, workouts, and everyday routines, the brand extends beyond hydration into a full wellness identity. I designed the logo, developed social media content, created product mock-ups, and built the visual language to reflect balance, freshness, and flow. The aesthetic captures a balance between purity and adventure with crisp tones of blue, white, and green inspired by mountains, air, and water.",
    fullDescription: [
      "O'Well represents the intersection of wellness, sustainability, and innovation. The smart water bottle combines cutting-edge filtration technology with thoughtful design for the conscious consumer.",
      "The brand identity is built on three pillars: purity, adventure, and balance. Crisp blues, clean whites, and fresh greens create a visual palette that inspires movement and mindfulness.",
      "From product design to social content, every touchpoint reinforces the message of wellness and sustainability. The brand speaks to individuals who see hydration as part of a holistic lifestyle.",
    ],
    image: "/images/owell-main.jpg",
    gallery: [
      "/images/owell-1.jpg",
      "/images/owell-2.jpg",
    ],
  },
  {
    id: 4,
    name: "Trigz Girl Dinner Campaign",
    tagline: "Viral trend-driven campaign",
    description:
      "For Trigz, I developed a playful, trend-driven campaign inspired by the viral Girl Dinner movement, reimagined through the lens of South African snack culture. The goal was to position Trigz as a bold, relatable, and social-first brand that fits seamlessly into the everyday lives of young women. I led the full creative direction, from concept and moodboard development to shoot styling, art direction, and editing. The campaign captured a Pinterest-inspired, filmy sleepover vibe, warm lighting, candid laughter, and intimate, relatable energy. The creative intent was to make Trigz feel like a staple at every South African girl's sleepover, blending authenticity, trend culture, and effortless fun. I used Lightroom and CapCut to edit both the photo and video content, ensuring a cohesive visual style and tone across the full social rollout.",
    fullDescription: [
      "The Girl Dinner campaign captures the essence of youthful, carefree moments. By reimagining the viral trend through South African snacking culture, Trigz connects with a generation that values authenticity and fun.",
      "Creative direction focused on capturing intimate, relatable moments. Warm lighting, candid laughter, and Pinterest-inspired aesthetics create an aspirational yet achievable vibe that resonates with young women.",
      "Through strategic content creation and consistent visual styling across platforms, the campaign positioned Trigz as more than a snack brand—it became a cultural moment. Social rollout included photos, videos, and interactive content that sparked engagement and connection.",
    ],
    image: "/images/trigs-main.jpg",
    gallery: [
      "/images/trigs-1.jpg",
      "/images/trigs-2.jpg",
    ],
  },
  {
    id: 5,
    name: "Creators' Corner",
    tagline: "Creative stationery store and workspace",
    description:
      "Creators Corner is a brand I conceptualized and built entirely from scratch. It's a creative stationery store and collaborative workspace designed for artists, designers, and creators to explore their ideas freely. The brand combines retail and community by offering both stationery products and an inspiring environment for creative growth. Members can access free tools, attend workshops, and collaborate with others in a bright, artistic space. I developed the logo, designed all brand assets, and created a range of mock-ups including mugs, pencil cases, and stationery products. The aesthetic is fun, bold, and playful with bubbly typography, soft gradients, and a retro-inspired color palette that captures creativity and joy.",
    fullDescription: [
      "Creators' Corner is more than a stationery store—it's a creative community hub. The brand brings together artists, designers, and makers in a space designed for inspiration and collaboration.",
      "The visual identity is vibrant, playful, and distinctly creative. Bubbly typography, soft gradients, and retro-inspired colors create a cheerful aesthetic that makes every customer feel part of an artistic movement.",
      "From product design to workspace branding, every element reflects the core mission: to empower creatives and foster a community where ideas flourish. The brand celebrates creativity in all its forms.",
    ],
    image: "/images/creators-main.jpg",
    gallery: [
      "/images/creators-1.jpg",
      "/images/creators-2.jpg",
    ],
  },
  {
    id: 6,
    name: "YUMMEEE! Sweets",
    tagline: "Nostalgic candy brand",
    description:
      "YUMMEEE! SWEETS is a nostalgic candy brand that brings back discontinued sweets and chocolate favorites from the past. The concept was inspired by childhood memories of treats that no longer exist, reimagined through playful design and modern branding. I created the full brand identity, packaging, and digital content to reflect a vibrant pink-hued world that merges retro candy-store charm with a contemporary, Instagram-ready twist. Every design element aims to spark nostalgia while appealing to a new generation of sweet lovers. I developed the logo, packaging mock-ups, and social content to communicate a joyful, youthful tone that celebrates fun, color, and memory.",
    fullDescription: [
      "YUMMEEE! SWEETS taps into the power of nostalgia. By bringing back discontinued favorites, the brand creates an emotional connection that resonates across generations, from those who remember the originals to new customers discovering them for the first time.",
      "The visual identity is vibrant, playful, and unapologetically joyful. A dominant pink color palette, retro typography, and playful illustrations create an Instagram-worthy aesthetic that appeals to both millennials and Gen Z.",
      "Every packaging and content piece celebrates the joy of sweets and the memories they evoke. The brand succeeds by being both nostalgic and contemporary, honoring the past while speaking to modern consumers.",
    ],
    image: "/images/yummy-main.jpg",
    gallery: [
      "/images/yummy-1.jpg",
      "/images/yummy-2.jpg",
    ],
  },
]

interface PageProps {
  params: Promise<{ id: string }>
}

export const generateStaticParams = () => {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const project = projectsData.find((p) => p.id === Number.parseInt(id))

  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-white text-gray-900 pt-20">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/#projects"
            className="text-sm text-primary font-bold hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            ← Back to projects
          </Link>
        </div>

        {/* Project Header */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6 mb-12">
            <div>
              <p className="text-sm text-primary font-bold uppercase tracking-widest mb-2">Project</p>
              <h1 className="font-heading text-5xl md:text-6xl tracking-tight uppercase">{project.name}</h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">{project.tagline}</p>
          </div>

          {/* Main Project Image */}
          <div className="rounded-lg overflow-hidden bg-gray-200 aspect-video mb-16">
            <img src={getAssetPath(project.image || "/placeholder.svg")} alt={project.name} className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Project Description */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Project Details</h2>
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Project Type</h3>
                <p className="text-gray-700">Brand Development</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Visual Identity</li>
                  <li>Creative Direction</li>
                  <li>Content Creation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
          <div className="flex flex-col gap-8">
            {project.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={getAssetPath(image || "/placeholder.svg")}
                  alt={`${project.name} gallery ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Interested in working together?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Let's create something amazing. Get in touch to discuss your next project.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
