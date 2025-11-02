import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CartPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-foreground mb-6">Shopping Cart</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Review your items and complete your purchase
          </p>

          <div className="space-y-6 mb-12">
            {[
              { name: "UI Kit Pro", price: 99, quantity: 1 },
              { name: "Animation Library", price: 79, quantity: 2 },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-6 p-6 bg-foreground/5 rounded-2xl"
              >
                <div className="w-24 h-24 bg-foreground/10 rounded-lg flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                  <p className="text-foreground/60">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">${item.price * item.quantity}</p>
                  <button className="text-sm text-foreground/50 hover:text-foreground/80 mt-2">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-foreground/5 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">Subtotal</span>
              <span className="text-2xl font-bold">$257</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg">Tax</span>
              <span className="text-2xl font-bold">$25.70</span>
            </div>
            <div className="border-t border-foreground/10 pt-6 flex justify-between items-center mb-6">
              <span className="text-2xl font-bold">Total</span>
              <span className="text-3xl font-bold">$282.70</span>
            </div>
            <button className="w-full py-4 bg-foreground text-background rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
