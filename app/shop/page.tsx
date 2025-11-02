import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function ShopPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Shop</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Curated design resources and digital products
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link
              href="/shop/products"
              className="group p-8 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
            >
              <h2 className="text-3xl font-semibold mb-3 group-hover:text-foreground/80">
                Products
              </h2>
              <p className="text-foreground/60">
                Premium design templates and component libraries
              </p>
            </Link>

            <Link
              href="/shop/cart"
              className="group p-8 bg-foreground/5 rounded-2xl hover:bg-foreground/10 transition-colors"
            >
              <h2 className="text-3xl font-semibold mb-3 group-hover:text-foreground/80">
                Cart
              </h2>
              <p className="text-foreground/60">
                View your selected items and complete your purchase
              </p>
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "UI Kit Pro", price: "$99" },
                { name: "Animation Library", price: "$79" },
                { name: "Design System", price: "$149" },
                { name: "Icon Collection", price: "$49" },
              ].map((product) => (
                <div
                  key={product.name}
                  className="p-6 bg-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors"
                >
                  <div className="aspect-video bg-foreground/10 rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-foreground/70 mb-3">
                    Professional-grade design resources for modern web projects
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <button className="px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-80 transition-opacity">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
