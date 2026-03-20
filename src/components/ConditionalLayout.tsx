import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const isContactPage = pathname === '/contato'
  const isCalculatorPage = pathname === '/calculadora'

  if (isContactPage || isCalculatorPage) {
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
