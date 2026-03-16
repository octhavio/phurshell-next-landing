import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços | Phurshell',
  description:
    'Soluções completas em desenvolvimento de software. Mobile, web, APIs e muito mais para transformar sua ideia em realidade.',
}

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
