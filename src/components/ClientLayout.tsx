'use client'

import dynamic from 'next/dynamic'
import { TransitionProvider } from '../context/TransitionContext'
import ConditionalLayout from './ConditionalLayout'

const PageTransition = dynamic(() => import('./PageTransition'), { ssr: false })

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
