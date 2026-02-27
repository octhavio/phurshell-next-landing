export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Descoberta',
      description:
        'Entendemos profundamente seu negócio, objetivos e desafios. Realizamos workshops, mapeamento de requisitos e definição de escopo.',
      details: [
        'Workshop de discovery',
        'Análise de requisitos',
        'Definição de MVP',
        'Estimativa de prazo e investimento',
      ],
    },
    {
      number: '02',
      title: 'Arquitetura',
      description:
        'Projetamos a solução técnica ideal: arquitetura de software, tecnologias, integrações e modelagem de dados.',
      details: [
        'Arquitetura de solução',
        'Escolha de tecnologias',
        'Design system e UI/UX',
        'Prototipagem',
      ],
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description:
        'Desenvolvimento ágil com entregas iterativas. Sprints semanais, code review rigoroso e testes automatizados.',
      details: [
        'Sprints ágeis',
        'Code review constante',
        'Testes automatizados',
        'Deploy contínuo',
      ],
    },
    {
      number: '04',
      title: 'Evolução',
      description:
        'Após o lançamento, oferecemos suporte, monitoramento, correções e evoluções contínuas do produto.',
      details: [
        'Monitoramento 24/7',
        'Correções e melhorias',
        'Novas funcionalidades',
        'Suporte técnico',
      ],
    },
  ]

  return (
    <section id="processo" className="relative bg-gray-50 py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-20"></div>

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-dark sm:text-5xl">
            Nosso Processo
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-brand-orange"></div>
          <p className="text-lg leading-relaxed text-dark/60">
            Uma metodologia testada e refinada para garantir o sucesso do seu projeto
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-2">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-button border border-dark/10 bg-gradient-to-br from-brand-orange/20 to-brand-orange-light/20 text-4xl font-black text-dark backdrop-blur-sm transition-smooth group-hover:scale-110 group-hover:border-brand-orange">
                  {step.number}
                </div>
              </div>

              <div className="lg:col-span-10">
                <h3 className="mb-3 text-3xl font-black text-dark">{step.title}</h3>
                <p className="mb-6 text-lg leading-relaxed text-dark/70">{step.description}</p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <i className="fa-jelly fa-circle-check mr-3 mt-1 flex-shrink-0 text-brand-orange"></i>
                      <span className="text-sm font-medium text-dark/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-12 top-24 hidden h-full w-0.5 bg-gradient-to-b from-brand-orange/50 to-brand-orange-light/50 lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
