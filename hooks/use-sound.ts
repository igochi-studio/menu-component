"use client"

import { useCallback, useEffect, useState } from "react"

export function useSound() {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      setAudioContext(ctx)
      return () => ctx.close()
    }
  }, [])

  const playTone = useCallback(
    (frequency: number, duration: number = 100, type: OscillatorType = "sine") => {
      if (!audioContext) return

      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = type

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration / 1000)
    },
    [audioContext]
  )

  const playClick = useCallback(() => {
    playTone(800, 50, "sine")
  }, [playTone])

  const playOpen = useCallback(() => {
    if (!audioContext) return
    playTone(400, 100, "sine")
    setTimeout(() => playTone(600, 100, "sine"), 50)
    setTimeout(() => playTone(800, 100, "sine"), 100)
  }, [audioContext, playTone])

  const playClose = useCallback(() => {
    if (!audioContext) return
    playTone(800, 100, "sine")
    setTimeout(() => playTone(600, 100, "sine"), 50)
    setTimeout(() => playTone(400, 100, "sine"), 100)
  }, [audioContext, playTone])

  const playHover = useCallback(() => {
    playTone(600, 30, "sine")
  }, [playTone])

  return { playClick, playOpen, playClose, playHover }
}
