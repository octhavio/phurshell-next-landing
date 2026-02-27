'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface TransitionContextType {
  startTransition: (url: string) => void
  isTransitioning: boolean
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startTransition = useCallback(
    (url: string) => {
      setIsTransitioning(true)

      // Navega após a tela branca cobrir 100%
      setTimeout(() => {
        router.push(url)
      }, 500)

      // Finaliza a transição
      setTimeout(() => {
        setIsTransitioning(false)
      }, 1300)
    },
    [router]
  )

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('useTransition must be used within TransitionProvider')
  }
  return context
}
