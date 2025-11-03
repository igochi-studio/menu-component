import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Video - Zoomed to crop black bars */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            transform: 'scale(1.35)',
            transformOrigin: 'center center'
          }}
        >
          <source src="/vibe-igochi.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Black Overlay - No Noise */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Top Text - Igochi Studio */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2">
        <p className="text-white text-base font-normal" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
          igochi studio
        </p>
      </div>

      {/* Bottom Left - Manifesto */}
      <div className="absolute bottom-[80px] left-[180px]">
        <p className="text-white text-base font-normal" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
          manifesto
        </p>
      </div>

      {/* Bottom Right - Contact */}
      <div className="absolute bottom-[80px] right-[180px]">
        <p className="text-white text-base font-normal text-right" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
          contact
        </p>
      </div>

      {/* Interactive Menu Component */}
      <InteractiveDotMenu />

      {/* Theme Toggle */}
      <ThemeToggle />
    </main>
  )
}
