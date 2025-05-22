"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

type StaggerChildrenProps = {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
  threshold?: number
}

export default function StaggerChildren({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
