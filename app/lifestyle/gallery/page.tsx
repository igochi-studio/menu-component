import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function GalleryPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Gallery</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Visual inspiration and moments from the studio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="group aspect-square bg-foreground/10 rounded-2xl hover:bg-foreground/20 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
