import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phurshell.com.br'

  // Páginas estáticas
  const routes = [
    '',
    '/servicos/mobile-app-development',
    '/cases',
    '/cases/psiapp',
    '/insights',
    '/contato',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/cases/psiapp' ? 0.7 : 0.8,
  }))

  // Aqui você pode adicionar rotas dinâmicas futuramente
  // Por exemplo, posts de blog ou cases individuais
  // const posts = await getPosts()
  // const postRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/insights/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [...routes]
}
