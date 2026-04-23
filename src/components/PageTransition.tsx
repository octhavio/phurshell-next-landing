'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTransition } from '../context/TransitionContext'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { isTransitioning, showLogo } = useTransition()

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1], // easeOutExpo - começa devagar e acelera
            }}
          >
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.05, 1],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.3, delay: 0.5 },
                    scale: {
                      duration: 1,
                      delay: 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <img
                    src="/logos/img-logo-icon.svg"
                    alt="Phurshell"
                    width={50}
                    height={50}
                    className="h-12 w-12"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  )
}
