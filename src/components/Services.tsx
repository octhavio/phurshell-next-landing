export default function Services() {
  const services = [
    {
      icon: 'fa-jelly fa-mobile',
      title: 'Desenvolvimento Mobile',
      description:
        'Aplicativos nativos e cross-platform para iOS e Android. React Native, Flutter e desenvolvimento nativo para performance máxima.',
      features: ['React Native', 'Flutter', 'iOS/Android nativo', 'Publicação nas stores'],
      color: 'brand-orange',
    },
    {
      icon: 'fa-jelly fa-desktop',
      title: 'Sistemas Web',
      description:
        'Aplicações web modernas e responsivas. Next.js, React, dashboards administrativos e plataformas SaaS completas.',
      features: ['Next.js/React', 'PWA', 'Dashboards', 'Plataformas SaaS'],
      color: 'brand-orange',
    },
    {
      icon: 'fa-jelly fa-database',
      title: 'Arquitetura & Backend',
      description:
        'APIs escaláveis, microsserviços e arquiteturas cloud-native. Node.js, Python, bancos de dados relacionais e NoSQL.',
      features: ['REST/GraphQL APIs', 'Microsserviços', 'Cloud (AWS/GCP)', 'DevOps'],
      color: 'brand-orange',
    },
    {
      icon: 'fa-jelly fa-link',
      title: 'Integrações & APIs',
      description:
        'Conectamos seus sistemas com APIs de terceiros, pagamentos, ERPs e ferramentas corporativas. Automação e sincronização de dados.',
      features: ['APIs REST', 'Webhooks', 'Gateways de pagamento', 'Integrações ERP'],
      color: 'brand-orange',
    },
  ]

  return (
    <section id="servicos" className="relative bg-gray-50 py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
            O que fazemos
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-brand-orange"></div>
          <p className="text-lg leading-relaxed text-dark/60">
            Oferecemos soluções completas de desenvolvimento, desde a concepção até a entrega e
            manutenção contínua
          </p>
        </div>

        {/* Services Grid - Irregular & Asymmetric */}
        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-6 lg:grid-cols-12">
          {/* Service 1 - Spans 2 columns, slightly rotated */}
          <div className="group relative overflow-visible rounded-button border border-dark/5 bg-dark/5 p-8 backdrop-blur-sm transition-smooth hover:border-dark/10 hover:bg-dark/10 md:col-span-3 lg:col-span-5 lg:-rotate-1 lg:transform">
            {/* Gradient Blur */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-button bg-brand-orange opacity-0 blur-3xl transition-opacity group-hover:opacity-10"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 text-brand-orange transition-smooth group-hover:scale-110">
              <i className={`${services[0].icon} fa-2x`}></i>
            </div>
            <h3 className="mb-3 text-2xl font-black text-dark">{services[0].title}</h3>
            <p className="mb-6 leading-relaxed text-dark/60">{services[0].description}</p>
            <ul className="space-y-2">
              {services[0].features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-dark/70">
                  <i className="fa-jelly fa-circle-check mr-2 flex-shrink-0 text-brand-orange"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 2 - Offset and overlapping */}
          <div className="group relative z-10 overflow-visible rounded-button border border-dark/5 bg-dark/5 p-8 backdrop-blur-sm transition-smooth hover:border-dark/10 hover:bg-dark/10 md:col-span-3 lg:col-span-5 lg:col-start-6 lg:-mt-12 lg:rotate-2 lg:transform">
            {/* Gradient Blur */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-button bg-brand-orange opacity-0 blur-3xl transition-opacity group-hover:opacity-10"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 text-brand-orange transition-smooth group-hover:scale-110">
              <i className={`${services[1].icon} fa-2x`}></i>
            </div>
            <h3 className="mb-3 text-2xl font-black text-dark">{services[1].title}</h3>
            <p className="mb-6 leading-relaxed text-dark/60">{services[1].description}</p>
            <ul className="space-y-2">
              {services[1].features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-dark/70">
                  <i className="fa-jelly fa-circle-check mr-2 flex-shrink-0 text-brand-orange"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 3 - Larger card spanning more space */}
          <div className="group relative z-0 overflow-visible rounded-button border border-dark/5 bg-dark/5 p-8 backdrop-blur-sm transition-smooth hover:border-dark/10 hover:bg-dark/10 md:col-span-4 lg:col-span-6 lg:col-start-2">
            {/* Gradient Blur */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-button bg-brand-orange opacity-0 blur-3xl transition-opacity group-hover:opacity-10"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 text-brand-orange transition-smooth group-hover:scale-110">
              <i className={`${services[2].icon} fa-2x`}></i>
            </div>
            <h3 className="mb-3 text-2xl font-black text-dark">{services[2].title}</h3>
            <p className="mb-6 leading-relaxed text-dark/60">{services[2].description}</p>
            <ul className="space-y-2">
              {services[2].features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-dark/70">
                  <i className="fa-jelly fa-circle-check mr-2 flex-shrink-0 text-brand-orange"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Service 4 - Diagonal offset */}
          <div className="group relative overflow-visible rounded-button border border-dark/5 bg-dark/5 p-8 backdrop-blur-sm transition-smooth hover:border-dark/10 hover:bg-dark/10 md:col-span-2 lg:col-span-5 lg:col-start-8 lg:-mt-20 lg:rotate-1 lg:transform">
            {/* Gradient Blur */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-button bg-brand-orange opacity-0 blur-3xl transition-opacity group-hover:opacity-10"></div>

            <div className="relative mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-brand-orange/10 text-brand-orange transition-smooth group-hover:scale-110">
              <i className={`${services[3].icon} fa-2x`}></i>
            </div>
            <h3 className="mb-3 text-2xl font-black text-dark">{services[3].title}</h3>
            <p className="mb-6 leading-relaxed text-dark/60">{services[3].description}</p>
            <ul className="space-y-2">
              {services[3].features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-dark/70">
                  <i className="fa-jelly fa-circle-check mr-2 flex-shrink-0 text-brand-orange"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
