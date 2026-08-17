import type { MetadataRoute } from 'next'
import { getBlogPostIndex } from '../src/lib/wordpress'

const BASE_URL = 'https://phurshell.com'

// Revalida junto com o blog, senao posts novos demoram a entrar no sitemap.
export const revalidate = 60

// Paginas fixas. As URLs levam barra final porque next.config usa trailingSlash.
const STATIC_ROUTES: [string, MetadataRoute.Sitemap[number]['changeFrequency'], number][] = [
  ['/', 'weekly', 1.0],
  ['/sobre/', 'monthly', 0.8],
  ['/contato/', 'monthly', 0.8],
  ['/calculadora/', 'monthly', 0.7],
  ['/servicos/', 'monthly', 0.9],
  ['/servicos/estrategia-de-produto-digital/', 'monthly', 0.8],
  ['/servicos/consultoria-para-startups/', 'monthly', 0.8],
  ['/servicos/design-de-produto-e-experiencia/', 'monthly', 0.8],
  ['/servicos/desenvolvimento-de-aplicativos/', 'monthly', 0.9],
  ['/servicos/desenvolvimento-web-e-saas/', 'monthly', 0.8],
  ['/servicos/engenharia-e-arquitetura-de-software/', 'monthly', 0.8],
  ['/servicos/cloud-e-devops/', 'monthly', 0.8],
  ['/servicos/qualidade-de-software-e-seguranca/', 'monthly', 0.8],
  ['/servicos/inteligencia-artificial-e-automacao/', 'monthly', 0.8],
  ['/servicos/blockchain-e-web3/', 'monthly', 0.8],
  ['/servicos/solucoes-digitais-para-negocios/', 'monthly', 0.8],
  ['/segmentos/', 'monthly', 0.8],
  ['/segmentos/healthtech/', 'monthly', 0.8],
  ['/segmentos/insurtech/', 'monthly', 0.8],
  ['/segmentos/social/', 'monthly', 0.8],
  ['/segmentos/fintech/', 'monthly', 0.8],
  ['/segmentos/varejo/', 'monthly', 0.8],
  ['/segmentos/educacao/', 'monthly', 0.8],
  ['/cases/', 'monthly', 0.8],
  ['/cases/psiapp/', 'monthly', 0.7],
  ['/cases/diag/', 'monthly', 0.7],
  ['/cases/autoday/', 'monthly', 0.7],
  ['/insights/', 'weekly', 0.8],
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()

  const staticEntries = STATIC_ROUTES.map(([path, changeFrequency, priority]) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))

  // Se o WordPress falhar, o sitemap sai so com as rotas fixas em vez de 500.
  let postEntries: MetadataRoute.Sitemap = []
  try {
    const index = await getBlogPostIndex(100)
    postEntries = index.map((post) => ({
      url: `${BASE_URL}/insights/${post.slug}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Sitemap: falha ao buscar slugs do WordPress:', error)
  }

  return [...staticEntries, ...postEntries]
}
