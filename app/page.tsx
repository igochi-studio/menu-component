import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { TextToDot } from "@/components/text-to-dot"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <InteractiveDotMenu />
      <ThemeToggle />

      {/* Hero Section with TextToDot */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <TextToDot text="igochi" dotSize={80} scrollThreshold={200} />
          <h1 className="text-6xl font-bold text-foreground">
            Studio
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto px-4">
            Creating beautiful digital experiences with sophisticated interactions and modern design
          </p>
        </div>
      </section>

      {/* Content Section to enable scrolling */}
      <section className="min-h-screen bg-foreground/5 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            Scroll to see the magic
          </h2>
          <p className="text-lg text-foreground/70">
            Watch the text morph into a dot as you scroll down. The menu button on the right
            opens a radial menu with smooth animations, keyboard navigation, and interactive effects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-background rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Interactive Design</h3>
              <p className="text-foreground/60">
                Custom cursor, ripple effects, and smooth spring animations create an engaging experience.
              </p>
            </div>
            <div className="p-6 bg-background rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Keyboard Friendly</h3>
              <p className="text-foreground/60">
                Navigate with arrow keys, access submenus, and control everything from your keyboard.
              </p>
            </div>
            <div className="p-6 bg-background rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Glassmorphism</h3>
              <p className="text-foreground/60">
                Modern blur effects and gradient overlays with depth and sophistication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Beautiful Animations</h3>
                <p className="text-foreground/70">
                  Spring physics and smooth transitions powered by Framer Motion create natural, delightful interactions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⌨️</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Keyboard Navigation</h3>
                <p className="text-foreground/70">
                  Full keyboard support with arrow keys, Enter, and Escape for complete accessibility.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Interactive Effects</h3>
                <p className="text-foreground/70">
                  Custom cursor, ripple effects, and magnetic hover interactions that respond to your movements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
