import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Phurshell para discutir seu próximo projeto de tecnologia. Desenvolvimento de apps mobile, web e soluções customizadas.',
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
