'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  onComplete?: () => void
}

const AnimatedCounter = ({ 
  from, 
  to, 
  duration = 2, 
  delay = 0, 
  prefix = '',
  suffix = '', 
  className = '',
  onComplete 
}: AnimatedCounterProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    let animationControls: any
    
    const timer = setTimeout(() => {
      setIsVisible(true)
      animationControls = animate(count, to, {
        duration,
        ease: [0.25, 0.25, 0.25, 0.75],
        onComplete
      })
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      if (animationControls) {
        animationControls.stop()
      }
    }
  }, [count, to, duration, delay, onComplete])

  return (
    <motion.span 
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: delay }}
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

export default AnimatedCounter