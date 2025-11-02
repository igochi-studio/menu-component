import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Projects</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Our latest work in digital design and development
          </p>

          <div className="grid grid-cols-1 gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-video bg-foreground/10 rounded-2xl mb-6 group-hover:bg-foreground/20 transition-colors" />
                <h2 className="text-3xl font-semibold mb-3">Project Title {item}</h2>
                <p className="text-foreground/70 mb-4">
                  A comprehensive digital experience that combines cutting-edge technology with thoughtful design to create
                  meaningful user interactions.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">Design</span>
                  <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">Development</span>
                  <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">Animation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
