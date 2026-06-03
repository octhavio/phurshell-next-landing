import { Metadata } from 'next'
import TransitionLink from '../../src/components/TransitionLink'
import ContactCTA from '../../src/components/ContactCTA'

export const metadata: Metadata = {
  title: 'Segmentos | Apps Sob Medida para Cada Mercado',
  description: 'Conheça os segmentos em que a Phurshell atua — de healthtech a fintech, desenvolvemos apps sob medida para cada mercado.',
  alternates: { canonical: 'https://phurshell.com/segmentos/' },
  openGraph: {
    title: 'Segmentos | Phurshell',
    description: 'Conheça os segmentos em que a Phurshell atua — de healthtech a fintech, desenvolvemos apps sob medida para cada mercado.',
    url: 'https://phurshell.com/segmentos',
    type: 'website',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: 'Phurshell - Segmentos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Segmentos | Phurshell',
    description: 'De healthtech a fintech, desenvolvemos apps sob medida para cada mercado.',
    images: ['/og-image.webp'],
  },
}

const segments = [
  {
    slug: 'healthtech',
    name: 'Healthtech',
    jellyIcon: 'plus',
    description: 'Saúde é o segmento onde mais atuamos — e onde mais sentimos o impacto real do que construímos. Desenvolvemos aplicativos médicos, plataformas de teleatendimento, ferramentas de gestão clínica e soluções de saúde preventiva que conectam profissionais e pacientes de forma simples e segura.',
    highlights: [
      { icon: 'fa-solid fa-stethoscope', label: 'Gestão clínica & prontuários', description: 'Sistemas completos para médicos gerenciarem consultas, prontuários eletrônicos e prescrições digitais com agilidade.' },
      { icon: 'fa-solid fa-video', label: 'Telemedicina & teleconsulta', description: 'Plataformas de atendimento remoto com vídeo, chat e integração com dispositivos de monitoramento de saúde.' },
      { icon: 'fa-solid fa-brain', label: 'IA para suporte diagnóstico', description: 'Ferramentas inteligentes que auxiliam profissionais de saúde com análise de dados e sugestões baseadas em evidências.' },
      { icon: 'fa-solid fa-syringe', label: 'Saúde preventiva & vacinação', description: 'Apps que ajudam pacientes a acompanhar vacinas, exames e hábitos saudáveis com lembretes e histórico integrado.' },
      { icon: 'fa-solid fa-paw', label: 'Saúde animal & pettech', description: 'Soluções para clínicas veterinárias e tutores de pets gerenciarem consultas, vacinação e bem-estar animal.' },
    ],
  },
  {
    slug: 'insurtech',
    name: 'Insurtech',
    jellyIcon: 'shield',
    description: 'O setor de seguros está passando por uma revolução digital — e nós estamos no centro dela. Construímos plataformas que digitalizam processos manuais, criam novos modelos de contratação e aproximam seguradoras dos seus clientes finais.',
    highlights: [
      { icon: 'fa-solid fa-car', label: 'Seguro de mobilidade & frotas', description: 'Apps de seguro automotivo com ativação por demanda, telemetria e gestão de sinistros de forma 100% digital.' },
      { icon: 'fa-solid fa-file-contract', label: 'Contratação digital de apólices', description: 'Fluxos simplificados de cotação e contratação que reduzem o tempo de onboarding e aumentam a conversão.' },
      { icon: 'fa-solid fa-chart-pie', label: 'Backoffice & gestão de sinistros', description: 'Plataformas administrativas para seguradoras gerenciarem apólices, sinistros e relatórios com eficiência.' },
      { icon: 'fa-solid fa-bolt', label: 'Seguros intermitentes & sob demanda', description: 'Modelos inovadores onde o cliente ativa e desativa a cobertura em tempo real pelo próprio aplicativo.' },
    ],
  },
  {
    slug: 'social',
    name: 'Social',
    jellyIcon: 'users',
    description: 'Aplicativos sociais vivem ou morrem pelo engajamento. Por isso, construímos experiências que criam hábito — desde o primeiro onboarding até as interações do dia a dia. Desenvolvemos plataformas de relacionamento, comunidades digitais e apps de entretenimento.',
    highlights: [
      { icon: 'fa-solid fa-heart', label: 'Apps de relacionamento & nicho', description: 'Plataformas de conexão entre pessoas com algoritmos de compatibilidade, perfis ricos e fluxos de match.' },
      { icon: 'fa-solid fa-film', label: 'Entretenimento & descoberta de conteúdo', description: 'Apps que conectam usuários a eventos, filmes, músicas e experiências com base em localização e preferências.' },
      { icon: 'fa-solid fa-futbol', label: 'Comunidades esportivas', description: 'Plataformas para conectar atletas amadores, organizar partidas e acompanhar estatísticas em tempo real.' },
      { icon: 'fa-solid fa-location-dot', label: 'Plataformas baseadas em localização', description: 'Apps que usam geolocalização para criar experiências hiperpersonalizadas e conectar pessoas próximas.' },
    ],
  },
  {
    slug: 'fintech',
    name: 'Fintech',
    jellyIcon: 'chart-pie',
    description: 'Dinheiro é um assunto sério — e aplicativos financeiros precisam transmitir confiança desde a primeira tela. Desenvolvemos fintechs com foco em experiência de usuário impecável, segurança de dados e performance em tempo real.',
    highlights: [
      { icon: 'fa-solid fa-chart-line', label: 'Plataformas de investimento & trading', description: 'Dashboards de mercado em tempo real, carteiras de ativos e ferramentas de análise para investidores.' },
      { icon: 'fa-solid fa-wallet', label: 'Wallets & pagamentos digitais', description: 'Carteiras digitais com transferências, pagamentos e gestão financeira pessoal em uma experiência fluida.' },
      { icon: 'fa-solid fa-lock', label: 'Segurança & autenticação avançada', description: 'Implementação de biometria, autenticação em dois fatores e criptografia de ponta a ponta nos dados financeiros.' },
      { icon: 'fa-solid fa-bell', label: 'Alertas de mercado em tempo real', description: 'Notificações inteligentes sobre movimentações, oportunidades e eventos relevantes para o portfólio do usuário.' },
    ],
  },
  {
    slug: 'varejo',
    name: 'Varejo',
    jellyIcon: 'bag-shopping',
    description: 'No varejo digital, cada segundo de fricção custa conversão. Construímos apps de e-commerce, marketplaces e plataformas de compra que são rápidos, intuitivos e otimizados para venda do catálogo ao checkout.',
    highlights: [
      { icon: 'fa-solid fa-cart-shopping', label: 'E-commerce & marketplace mobile', description: 'Lojas virtuais e marketplaces com catálogo, carrinho, checkout otimizado e gestão de pedidos integrada.' },
      { icon: 'fa-solid fa-barcode', label: 'Leitura de código & compra rápida', description: 'Funcionalidades de scan de produto que aceleram o processo de compra em ambientes físicos e online.' },
      { icon: 'fa-solid fa-truck', label: 'Logística & rastreamento de pedidos', description: 'Integração com transportadoras e experiência de rastreamento em tempo real que reduz ansiedade pós-compra.' },
      { icon: 'fa-solid fa-rotate', label: 'Plataformas de compra & venda entre usuários', description: 'Marketplaces C2C com avaliações, pagamento seguro e fluxo de negociação entre compradores e vendedores.' },
    ],
  },
  {
    slug: 'educacao',
    name: 'Educação',
    jellyIcon: 'book',
    description: 'Educação de qualidade precisa ser acessível e envolvente. Desenvolvemos plataformas de aprendizado que combinam boa experiência de uso com ferramentas que realmente ajudam estudantes a evoluir.',
    highlights: [
      { icon: 'fa-solid fa-book-open', label: 'Plataformas de ensino & LMS mobile', description: 'Sistemas de gestão de aprendizado com aulas, exercícios, progresso do aluno e comunicação com instrutores.' },
      { icon: 'fa-solid fa-university', label: 'Descoberta de universidades & instituições', description: 'Apps que ajudam estudantes a pesquisar, comparar e conectar com instituições de ensino no Brasil e no mundo.' },
      { icon: 'fa-solid fa-trophy', label: 'Gamificação & engajamento', description: 'Mecânicas de pontuação, conquistas e rankings que aumentam a retenção e motivação dos alunos.' },
      { icon: 'fa-solid fa-globe', label: 'Educação internacional & multilíngue', description: 'Plataformas com suporte a múltiplos idiomas e conteúdos adaptados para diferentes contextos culturais.' },
    ],
  },
]

export default function Segmentos() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-12 pb-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h1 className="mb-4 text-5xl font-black tracking-tight text-dark sm:text-6xl lg:text-7xl">
            Segmentos que<br className="hidden sm:block" /> dominamos
          </h1>
          <p className="mb-8 max-w-5xl text-xl leading-relaxed text-dark/60">
            Mais de uma década desenvolvendo produtos digitais nos ensinou que cada mercado tem suas próprias regras, desafios e oportunidades. Conheça os segmentos onde temos mais experiência e como podemos acelerar o seu projeto.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <TransitionLink
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
            >
              Solicitar proposta
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </TransitionLink>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-auto overflow-hidden rounded-full">
                <img
                  src="/images/img-cta-especialist.webp"
                  alt="Equipe de especialistas da Phurshell"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-cover"
                />
              </div>
              <p className="text-lg font-bold text-dark">Fale com um especialista agora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      {segments.map((seg) => (
        <section key={seg.slug} id={seg.slug} className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
            {/* Header */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-4">
                <i className={`fa-jelly fa-${seg.jellyIcon} text-4xl text-brand-orange`}></i>
                <h2 className="text-4xl font-black tracking-tight text-dark sm:text-5xl">
                  {seg.name}
                </h2>
              </div>
              <p className="max-w-4xl text-xl leading-relaxed text-dark/70">
                {seg.description}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {seg.highlights.map((h, i) => (
                <div key={i} className="flex h-full flex-col rounded-button border border-dark/10 bg-white p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <i className={`${h.icon} text-xl text-dark`}></i>
                    <h3 className="text-xl font-black text-dark">{h.label}</h3>
                  </div>
                  <p className="flex-grow text-xl leading-relaxed text-dark/60">{h.description}</p>
                </div>
              ))}
            </div>

            {/* Ver cases */}
            <div className="mt-8">
              <TransitionLink
                href={`/segmentos/${seg.slug}`}
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Saiba mais
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </div>
  )
}
