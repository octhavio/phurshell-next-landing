import { Metadata } from 'next'
import { Suspense } from 'react'
import InsightsFilter from '../../src/components/InsightsFilter'
import ContactCTA from '../../src/components/ContactCTA'

import { getCategories } from '../../src/lib/wordpress'

// ISR: Revalida a cada 60 segundos
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Insights | Blog sobre Desenvolvimento de Apps e Tecnologia',
  description: 'Artigos sobre tecnologia, desenvolvimento de software e inovação digital',
  alternates: { canonical: 'https://phurshell.com/insights/' },
  openGraph: {
    title: 'Insights | Phurshell',
    description: 'Artigos sobre tecnologia, desenvolvimento de software e inovação digital',
    url: 'https://phurshell.com/insights',
    type: 'website',
  },
}

export default async function Insights() {
  const categories = await getCategories()

  return (
    <div className="bg-white">
      {/* Filter and Posts */}
      <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center"><i className="fa-solid fa-spinner fa-spin text-4xl text-brand-orange"></i></div>}>
        <InsightsFilter categories={categories} />
      </Suspense>

      <ContactCTA />
    </div>
  )
}
