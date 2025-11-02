import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Blog</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Thoughts, insights, and stories from the studio
          </p>

          <div className="space-y-8">
            {[
              { title: "The Future of Web Design", date: "Nov 1, 2025", readTime: "8 min" },
              { title: "Crafting Delightful Animations", date: "Oct 28, 2025", readTime: "6 min" },
              { title: "Design Systems That Scale", date: "Oct 25, 2025", readTime: "10 min" },
              { title: "Typography in Digital Spaces", date: "Oct 22, 2025", readTime: "5 min" },
            ].map((post) => (
              <article
                key={post.title}
                className="p-8 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-3xl font-semibold group-hover:text-foreground/80">
                    {post.title}
                  </h2>
                  <span className="text-sm text-foreground/50">{post.readTime} read</span>
                </div>
                <p className="text-foreground/70 mb-4">
                  Exploring new approaches and best practices in modern digital design, with practical
                  insights you can apply to your own projects.
                </p>
                <div className="flex items-center gap-4 text-sm text-foreground/50">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>Design</span>
                  <span>•</span>
                  <span>Development</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
