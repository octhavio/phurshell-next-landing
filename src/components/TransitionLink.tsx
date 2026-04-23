'use client'

import Link from 'next/link'
import { useTransition } from '../context/TransitionContext'
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
    // Se for link ancora (#), deixa o comportamento padrao
    if (href.startsWith('#')) {
      if (onClick) {
        onClick(e)
      }
      return
    }

    // Previne navegacao padrao sempre (exceto ancoras)
    e.preventDefault()

    // Chama o onClick passado como prop, se existir (ex: fechar menu mobile)
    if (onClick) {
      onClick(e)
    }

    // Inicia transicao
    startTransition(href)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
