'use client'

import Link from 'next/link'
import { useTransition } from './TransitionContext'
import { MouseEvent } from 'react'

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export default function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const { startTransition } = useTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Se for link âncora (#), deixa o comportamento padrão
    if (href.startsWith('#')) {
      return
    }

    // Previne navegação padrão
    e.preventDefault()

    // Inicia transição
    startTransition(href)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
