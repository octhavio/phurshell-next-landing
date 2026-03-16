import { Outlet } from 'react-router-dom'
import { TransitionProvider } from './context/TransitionContext'
import ConditionalLayout from './components/ConditionalLayout'
import PageTransition from './components/PageTransition'

export default function App() {
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
