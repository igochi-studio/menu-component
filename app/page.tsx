"use client"

import { InteractiveDotMenu } from "@/components/interactive-dot-menu"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    // Logo blur reveal: 0.3s delay + 1.4s blur = 1.7s
    // Background reveals with logo: 0.3s to 1.7s
    // Logo slides to left: 1.7s to 3.3s (1.6s duration)
    const timer = setTimeout(() => {
      setIntroComplete(true)
    }, 3300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Override body background */}
      <style jsx global>{`
        body {
          background: #0a0a0a !important;
        }
      `}</style>

      <main className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Intro Black Overlay */}
        <motion.div
          className="absolute inset-0 bg-[#0a0a0a] z-[100]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.3,
            ease: [0.32, 0, 0.67, 0]
          }}
          style={{ pointerEvents: 'none' }}
        />

      {/* Background Video - Zoomed to crop black bars */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.32, 0, 0.67, 0] }}
      >
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
      </motion.div>

      {/* Black Overlay - No Noise */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.32, 0, 0.67, 0] }}
      />

      {/* Top Text - Igochi Studio */}
      <motion.div
        className="absolute top-[100px] left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
        animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : -20, filter: introComplete ? "blur(0px)" : "blur(6px)" }}
        transition={{
          duration: 0.8,
          delay: 2.8,
          ease: [0.22, 1, 0.36, 1],
          filter: {
            duration: 0.9,
            delay: 2.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      >
        <p className="text-white text-base font-normal" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
          igochi studio
        </p>
      </motion.div>

      {/* Bottom Left - Manifesto */}
      <motion.div
        className="absolute bottom-[80px] left-[180px]"
        initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
        animate={{ opacity: introComplete ? 1 : 0, x: introComplete ? 0 : -20, filter: introComplete ? "blur(0px)" : "blur(6px)" }}
        transition={{
          duration: 0.8,
          delay: 2.9,
          ease: [0.22, 1, 0.36, 1],
          filter: {
            duration: 0.9,
            delay: 2.9,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      >
        <p className="text-white text-base font-normal" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
          manifesto
        </p>
      </motion.div>

      {/* Bottom Right - Contact */}
      <motion.div
        className="absolute bottom-[80px] right-[180px]"
        initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
        animate={{ opacity: introComplete ? 1 : 0, x: introComplete ? 0 : 20, filter: introComplete ? "blur(0px)" : "blur(6px)" }}
        transition={{
          duration: 0.8,
          delay: 3.0,
          ease: [0.22, 1, 0.36, 1],
          filter: {
            duration: 0.9,
            delay: 3.0,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      >
        <p className="text-white text-base font-normal text-right" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
          contact
        </p>
      </motion.div>

        {/* Interactive Menu Component */}
        <InteractiveDotMenu introComplete={introComplete} />
      </main>
    </>
  )
}
