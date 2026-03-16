export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Phurshell',
    url: 'https://phurshell.com.br',
    logo: 'https://phurshell.com.br/logos/img-navbar-logo-dark.svg',
    description:
      'Fábrica de aplicativos especializada em desenvolvimento mobile e web sob medida. Transformamos ideias em produtos digitais de alta performance.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Brasil',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'pt-BR',
    },
    sameAs: [
      'https://www.linkedin.com/company/phurshell',
      'https://www.instagram.com/phurshell',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Phurshell',
    url: 'https://phurshell.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://phurshell.com.br/insights?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Desenvolvimento de Software',
    provider: {
      '@type': 'Organization',
      name: 'Phurshell',
      url: 'https://phurshell.com.br',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Desenvolvimento',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desenvolvimento de Apps Mobile',
            description: 'Desenvolvimento de aplicativos nativos e cross-platform para iOS e Android',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desenvolvimento Web',
            description: 'Desenvolvimento de aplicações web, dashboards e plataformas SaaS',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
