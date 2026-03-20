import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { TransitionProvider } from './context/TransitionContext'
import ConditionalLayout from './components/ConditionalLayout'
import PageTransition from './components/PageTransition'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <TransitionProvider>
      <PageTransition>
        <ConditionalLayout>
          <Outlet />
        </ConditionalLayout>
      </PageTransition>
    </TransitionProvider>
  )
}
