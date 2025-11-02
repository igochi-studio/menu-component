"use client"

import { useState, useEffect } from "react"

interface TextToDotProps {
  text?: string
  dotSize?: number
  scrollThreshold?: number
}

export function TextToDot({ text = "work", dotSize = 120, scrollThreshold = 300 }: TextToDotProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(window.scrollY / scrollThreshold, 1)
      setScrollProgress(progress)
      setIsSticky(window.scrollY > scrollThreshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollThreshold])

  // Interpolate font size from 72px to 0px
  const fontSize = 72 * (1 - scrollProgress)

  // Interpolate opacity of text
  const textOpacity = 1 - scrollProgress

  // Interpolate dot opacity
  const dotOpacity = scrollProgress

  return (
    <div
      className={`flex items-center justify-center transition-all duration-300 ${
        isSticky ? "fixed top-8 left-8 z-50" : "relative"
      }`}
      style={{
        width: isSticky ? dotSize : "auto",
        height: isSticky ? dotSize : "auto",
      }}
    >
      {/* Text that morphs */}
      <div
        className="absolute font-bold text-black whitespace-nowrap transition-opacity duration-300"
        style={{
          fontSize: `${fontSize}px`,
          opacity: textOpacity,
          letterSpacing: "-2px",
        }}
      >
        {text}
      </div>

      {/* Dot that appears */}
      <div
        className="absolute rounded-full bg-black transition-opacity duration-300"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          opacity: dotOpacity,
        }}
      />
    </div>
  )
}
