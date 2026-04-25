"use client"

import { useState, useEffect, useRef } from "react"

export interface FlipStatItem {
  number: string
  label: string
}

interface FlippingStatProps {
  items: FlipStatItem[]
  /** Time in ms between flips. Default 2000 */
  interval?: number
  /** Size variant */
  size?: "large" | "default"
  /** Alignment */
  align?: "left" | "right"
}

export function FlippingStat({
  items,
  interval = 2000,
  size = "large",
  align = "left",
}: FlippingStatProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-flip on mount
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
        setIsFlipping(false)
      }, 300)
    }, interval)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [items.length, interval])

  const current = items[currentIndex]

  const numberClass =
    size === "large"
      ? "text-7xl lg:text-8xl xl:text-[7rem] font-display"
      : "text-7xl lg:text-8xl font-mono"

  return (
    <div
      className={`relative ${align === "right" ? "text-left" : ""}`}
      style={{ perspective: "600px" }}
    >
      <div
        className="transition-transform duration-300 ease-in-out origin-top"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipping ? "rotateX(90deg)" : "rotateX(0deg)",
          opacity: isFlipping ? 0 : 1,
        }}
      >
        {/* Dot + label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-[#A672F9] rounded-sm shrink-0" />
          <span className="text-base text-foreground/50 font-sans">
            {current.label}
          </span>
        </div>

        {/* Number */}
        <p
          className={`font-bold text-foreground leading-none tracking-tight ${numberClass}`}
        >
          {current.number}
        </p>
      </div>
    </div>
  )
}
