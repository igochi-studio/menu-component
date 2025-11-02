import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CaseStudiesPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Case Studies</h1>
          <p className="text-xl text-foreground/70 mb-12">
            In-depth looks at our problem-solving process
          </p>

          <div className="space-y-16">
            {[
              "E-commerce Redesign",
              "Mobile App Innovation",
              "Brand Identity System"
            ].map((title) => (
              <div key={title} className="group">
                <div className="aspect-video bg-foreground/10 rounded-2xl mb-6 group-hover:bg-foreground/20 transition-colors" />
                <h2 className="text-3xl font-semibold mb-3">{title}</h2>
                <p className="text-foreground/70 mb-6">
                  Detailed exploration of our design thinking, technical implementation, and the measurable
                  impact on business goals and user satisfaction.
                </p>
                <div className="grid grid-cols-3 gap-8 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/50 mb-2">Challenge</h3>
                    <p className="text-foreground/70">Complex user flows needed simplification</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/50 mb-2">Solution</h3>
                    <p className="text-foreground/70">Data-driven redesign with user testing</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground/50 mb-2">Impact</h3>
                    <p className="text-foreground/70">45% increase in conversion rate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
