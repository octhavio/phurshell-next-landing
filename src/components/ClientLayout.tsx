'use client'

import { TransitionProvider } from '../context/TransitionContext'
import PageTransition from './PageTransition'
import ConditionalLayout from './ConditionalLayout'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <PageTransition>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </PageTransition>
    </TransitionProvider>
  )
}
