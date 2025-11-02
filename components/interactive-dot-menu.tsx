"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion"
import { useRouter } from "next/navigation"
import { useSound } from "@/hooks/use-sound"

interface MenuItem {
  id: string
  label: string
  href: string
  subItems?: { id: string; label: string; href: string }[]
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "work",
    label: "work",
    href: "/work",
    subItems: [
      { id: "projects", label: "projects", href: "/work/projects" },
      { id: "case-studies", label: "case studies", href: "/work/case-studies" },
    ]
  },
  {
    id: "lifestyle",
    label: "lifestyle",
    href: "/lifestyle",
    subItems: [
      { id: "blog", label: "blog", href: "/lifestyle/blog" },
      { id: "gallery", label: "gallery", href: "/lifestyle/gallery" },
    ]
  },
  {
    id: "shop",
    label: "shop",
    href: "/shop",
    subItems: [
      { id: "products", label: "products", href: "/shop/products" },
      { id: "cart", label: "cart", href: "/shop/cart" },
    ]
  },
]

interface Ripple {
  id: number
  x: number
  y: number
}

export function InteractiveDotMenu() {
  const router = useRouter()
  const { playClick, playOpen, playClose, playHover } = useSound()
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          setIsOpen(false)
          setShowSubmenu(false)
          break
        case "ArrowLeft":
          e.preventDefault()
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : MENU_ITEMS.length - 1))
          setShowSubmenu(false)
          break
        case "ArrowRight":
          e.preventDefault()
          setSelectedIndex((prev) => (prev < MENU_ITEMS.length - 1 ? prev + 1 : 0))
          setShowSubmenu(false)
          break
        case "ArrowDown":
          e.preventDefault()
          if (MENU_ITEMS[selectedIndex].subItems) {
            setShowSubmenu(true)
          }
          break
        case "ArrowUp":
          e.preventDefault()
          setShowSubmenu(false)
          break
        case "Enter":
          e.preventDefault()
          if (!showSubmenu) {
            router.push(MENU_ITEMS[selectedIndex].href)
            setIsOpen(false)
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, selectedIndex, showSubmenu, router])

  const createRipple = (x: number, y: number) => {
    const newRipple = { id: Date.now(), x, y }
    setRipples((prev) => [...prev, newRipple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 1000)
  }

  const handleToggle = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      createRipple(rect.left + rect.width / 2, rect.top + rect.height / 2)
    }
    if (!isOpen) {
      playOpen()
    } else {
      playClose()
    }
    setIsOpen(!isOpen)
    setShowSubmenu(false)
  }

  const handleItemClick = (item: MenuItem, index: number) => {
    playClick()
    setSelectedIndex(index)
    if (item.subItems && item.subItems.length > 0) {
      setShowSubmenu(!showSubmenu)
    } else {
      router.push(item.href)
      setIsOpen(false)
      setShowSubmenu(false)
    }
  }

  const handleItemHover = (index: number) => {
    if (selectedIndex !== index) {
      playHover()
    }
    setSelectedIndex(index)
  }

  const calculateRadialPosition = (index: number, total: number) => {
    const radius = 200
    const startAngle = -90
    const angleStep = 180 / (total + 1)
    const angle = startAngle + angleStep * (index + 1)
    const radian = (angle * Math.PI) / 180

    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    open: (i: number) => {
      const pos = calculateRadialPosition(i, MENU_ITEMS.length)
      return {
        x: pos.x,
        y: pos.y,
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 300,
          delay: i * 0.1,
        },
      }
    },
  }

  const submenuVariants = {
    closed: { opacity: 0, y: -10, scale: 0.95 },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
  }

  const dotVariants = {
    closed: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    open: {
      opacity: 0,
      scale: 0,
      rotate: 180,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  }

  const backslashVariants = {
    closed: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    open: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        delay: 0.05,
      },
    },
  }

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 rounded-full border-2 border-foreground/50 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed w-0 h-0 rounded-full border-2 border-foreground/30 pointer-events-none z-40"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Background blur overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
            onClick={() => {
              setIsOpen(false)
              setShowSubmenu(false)
            }}
          />
        )}
      </AnimatePresence>

      {/* Menu items with radial layout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {MENU_ITEMS.map((item, index) => {
              const isSelected = selectedIndex === index
              return (
                <div key={item.id} className="relative">
                  <motion.button
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-2xl font-medium cursor-pointer group ${
                      isSelected
                        ? "text-foreground scale-110"
                        : "text-foreground/60"
                    }`}
                    onClick={() => handleItemClick(item, index)}
                    onMouseEnter={() => handleItemHover(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Navigate to ${item.label}`}
                    role="menuitem"
                  >
                    <span className="relative">
                      {item.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-foreground/0 via-foreground to-foreground/0 origin-center"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isSelected ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>

                    {/* Glassmorphism hover effect */}
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {showSubmenu && isSelected && item.subItems && (
                      <motion.div
                        variants={submenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-xl border border-foreground/10 rounded-2xl p-4 shadow-2xl min-w-[200px]"
                        style={{
                          transformOrigin: "top center",
                        }}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <motion.button
                            key={subItem.id}
                            onClick={() => {
                              router.push(subItem.href)
                              setIsOpen(false)
                              setShowSubmenu(false)
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                            whileHover={{ x: 4 }}
                            role="menuitem"
                          >
                            {subItem.label}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu button - fixed on right side */}
      <motion.button
        ref={buttonRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleToggle}
        className="fixed right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground/20 rounded-full z-[60]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        role="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glassmorphism background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-foreground/5 to-foreground/10 backdrop-blur-sm"
          animate={{
            scale: isHovered || isOpen ? 1 : 0,
            opacity: isHovered || isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Dot */}
        <motion.div
          variants={dotVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute w-3 h-3 bg-foreground rounded-full"
        />

        {/* Backslash */}
        <motion.div
          variants={backslashVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="absolute text-foreground font-bold text-xl leading-none"
        >
          \
        </motion.div>

        {/* Hover label */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="absolute right-full mr-4 text-sm text-foreground whitespace-nowrap bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-foreground/10"
            >
              menu
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Keyboard hint */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 text-xs text-foreground/40 z-50 flex gap-4"
          >
            <span>ESC to close</span>
            <span>← → to navigate</span>
            <span>↓ for submenu</span>
            <span>ENTER to select</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
