import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ProductsPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Products</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Premium design resources for modern web projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "UI Kit Pro", price: "$99", category: "Components" },
              { name: "Animation Library", price: "$79", category: "Motion" },
              { name: "Design System", price: "$149", category: "System" },
              { name: "Icon Collection", price: "$49", category: "Icons" },
              { name: "Template Bundle", price: "$199", category: "Templates" },
              { name: "Color Palettes", price: "$29", category: "Design" },
            ].map((product) => (
              <div
                key={product.name}
                className="group p-6 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
              >
                <div className="aspect-square bg-foreground/10 rounded-xl mb-4 group-hover:bg-foreground/20 transition-colors" />
                <span className="text-sm text-foreground/50">{product.category}</span>
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-foreground/70 mb-4">
                  Professional-grade design resources crafted with attention to detail
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-80 transition-opacity">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
