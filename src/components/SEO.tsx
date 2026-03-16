import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://phurshell.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.png`
const DEFAULT_DESCRIPTION = 'Somos uma fabrica de aplicativos especializada em desenvolvimento mobile e web sob medida para Android, iOS e multiplataforma.'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  publishedTime,
  author,
}: SEOProps) {
  const fullTitle = title ? `${title} | Phurshell` : 'Phurshell - Desenvolvimento de Apps Sob Medida'
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Phurshell" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  )
}
