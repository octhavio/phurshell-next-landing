import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases | Phurshell',
  description: 'Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até o lançamento e crescimento no mercado.',
}

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
