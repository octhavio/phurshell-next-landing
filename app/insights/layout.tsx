import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights - Artigos sobre Tecnologia e Inovação | Phurshell',
  description:
    'Explore artigos, guias e tendências sobre desenvolvimento de software, design, healthtech e inovação tecnológica. Conteúdo especializado pela equipe Phurshell.',
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
