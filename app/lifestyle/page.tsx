import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function LifestylePage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Lifestyle</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Stories, insights, and inspiration from our creative journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link
              href="/lifestyle/blog"
              className="group p-8 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
            >
              <h2 className="text-3xl font-semibold mb-3 group-hover:text-foreground/80">
                Blog
              </h2>
              <p className="text-foreground/60">
                Thoughts on design, creativity, and digital craftsmanship
              </p>
            </Link>

            <Link
              href="/lifestyle/gallery"
              className="group p-8 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
            >
              <h2 className="text-3xl font-semibold mb-3 group-hover:text-foreground/80">
                Gallery
              </h2>
              <p className="text-foreground/60">
                Visual inspiration and behind-the-scenes moments
              </p>
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
            <div className="space-y-6">
              {["The Art of Minimalism", "Creating Meaningful Interactions", "Design Philosophy"].map((title) => (
                <div
                  key={title}
                  className="p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors"
                >
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-foreground/70 mb-3">
                    Exploring the intersection of design, technology, and human experience.
                  </p>
                  <span className="text-sm text-foreground/50">5 min read</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
