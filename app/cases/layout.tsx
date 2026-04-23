import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases | Phurshell',
  description: 'Conheca alguns dos projetos que desenvolvemos do zero, desde a concepcao da ideia ate o lancamento e crescimento no mercado.',
}

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
