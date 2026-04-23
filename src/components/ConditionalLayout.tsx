'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isContactPage = pathname === '/contato'
  const isCalculatorPage = pathname === '/calculadora'
  const isPropostaPage = pathname.startsWith('/propostas')

  if (isContactPage || isCalculatorPage || isPropostaPage) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
