'use client'

import { useState } from 'react'
import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'

export default function ServicosBlockchain() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const cases = [
    {
      name: 'Diag',
      icon: '/img-icon-diag.svg',
      description:
        'Prescrições médicas simplificadas. Plataforma completa de gestão de saúde com geração de prontuários e receitas médicas, chat com IA para suporte diagnóstico, e conteúdos médicos atualizados para facilitar o dia-a-dia dos médicos.',
      screenshot: '/images/img-screenshot-diag.png',
      tags: [
        'IDENTIDADE VISUAL',
        'WIREFRAME',
        'INFRAESTRUTURA',
        'IOS',
        'ANDROID',
        'WEB',
        'LANDING PAGE',
        'BACKOFFICE',
        'IA',
      ],
    },
    {
      name: 'Psiapp',
      icon: '/img-icon-psiapp.svg',
      description:
        'O aplicativo que conecta psicólogos a pacientes. Desenvolvimento completo dos aplicativos para pacientes e psicólogos, criação do backoffice para gestão e suporte dos atendimentos. Análise de dados para crescimento do projeto e manutenção contínua.',
      screenshot: '/images/img-screenshot-psiapp.png',
      tags: [
        'IDENTIDADE VISUAL',
        'WIREFRAME',
        'INFRAESTRUTURA',
        'IOS',
        'ANDROID',
        'WEB',
        'BACKOFFICE',
      ],
    },
    {
      name: 'MovSpot',
      icon: '/images/img-icon_movspot.svg',
      description:
        'Tiramos a ideia do papel, estudamos o mercado, criamos a identidade e desenvolvemos a única plataforma que mostra onde os filmes foram gravados na internet.',
      screenshot: '/images/img-screenshot-movspot.png',
      tags: [
        'PESQUISA DE MERCADO',
        'IDENTIDADE VISUAL',
        'WIREFRAME',
        'INFRAESTRUTURA',
        'IOS',
        'ANDROID',
        'WEB',
      ],
    },
    {
      name: 'Autoday',
      icon: '/images/img-icon_autoday.png',
      description:
        'É uma insurtech especializada no desenvolvimento de soluções de seguros de mobilidade inovadores e acessíveis. O aplicativo que ajuda você a proteger seu carro com um seguro intermitente revolucionário.',
      screenshot: '/images/img-screenshot-autoday.png',
      tags: ['BACKOFFICE', 'WIREFRAME', 'IDENTIDADE VISUAL', 'INFRAESTRUTURA', 'LANDING PAGE', 'IOS', 'ANDROID'],
    },
    {
      name: 'Bluu',
      icon: '/images/img-icon_bluu.png',
      description:
        'Aplicativo de saúde preventiva para pets, ajudando tutores a melhorar a saúde de seus bichinhos com atividades e práticas diárias. Além de atendimento veterinário para casos emergenciais.',
      screenshot: '/images/img-screenshot-bluu.png',
      tags: ['WIREFRAME', 'BACKOFFICE', 'LANDING PAGE', 'IDENTIDADE VISUAL', 'IOS', 'ANDROID'],
    },
    {
      name: 'Devotee',
      icon: '/images/img-icon_devote_new.png',
      description:
        'Tivemos a honra de tirar do papel o único aplicativo de relacionamento exclusivo para deficientes físicos. Desde a concepção da ideia até o desenvolvimento do iOS e Android.',
      screenshot: '/images/img-screenshot-devotee.png',
      tags: ['WIREFRAME', 'BACKEND', 'WEB', 'IOS', 'ANDROID', 'BACKOFFICE', 'IDENTIDADE VISUAL'],
    },
  ]

  const currentCase = cases[currentCaseIndex]

  const handleCaseChange = (newIndex: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentCaseIndex(newIndex)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrevCase = () => {
    const newIndex = currentCaseIndex === 0 ? cases.length - 1 : currentCaseIndex - 1
    handleCaseChange(newIndex)
  }

  const handleNextCase = () => {
    const newIndex = currentCaseIndex === cases.length - 1 ? 0 : currentCaseIndex + 1
    handleCaseChange(newIndex)
  }

  const processStages = [
    {
      stage: 1,
      title: 'Definição de casos de uso',
      description:
        'Iniciamos com uma análise aprofundada das necessidades do seu negócio para identificar onde a blockchain realmente agrega valor. Mapeamos os fluxos de transações, identificamos os stakeholders envolvidos e definimos os casos de uso mais adequados para descentralização, garantindo que a tecnologia seja aplicada onde faz mais sentido estratégico.',
      color: 'red',
      icon: 'lightbulb',
    },
    {
      stage: 2,
      title: 'Escolha da blockchain',
      description:
        'Com os casos de uso definidos, avaliamos as redes blockchain disponíveis — Ethereum, Solana, Polygon, entre outras — considerando custos de gas, velocidade de transação, ecosssistema de ferramentas e requisitos de segurança. Escolhemos a rede mais adequada ao seu projeto e orçamento, documentando os critérios de decisão.',
      color: 'teal',
      icon: 'map',
    },
    {
      stage: 3,
      title: 'Arquitetura de smart contracts',
      description:
        'Projetamos a arquitetura dos contratos inteligentes com foco em segurança, eficiência de gas e modularidade. Definimos padrões de tokens (ERC-20, ERC-721, ERC-1155), estruturas de dados on-chain e off-chain, mecanismos de upgrade e padrões de controle de acesso. Esta etapa é fundamental para evitar vulnerabilidades e garantir escalabilidade.',
      color: 'blue',
      icon: 'database',
    },
    {
      stage: 4,
      title: 'Desenvolvimento dos contratos',
      description:
        'Nossa equipe desenvolve os smart contracts utilizando Solidity, Rust ou outras linguagens adequadas à blockchain escolhida. Seguimos as melhores práticas de segurança, padrões auditados pela comunidade e frameworks como Hardhat e Foundry. Cada contrato é desenvolvido com testes unitários integrados desde o início do ciclo de desenvolvimento.',
      color: 'teal',
      icon: 'code',
    },
    {
      stage: 5,
      title: 'Auditoria de segurança',
      description:
        'Realizamos uma auditoria completa dos contratos inteligentes para identificar vulnerabilidades como reentrância, overflow, acesso indevido a funções e manipulação de oráculos. Utilizamos ferramentas de análise estática como Slither e MythX, além de revisão manual por especialistas em segurança blockchain. A auditoria é obrigatória antes de qualquer deploy em mainnet.',
      color: 'blue',
      icon: 'shield-halved',
    },
    {
      stage: 6,
      title: 'Testes na testnet',
      description:
        'Antes do lançamento em produção, implantamos todos os contratos e a aplicação em redes de teste (testnets) equivalentes à mainnet escolhida. Realizamos testes de integração, simulações de ataques, testes de carga e validação dos fluxos completos com usuários reais em ambiente controlado. Esta etapa garante que tudo funcione conforme esperado sem custos reais.',
      color: 'teal',
      icon: 'gauge',
    },
    {
      stage: 7,
      title: 'Deploy na mainnet',
      description:
        'Com contratos auditados e validados em testnet, realizamos o deploy na mainnet de forma cuidadosa e monitorada. Configuramos scripts de deploy reproduzíveis, verificamos os contratos em exploradores de bloco como Etherscan, e acompanhamos as primeiras transações em tempo real. O lançamento é feito fora de períodos de alta congestionamento para otimizar custos de gas.',
      color: 'green',
      icon: 'check',
    },
    {
      stage: 8,
      title: 'Monitoramento contínuo',
      description:
        'Após o lançamento, monitoramos continuamente os contratos e a aplicação em busca de comportamentos anômalos, consumo de gas acima do esperado e possíveis tentativas de exploração. Mantemos alertas automáticos, atualizamos dependências, implementamos melhorias e evoluímos o produto conforme as necessidades do negócio e o ecossistema Web3 avança.',
      color: 'blue',
      icon: 'arrows-rotate',
    },
  ]

  const services = [
    {
      title: 'Smart Contracts',
      description: 'Desenvolvimento e auditoria de contratos inteligentes para automação segura de transações e regras de negócio.',
      icon: 'file-contract',
      iconType: 'jelly',
    },
    {
      title: 'Aplicações Descentralizadas (dApps)',
      description: 'Criação de aplicações Web3 com integração a blockchains e carteiras digitais.',
      icon: 'network-wired',
      iconType: 'jelly',
    },
    {
      title: 'Tokenização & NFTs',
      description: 'Soluções de tokenização de ativos e criação de NFTs para novos modelos de negócio.',
      icon: 'coins',
      iconType: 'jelly',
    },
    {
      title: 'Integração Web3',
      description: 'Integração de funcionalidades blockchain em aplicações existentes de forma segura e escalável.',
      icon: 'link',
      iconType: 'jelly',
    },
  ]

  const solutions = [
    {
      title: 'Auditoria de Smart Contracts',
      description: 'Análise completa de segurança em contratos inteligentes para identificar e corrigir vulnerabilidades.',
      icon: 'magnifying-glass',
    },
    {
      title: 'DeFi',
      description: 'Desenvolvimento de protocolos de finanças descentralizadas, DEXs e pools de liquidez.',
      icon: 'coins',
    },
    {
      title: 'DAO',
      description: 'Criação de organizações autônomas descentralizadas com governança on-chain e votação tokenizada.',
      icon: 'users',
    },
    {
      title: 'Carteiras Digitais',
      description: 'Integração e desenvolvimento de carteiras digitais para custódia e gestão de ativos digitais.',
      icon: 'wallet',
    },
    {
      title: 'Ethereum',
      description: 'Desenvolvimento especializado na rede Ethereum, com profundo conhecimento do ecosssistema EVM.',
      icon: 'link',
    },
    {
      title: 'Solana',
      description: 'Aplicações de alta performance na blockchain Solana com programas em Rust e Anchor framework.',
      icon: 'link',
    },
    {
      title: 'Polygon',
      description: 'Soluções escaláveis e de baixo custo na rede Polygon, compatível com o ecossistema Ethereum.',
      icon: 'shapes',
    },
    {
      title: 'IPFS & Armazenamento Descentralizado',
      description: 'Armazenamento distribuído de dados e metadados usando IPFS, Filecoin e Arweave.',
      icon: 'database',
    },
    {
      title: 'Web3 UX/UI',
      description: 'Design de interfaces para dApps com foco na experiência de usuário em ambientes descentralizados.',
      icon: 'palette',
    },
    {
      title: 'Consultoria Blockchain',
      description: 'Orientação estratégica para empresas que desejam adotar tecnologia blockchain em seus processos.',
      icon: 'compass',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Title */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="word-wrapper"><span className="word word-delay-1">Blockchain</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-2">&</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-3">Web3</span></span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-4xl text-xl leading-relaxed text-dark/70">
            <span className="word-wrapper"><span className="word word-delay-4">A</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-5">Phurshell</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-6">desenvolve</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-7">soluções</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-8">descentralizadas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-9">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-10">contratos</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-11">inteligentes</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-12">para</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-13">transparência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-14">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-15">segurança</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-16">nas</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-17">transações.</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-18">Smart</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-19">contracts,</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-20">dApps</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-21">e</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-22">tokenização</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-23">com</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-24">excelência</span></span>{' '}
            <span className="word-wrapper"><span className="word word-delay-25">técnica.</span></span>
          </p>

          {/* CTA */}
          <div className="mb-6 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <span className="word word-delay-26" style={{ display: 'inline-block' }}>
              <TransitionLink
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-button bg-brand-orange px-6 py-3 text-base font-bold tracking-wider text-white shadow-lg shadow-brand-orange/30 transition-smooth hover:bg-brand-orange-light"
              >
                Solicitar proposta
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </TransitionLink>
            </span>
            <span className="word-wrapper">
              <span className="word word-delay-27" style={{ display: 'inline-block' }}>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-auto overflow-hidden rounded-full">
                    <img
                      src="/images/img-cta-especialist.png"
                      alt="Equipe de especialistas em blockchain da Phurshell"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold text-dark">
                    <span className="word-wrapper"><span className="word word-delay-28">Fale</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-29">com</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-30">um</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-31">especialista</span></span>{' '}
                    <span className="word-wrapper"><span className="word word-delay-32">agora</span></span>
                  </p>
                </div>
              </span>
            </span>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[21/9] overflow-hidden rounded-button">
            <span className="word-wrapper" style={{ display: 'block', height: '100%' }}>
              <span className="word word-delay-33" style={{ display: 'block', height: '100%', position: 'relative' }}>
                <img
                  src="/images/img-hero.png"
                  alt="Solução blockchain desenvolvida pela Phurshell mostrando design moderno e funcional"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/img-icon-psiapp.svg"
                        alt="Logo do aplicativo Psiapp"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">Psiapp</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Um dos projetos desenvolvidos pela Phurshell, que conecta psicólogos a pacientes com uma plataforma web completa para agendamento de consultas e acompanhamento terapêutico.
                        <br />
                        <span className="font-bold">São quase 100 mil downloads</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-white sm:text-xl">4.8</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className="fa-solid fa-star text-white"></i>
                        ))}
                      </div>
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
          labelIcon="link"
          title="Construímos o futuro descentralizado com segurança e transparência."
          description="Nossos serviços de Blockchain & Web3 abrangem desde smart contracts e dApps até tokenização e integração com protocolos descentralizados."
          bgColor="white"
          cardStyle="service"
        />
      </section>

      {/* CTA Button */}
      <section className="bg-white pb-12 sm:pb-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
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
                  src="/images/img-cta-especialist.png"
                  alt="Equipe de especialistas em blockchain da Phurshell"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-cover"
                />
              </div>
              <p className="text-lg font-bold text-dark">
                Fale com um especialista agora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          {/* Header */}
          <div className="mb-12">
            <p className="mb-4 flex items-center gap-3 text-lg font-black uppercase tracking-wider text-brand-orange">
              <i className="fa-jelly fa-link fa-xl"></i>
              Cases de sucesso
            </p>
            <h2 className="mb-6 text-5xl font-black tracking-tight text-white sm:text-6xl">
              Projetos que transformamos em realidade
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-white/70">
              Conheça alguns dos projetos que desenvolvemos do zero, desde a concepção da ideia até
              o lançamento e crescimento no mercado.
            </p>
          </div>

          <div className="overflow-hidden rounded-button border border-white/10 bg-dark">
            <div className="grid grid-cols-1 items-center gap-12 p-12 sm:p-16 lg:grid-cols-2 lg:gap-16 lg:p-20">
              {/* Left Column - Content */}
              <div
                className={`space-y-8 transition-all duration-300 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentCase.icon}
                      alt={currentCase.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-2xl border border-white/20"
                    />
                    <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                      {currentCase.name}
                    </h2>
                  </div>
                  <p className="text-xl leading-relaxed text-white/70">{currentCase.description}</p>
                </div>

                {/* O que fizemos */}
                <div className="space-y-4">
                  <h3 className="text-sm font-black uppercase tracking-wider text-white/60">
                    O que fizemos?
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Screenshot */}
              <div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <img
                  src={currentCase.screenshot}
                  alt={`Tela do projeto ${currentCase.name} desenvolvido pela Phurshell`}
                  width={600}
                  height={800}
                  className="h-auto w-full max-w-md cursor-pointer transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between border-t border-white/10 px-8 py-6 sm:px-12">
              <div className="flex gap-2">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleCaseChange(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentCaseIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Ir para case ${i + 1}`}
                  ></button>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePrevCase}
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-white/20 text-white transition-smooth hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Case anterior"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  onClick={handleNextCase}
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-white/20 text-white transition-smooth hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Próximo case"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="relative mb-6 flex justify-center">
                <i className="fa-solid fa-quote-left fa-3x text-brand-orange"></i>
              </div>
              <blockquote className="text-3xl leading-tight text-dark sm:text-4xl">
                "Foi uma empresa muito parceira nossa, porque eles contribuíram não só no
                desenvolvimento, mas também com ideias pro negócio. Deram muito suporte pra gente."
              </blockquote>
            </div>

            <div className="flex items-center justify-center gap-6">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src="/images/img-testimonial-autoday.png"
                  alt="Foto de Alec Maia, fundador da AutoDay"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-1 text-xl font-black text-dark">Alec Maia</h3>
                <p className="text-base font-bold text-dark/70">Ceo da Autoday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mb-8">
            <p className="mb-4 flex items-center gap-3 text-lg font-black uppercase tracking-wider text-brand-orange">
              <i className="fa-jelly fa-clipboard fa-xl"></i>
              Nosso processo
            </p>
            <h2 className="mb-6 text-5xl font-black tracking-tight text-dark sm:text-6xl">
              Da ideia ao lançamento
            </h2>
            <p className="max-w-4xl text-xl leading-relaxed text-dark/60">
              Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, ajudaremos você com suas primeiras decisões críticas de produto, como escolha de blockchain, arquitetura de contratos, segurança e auditoria. E configuraremos sua solução descentralizada para o sucesso.
            </p>
          </div>

          <div className="relative mt-16">
            {processStages.map((stage, index) => (
              <div key={stage.stage} className="relative flex items-center gap-6 pb-12 last:pb-0">
                {/* Timeline Line & Circle */}
                <div className="relative flex flex-col items-center self-stretch justify-center">
                  {index !== processStages.length - 1 && (
                    <div className="absolute left-1/2 top-1/2 h-[calc(100%+3rem-1.5rem)] w-0.5 -translate-x-1/2 bg-brand-orange/30"></div>
                  )}
                  <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-brand-orange shadow-lg">
                    <span className="text-lg font-black text-white">{index + 1}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-button bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    {stage.icon && (
                      <i className={`fa-jelly fa-${stage.icon} fa-xl text-brand-orange`}></i>
                    )}
                    <h3 className="text-xl font-black text-dark">{stage.title}</h3>
                  </div>
                  <p className="text-xl leading-relaxed text-dark/70">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros Serviços */}
      <ProcessCarousel
        items={solutions}
        label="Outros Serviços"
        labelIcon="suitcase"
        title="Serviços que também fazem parte do processo"
        description="Oferecemos um conjunto completo de serviços especializados em Blockchain & Web3 para transformar sua ideia em uma solução descentralizada de sucesso. Cada serviço é cuidadosamente integrado ao processo de desenvolvimento, garantindo segurança, escalabilidade e transparência em todas as etapas do projeto."
        bgColor="white"
        cardStyle="service"
      />

      {/* CTA */}
      <section className="bg-white pb-12 sm:pb-16">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
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
                  src="/images/img-cta-especialist.png"
                  alt="Equipe de especialistas em blockchain da Phurshell"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-cover"
                />
              </div>
              <p className="text-lg font-bold text-dark">
                Fale com um especialista agora
              </p>
            </div>
          </div>
        </div>
      </section>

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
                Qual blockchain devo escolher para o meu projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  A escolha da blockchain depende dos requisitos específicos do seu projeto. Ethereum oferece o maior ecossistema e segurança comprovada, sendo ideal para contratos complexos e DeFi. Solana se destaca em velocidade e baixo custo para aplicações com alto volume de transações. Polygon é uma excelente opção para projetos que precisam de compatibilidade com Ethereum a custos reduzidos. Durante a fase de definição de casos de uso, analisamos juntos os trade-offs de cada rede para encontrar a mais adequada ao seu negócio.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Quais são os custos de gas e como eles impactam o projeto?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Os custos de gas são taxas pagas para executar transações e contratos na blockchain. Eles variam conforme a rede escolhida e a complexidade das operações. Durante o desenvolvimento, otimizamos os contratos para minimizar o consumo de gas sem comprometer funcionalidade ou segurança. Também orientamos sobre estratégias como o uso de Layer 2 (Polygon, Arbitrum, Optimism) para reduzir custos em até 99% em comparação com a mainnet Ethereum. Estimamos os custos operacionais na fase de arquitetura para que você tenha previsibilidade financeira.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                Como garantem a segurança dos contratos inteligentes?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  A segurança é nossa prioridade máxima em projetos blockchain. Seguimos as melhores práticas da indústria, utilizamos padrões auditados como os da OpenZeppelin, e implementamos mecanismos de controle de acesso rigorosos. Realizamos análise estática com ferramentas como Slither e MythX, além de revisão manual por especialistas focados em vulnerabilidades comuns como reentrância, overflow aritmético e manipulação de oráculos. Nenhum contrato é implantado em mainnet sem passar pela nossa etapa de auditoria de segurança.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                A auditoria de smart contracts é obrigatória?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim, a auditoria de segurança é uma etapa obrigatória no nosso processo para qualquer contrato que será implantado em mainnet. Contratos inteligentes são imutáveis após o deploy — uma vulnerabilidade não corrigida pode resultar em perda irreversível de fundos. Realizamos auditoria interna em todos os projetos e, para contratos que gerenciam valores expressivos, recomendamos também uma auditoria externa por empresas especializadas como Trail of Bits, OpenZeppelin ou CertiK. O custo da auditoria é sempre menor do que o risco de um exploit.
                </p>
              </div>
            </details>

            <details className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between text-xl font-bold text-dark">
                É possível integrar blockchain em sistemas existentes?
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <div className="mt-4">
                <p className="text-xl leading-relaxed text-dark/70">
                  Sim, é totalmente possível e é um dos nossos serviços mais demandados. A integração Web3 permite adicionar funcionalidades blockchain — como pagamentos em criptomoedas, autenticação por carteira, rastreabilidade on-chain ou tokenização de ativos — em sistemas já existentes sem a necessidade de refatorar toda a aplicação. Utilizamos bibliotecas como ethers.js e web3.js para conectar o frontend, e desenvolvemos APIs intermediárias quando necessário para garantir compatibilidade com backends legados. O processo começa com uma análise técnica do sistema atual para definir a melhor estratégia de integração.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
