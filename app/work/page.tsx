import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Work</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Explore our portfolio of creative projects and case studies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/work/projects"
              className="group p-8 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
            >
              <h2 className="text-3xl font-semibold mb-3 group-hover:text-foreground/80">
                Projects
              </h2>
              <p className="text-foreground/60">
                Browse through our collection of innovative digital experiences
              </p>
            </Link>

            <Link
              href="/work/case-studies"
              className="group p-8 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
            >
              <h2 className="text-3xl font-semibold mb-3 group-hover:text-foreground/80">
                Case Studies
              </h2>
              <p className="text-foreground/60">
                Deep dives into our process and problem-solving approaches
              </p>
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors"
                >
                  <h3 className="text-2xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-foreground/70">
                    A sophisticated digital experience crafted with attention to detail and user-centered design principles.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
