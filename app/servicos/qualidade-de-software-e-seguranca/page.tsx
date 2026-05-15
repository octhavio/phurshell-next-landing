'use client'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function ServicosQualidadeSeguranca() {
  const processStages: ProcessStage[] = [
    {
      stage: 1,
      title: 'Levantamento de requisitos de qualidade',
      description:
        'Iniciamos com uma análise profunda do seu produto, mapeando os requisitos de qualidade, critérios de aceitação e pontos críticos de negócio. Esta etapa define os padrões mínimos de funcionamento, as métricas de cobertura de testes e os riscos prioritários a serem mitigados ao longo de todo o ciclo de desenvolvimento.',
      color: 'red',
      icon: 'clipboard',
    },
    {
      stage: 2,
      title: 'Planejamento de testes',
      description:
        'Com base nos requisitos levantados, elaboramos um plano de testes detalhado que define estratégia, escopo, tipos de testes a serem aplicados, ferramentas, ambientes e responsabilidades. O planejamento garante que a cobertura seja completa, eficiente e alinhada aos objetivos de negócio.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Testes unitários',
      description:
        'Implementamos testes unitários para validar cada função, método e componente de forma isolada. Esta camada de testes é a base da pirâmide de qualidade, garantindo que cada unidade de código se comporte conforme esperado e permitindo refatorações com segurança e confiança.',
      color: 'blue',
      icon: 'check',
    },
    {
      stage: 4,
      title: 'Testes de integração',
      description:
        'Validamos como os diferentes módulos, serviços e APIs se comunicam entre si. Os testes de integração identificam falhas nas interfaces entre componentes, inconsistências nos contratos de API e problemas de fluxo de dados que só surgem quando os sistemas trabalham em conjunto.',
      color: 'teal',
      icon: 'link',
    },
    {
      stage: 5,
      title: 'Testes end-to-end (E2E)',
      description:
        'Simulamos o comportamento real do usuário, testando fluxos completos da aplicação do início ao fim. Os testes E2E garantem que todas as camadas do sistema funcionem corretamente em conjunto, validando a experiência completa antes de qualquer entrega em produção.',
      color: 'blue',
      icon: 'circle-check',
    },
    {
      stage: 6,
      title: 'Auditoria de segurança',
      description:
        'Realizamos uma revisão técnica aprofundada do código, arquitetura e configurações do sistema em busca de vulnerabilidades. A auditoria cobre exposição de dados sensíveis, falhas de autenticação, injeção de código, dependências desatualizadas e não conformidades com as melhores práticas de segurança (OWASP, LGPD).',
      color: 'teal',
      icon: 'shield',
    },
    {
      stage: 7,
      title: 'Pentesting',
      description:
        'Executamos testes de penetração simulando ataques reais ao seu sistema. O pentesting identifica falhas que ferramentas automatizadas não detectam, como lógica de negócio vulnerável, escalação de privilégios e vetores de ataque encadeados. Entregamos um relatório detalhado com as vulnerabilidades encontradas e recomendações de correção priorizadas.',
      color: 'green',
      icon: 'bug',
    },
    {
      stage: 8,
      title: 'Relatório e melhoria contínua',
      description:
        'Ao final de cada ciclo, entregamos relatórios completos com cobertura de testes, vulnerabilidades encontradas, nível de risco, evidências e plano de ação corretivo. Estabelecemos um processo de melhoria contínua com revisões periódicas, atualização de testes e monitoramento constante para garantir que a qualidade e segurança evoluam junto com o produto.',
      color: 'blue',
      icon: 'chart-bar',
    },
  ]

  const services = [
    {
      title: 'Testes automatizados',
      description: 'Suite completa de testes unitários, integração e E2E garantindo qualidade e confiabilidade contínua.',
      icon: 'check',
      iconType: 'jelly',
    },
    {
      title: 'QA & software testing',
      description: 'Garantia de qualidade abrangente com testes manuais e automatizados para excelência do produto.',
      icon: 'circle-check',
      iconType: 'jelly',
    },
    {
      title: 'Testes de performance',
      description: 'Análise e otimização de performance com testes de carga e stress para resposta rápida sob demanda.',
      icon: 'gauge',
      iconType: 'jelly',
    },
    {
      title: 'Cyber segurança',
      description: 'Proteção completa contra ameaças digitais com auditoria de segurança e pentesting.',
      icon: 'shield-halved',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Auditoria de código',
      description: 'Revisão técnica profunda do código-fonte em busca de vulnerabilidades, más práticas e débitos técnicos.',
      icon: 'file',
    },
    {
      title: 'OWASP compliance',
      description: 'Verificação e adequação do sistema às diretrizes OWASP Top 10 para aplicações web seguras.',
      icon: 'shield',
    },
    {
      title: 'Testes de regressão',
      description: 'Validação contínua para garantir que novas funcionalidades não introduzam falhas em recursos existentes.',
      icon: 'arrows-rotate',
    },
    {
      title: 'Load testing',
      description: 'Testes de carga e stress para validar o comportamento do sistema sob alta demanda e tráfego intenso.',
      icon: 'gauge',
    },
    {
      title: 'Penetration testing',
      description: 'Simulação de ataques reais para identificar falhas de segurança antes que agentes maliciosos o façam.',
      icon: 'bug',
    },
    {
      title: 'Análise de vulnerabilidades',
      description: 'Varredura sistemática do sistema para identificar, classificar e priorizar vulnerabilidades de segurança.',
      icon: 'magnifying-glass',
    },
    {
      title: 'LGPD & compliance',
      description: 'Adequação do produto às exigências da LGPD e demais regulamentações de proteção de dados.',
      icon: 'sliders',
    },
    {
      title: 'Criptografia & proteção de dados',
      description: 'Implementação de criptografia robusta e mecanismos de proteção para dados sensíveis em trânsito e em repouso.',
      icon: 'lock',
    },
    {
      title: 'Monitoramento de segurança',
      description: 'Monitoramento contínuo de eventos de segurança, alertas em tempo real e resposta a incidentes.',
      icon: 'chart-bar',
    },
    {
      title: 'Treinamento em segurança',
      description: 'Capacitação de equipes em boas práticas de segurança, desenvolvimento seguro e prevenção de ataques.',
      icon: 'book',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Qualidade</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">software</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-4">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">segurança</span></span>
          </h1>

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Testes de software, QA e segurança para aplicações digitais
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-6">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">garante</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">que</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">seu</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">produto</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">funcione</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">excelência,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">segurança</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">confiabilidade</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">em</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">qualquer</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">cenário.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">Testes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">automatizados,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">QA,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">pentesting</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-26">auditoria</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-27">de</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-28">código</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-29">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-30">rigor</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-31">técnico.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-32" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-33" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.webp"
                      alt="Equipe de especialistas em qualidade e segurança da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-34">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-35">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-36">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-37">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-38">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-39" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero-quality_assurance.webp"
                  alt="Dashboard de qualidade e segurança desenvolvido pela Phurshell"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/img-cases-psiapp-icon.webp"
                        alt="Logo do aplicativo Psiapp"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Psiapp</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Conduzimos a auditoria completa de segurança e cobertura de testes do Psiapp antes do lançamento, garantindo a proteção de dados sensíveis de pacientes e psicólogos.
                        <br />
                        <span className="font-bold">Zero vulnerabilidades críticas no lançamento</span>
                      </p>
                    </div>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Clients Carousel - Dark Section */}
      <section className="relative overflow-hidden bg-white pb-12">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <ClientLogosCarousel
            logos={[2, 1, 3, 4, 5, 6]}
            subtitle="Alguns de nossos clientes"
            title={
              <>
                Empresas ambiciosas
                <br />
                que trabalhamos em conjunto
              </>
            }
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="pt-12">
        <ProcessCarousel
          items={services}
          label="Principais Serviços"
          labelIcon="shield"
          title="Garantimos qualidade e segurança em cada linha de código."
          description="Nossos serviços de QA e segurança abrangem desde testes automatizados e auditoria de código até pentesting e conformidade com melhores práticas de segurança."
          bgColor="white"
          cardStyle="service"
        />
      </section>

      {/* Outros Serviços */}
      <ProcessCarousel
        items={solutions}
        label="Outros Serviços"
        hideLabel={true}
        smallTitle={true}
        labelIcon="suitcase"
        title="Outros serviços que também fazem parte do processo"
        description="Oferecemos um conjunto completo de serviços especializados em qualidade e segurança para proteger e validar seu produto digital. Cada serviço é integrado ao ciclo de desenvolvimento, garantindo conformidade, proteção de dados e performance em todas as etapas."
        bgColor="white"
        cardStyle="service"
        showCta={true}
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Da análise ao produto seguro"
        description="Você tem o produto. Agora você precisa de um parceiro especializado focado em garantir qualidade, confiabilidade e segurança em cada entrega. Com isso em mente, estruturamos um processo completo de QA e segurança que cobre desde o levantamento de requisitos até a melhoria contínua pós-lançamento."
        bgColor="gray"
        cardStyle="process"
      />

      {/* Cases */}
      <CasesCarousel />

      {/* Testimonial */}
      <TestimonialCarousel />

      {/* Excellence Section */}
      <WhyPhurshell />

      {/* Contact CTA */}
      <ContactCTA />

      {/* FAQ */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-12 text-5xl font-black tracking-tight text-dark sm:text-6xl">
            Perguntas frequentes
          </h2>

          <div className="divide-y divide-dark/10">
            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Quais tipos de testes a Phurshell realiza?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Realizamos testes unitários, de integração, end-to-end (E2E), de performance, de carga, de regressão e testes de segurança. Nossa abordagem cobre toda a pirâmide de testes, garantindo qualidade em todos os níveis do sistema — desde funções individuais até fluxos completos do usuário. Também realizamos testes manuais exploratórios quando necessário para cenários críticos de negócio.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                O que é pentesting e quando devo contratar?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Pentesting (teste de penetração) é uma simulação controlada de ataques reais ao seu sistema, realizada por especialistas em segurança ofensiva. O objetivo é identificar vulnerabilidades antes que agentes maliciosos o façam. Recomendamos pentesting antes de lançamentos importantes, após mudanças significativas na arquitetura, periodicamente em sistemas críticos ou quando exigido por regulamentações como LGPD, PCI-DSS ou ISO 27001.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como a Phurshell ajuda na conformidade com a LGPD?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Realizamos uma auditoria completa do fluxo de dados pessoais no seu sistema, identificando coleta, armazenamento, processamento e compartilhamento de dados. A partir disso, mapeamos as lacunas em relação aos requisitos da LGPD e implementamos controles técnicos como criptografia, anonimização, gestão de consentimento, logs de auditoria e mecanismos para exercício dos direitos dos titulares de dados.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como funciona o processo de QA no meu projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Integramos o QA ao longo de todo o ciclo de desenvolvimento, não apenas no final. Começamos com o levantamento de requisitos de qualidade, definimos critérios de aceitação claros, implementamos testes automatizados junto com o código e realizamos revisões de qualidade a cada entrega. Isso garante que problemas sejam identificados e corrigidos o mais cedo possível, reduzindo custo e tempo de correção.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Que tipo de relatório recebo ao final de uma auditoria ou pentesting?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Entregamos relatórios detalhados com sumário executivo para gestores e análise técnica aprofundada para a equipe de desenvolvimento. O relatório inclui todas as vulnerabilidades encontradas, classificadas por severidade (crítica, alta, média, baixa), evidências, descrição do impacto, passos para reprodução e recomendações de correção priorizadas. Após a correção, realizamos uma validação para confirmar que as vulnerabilidades foram devidamente tratadas.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
