import { useEffect, useState } from 'react'
import TransitionLink from '../components/TransitionLink'
import SEO from '../components/SEO'

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-brand-orange/5 to-white">
      <SEO
        title="Página não encontrada"
        description="A página que você está procurando não foi encontrada."
        url="/404"
      />
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        ></div>
        <div
          className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-brand-orange-light/10 blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1
            className="text-[120px] font-black leading-none tracking-tighter text-brand-orange sm:text-[180px] lg:text-[240px]"
            style={{
              textShadow: '4px 4px 0px rgba(255, 107, 53, 0.2)',
              transform: `translate(${mousePosition.x / 10}px, ${mousePosition.y / 10}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="mb-4 text-center text-3xl font-black text-dark sm:text-4xl lg:text-5xl">
          Houston, temos um problema... 404
        </h2>

        <p className="mb-12 max-w-2xl text-center text-lg text-dark/70 sm:text-xl">
          Parece que você encontrou um bug no universo. Não se preocupe, nossos desenvolvedores
          estão trabalhando nisso... ou talvez estejam tomando café.
        </p>

        {/* Action Button */}
        <div>
          <TransitionLink
            href="/"
            className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light hover:scale-105"
          >
            <i className="fa-solid fa-home"></i>
            Voltar para home
            <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
          </TransitionLink>
        </div>
      </div>

      {/* Floating Code Snippets (Decorative) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-[10%] top-[20%] rotate-12 font-mono text-xs text-brand-orange">
          if (page.found) &#123;
        </div>
        <div className="absolute right-[15%] top-[30%] -rotate-6 font-mono text-xs text-brand-orange">
          return null;
        </div>
        <div className="absolute bottom-[25%] left-[20%] rotate-6 font-mono text-xs text-brand-orange">
          &#125; else &#123;
        </div>
        <div className="absolute bottom-[15%] right-[25%] -rotate-12 font-mono text-xs text-brand-orange">
          throw new Error('404');
        </div>
      </div>
    </div>
  )
}
