import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
