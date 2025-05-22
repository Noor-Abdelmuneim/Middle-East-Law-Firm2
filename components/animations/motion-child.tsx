"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type MotionChildProps = {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export default function MotionChild({ children, className = "", direction = "up", duration = 0.5 }: MotionChildProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={childVariants} className={className}>
      {children}
    </motion.div>
  )
}
