import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proposta',
  robots: { index: false, follow: false },
}

export default function PropostasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
