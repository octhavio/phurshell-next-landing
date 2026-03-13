'use client'

import Link from 'next/link'
import { useTransition } from './TransitionContext'
import { MouseEvent } from 'react'

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  [key: string]: any
}

export default function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  const { startTransition } = useTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Se for link âncora (#), deixa o comportamento padrão
    if (href.startsWith('#')) {
      if (onClick) {
        onClick(e)
      }
      return
    }

    // Previne navegação padrão sempre (exceto âncoras)
    e.preventDefault()

    // Chama o onClick passado como prop, se existir (ex: fechar menu mobile)
    if (onClick) {
      onClick(e)
    }

    // Inicia transição
    startTransition(href)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
