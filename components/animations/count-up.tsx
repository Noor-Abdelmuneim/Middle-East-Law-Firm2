"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

type CountUpProps = {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  once?: boolean
  className?: string
  threshold?: number
}

export default function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  once = true,
  className = "",
  threshold = 0.1,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  })
  const countingRef = useRef(false)
  const frameRef = useRef(0)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (inView && !countingRef.current) {
      countingRef.current = true
      startTimeRef.current = Date.now()

      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTimeRef.current
        const progress = Math.min(elapsed / (duration * 1000), 1)

        // Easing function for smoother animation
        const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

        setCount(Math.floor(easedProgress * end))

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate)
        } else {
          countingRef.current = false
        }
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
