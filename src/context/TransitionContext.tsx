import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface TransitionContextType {
  startTransition: (url: string) => void
  isTransitioning: boolean
  showLogo: boolean
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showLogo, setShowLogo] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const [targetUrl, setTargetUrl] = useState<string | null>(null)

  // Monitora mudanças de rota e aguarda o carregamento completo
  useEffect(() => {
    if (!isNavigating) return

    // Normaliza URLs removendo trailing slash para comparação
    const normalizeUrl = (url: string) => url.replace(/\/$/, '') || '/'

    // Verifica se chegamos na URL de destino
    if (targetUrl && normalizeUrl(pathname) === normalizeUrl(targetUrl)) {
      // Aguarda o DOMContentLoaded e recursos da página
      const checkPageLoad = () => {
        if (document.readyState === 'complete') {
          // Etapa 1: Esconde o logo primeiro
          setShowLogo(false)

          // Etapa 2: Aguarda o logo desaparecer (0.3s) + pausa (0.4s) = 0.7s
          setTimeout(() => {
            // Etapa 3: Remove a overlay (ela vai subir com sua animação de 0.5s)
            setIsTransitioning(false)
            setIsNavigating(false)
            setTargetUrl(null)
          }, 700) // 300ms logo + 400ms pausa
        } else {
          // Se ainda não está completo, aguarda o evento load
          window.addEventListener('load', () => {
            setShowLogo(false)
            setTimeout(() => {
              setIsTransitioning(false)
              setIsNavigating(false)
              setTargetUrl(null)
            }, 700) // 300ms logo + 400ms pausa
          }, { once: true })
        }
      }

      checkPageLoad()
    }
  }, [pathname, targetUrl, isNavigating])

  const startTransition = useCallback(
    (url: string) => {
      setIsTransitioning(true)
      setShowLogo(true) // Mostra o logo quando inicia
      setIsNavigating(true)
      setTargetUrl(url)

      // Navega após a tela branca cobrir 100%
      setTimeout(() => {
        navigate(url)
      }, 500)
    },
    [navigate]
  )

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning, showLogo }}>
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
