'use client'

import TransitionLink from '../../../src/components/TransitionLink'
import ProcessCarousel, { ProcessStage } from '../../../src/components/ProcessCarousel'
import WhyPhurshell from '../../../src/components/WhyPhurshell'
import ContactCTA from '../../../src/components/ContactCTA'
import ClientLogosCarousel from '../../../src/components/ClientLogosCarousel'
import CasesCarousel from '../../../src/components/CasesCarousel'
import TestimonialCarousel from '../../../src/components/TestimonialCarousel'

export default function ServicosBlockchain() {
  const processStages: ProcessStage[] = [
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
      title: 'Smart contracts',
      description: 'Desenvolvimento e auditoria de contratos inteligentes para automação segura de transações e regras de negócio.',
      icon: 'file',
      iconType: 'jelly',
    },
    {
      title: 'Aplicações descentralizadas (dApps)',
      description: 'Criação de aplicações Web3 com integração a blockchains e carteiras digitais.',
      icon: 'link',
      iconType: 'jelly',
    },
    {
      title: 'Tokenização & NFTs',
      description: 'Soluções de tokenização de ativos e criação de NFTs para novos modelos de negócio.',
      icon: 'money-bill',
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
      title: 'Auditoria de smart contracts',
      description: 'Análise completa de segurança em contratos inteligentes para identificar e corrigir vulnerabilidades.',
      icon: 'magnifying-glass',
    },
    {
      title: 'DeFi',
      description: 'Desenvolvimento de protocolos de finanças descentralizadas, DEXs e pools de liquidez.',
      icon: 'money-bill',
    },
    {
      title: 'DAO',
      description: 'Criação de organizações autônomas descentralizadas com governança on-chain e votação tokenizada.',
      icon: 'users',
    },
    {
      title: 'Carteiras digitais',
      description: 'Integração e desenvolvimento de carteiras digitais para custódia e gestão de ativos digitais.',
      icon: 'money-bill',
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
      icon: 'square',
    },
    {
      title: 'IPFS & armazenamento descentralizado',
      description: 'Armazenamento distribuído de dados e metadados usando IPFS, Filecoin e Arweave.',
      icon: 'database',
    },
    {
      title: 'Web3 UX/UI',
      description: 'Design de interfaces para dApps com foco na experiência de usuário em ambientes descentralizados.',
      icon: 'palette',
    },
    {
      title: 'Consultoria blockchain',
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

          <h2 className="mb-6 flex items-center gap-3 text-xl font-black uppercase tracking-wider text-brand-orange">
            Desenvolvimento de contratos inteligentes e aplicações Web3
          </h2>

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
                      src="/images/img-cta-especialist.webp"
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
                  src="/images/img-hero-blockchain_web3.webp"
                  alt="Solução blockchain desenvolvida pela Phurshell mostrando design moderno e funcional"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-12">
                  <div className="max-w-full space-y-2 sm:space-y-3 sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/img-cases-4traders-icon.webp"
                        alt="Logo do aplicativo 4Traders"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl"
                      />
                      <span className="text-lg font-black text-white sm:text-xl md:text-2xl">4Traders</span>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                        Construímos o 4Traders do zero: plataforma fintech completa com dados de mercado em tempo real, backend robusto, backoffice e apps iOS e Android para traders de ações.
                        <br />
                        <span className="font-bold">Fintech completa do conceito ao lançamento</span>
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
          labelIcon="link"
          title="Construímos o futuro descentralizado com segurança e transparência."
          description="Nossos serviços de Blockchain & Web3 abrangem desde smart contracts e dApps até tokenização e integração com protocolos descentralizados."
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
        showCta={true}
        description="Oferecemos um conjunto completo de serviços especializados em Blockchain & Web3 para transformar sua ideia em uma solução descentralizada de sucesso. Cada serviço é cuidadosamente integrado ao processo de desenvolvimento, garantindo segurança, escalabilidade e transparência em todas as etapas do projeto."
        bgColor="white"
        cardStyle="service"
      />

      {/* Process */}
      <ProcessCarousel
        items={processStages}
        label="Nosso Processo"
        labelIcon="clipboard"
        title="Da ideia ao lançamento"
        description="Você tem a visão. Agora você precisa de um parceiro especializado focado em entregar valor ao seu negócio e usuários. Com isso em mente, ajudaremos você com suas primeiras decisões críticas de produto, como escolha de blockchain, arquitetura de contratos, segurança e auditoria. E configuraremos sua solução descentralizada para o sucesso."
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
