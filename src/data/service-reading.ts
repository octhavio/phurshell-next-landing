// Mapa do plano SEO de out/2026: artigos que cada pagina de servico linka.
// Fica estatico (e nao via fetch) para o link sair no HTML e o crawler enxergar.
export const SERVICE_READING: Record<string, { slug: string; title: string }[]> = {
  'desenvolvimento-de-aplicativos': [
    { slug: 'terceirizacao-desenvolvimento-aplicativos-custos-vantagens', title: "Terceirização de desenvolvimento de aplicativos: custos reais, vantagens e como escolher a parceira certa" },
    { slug: 'como-escolher-a-melhor-empresa-criadora-de-app-para-o-seu-projeto', title: "Como escolher a melhor empresa criadora de app para o seu projeto" },
    { slug: 'guia-completo-sobre-desenvolvimento-de-aplicativos-android-para-empresas', title: "Guia completo sobre desenvolvimento de aplicativos Android para empresas" },
    { slug: 'quanto-tempo-leva-para-desenvolver-um-app-para-android-e-ios', title: "Quanto tempo leva para desenvolver um app para Android e iOS" },
    { slug: 'como-escolher-entre-app-nativo-web-app-ou-hibrido', title: "Como escolher entre app nativo, web app ou híbrido para seu negócio" },
  ],
  'consultoria-para-startups': [
    { slug: 'como-definir-escopo-mvp-sem-desperdicar-dinheiro', title: "Como definir o escopo de um MVP sem desperdiçar dinheiro" },
    { slug: 'o-que-investidores-esperam-ver-em-um-mvp-de-sucesso', title: "O que investidores esperam ver em um MVP de sucesso" },
    { slug: 'validar-escopo-lancar-software-90-dias', title: "Como validar escopo e lançar software em até 90 dias usando a filosofia enxuta" },
    { slug: 'como-garantir-product-market-fit-para-software-no-brasil', title: "Como garantir product market fit para software no Brasil" },
    { slug: 'quanto-custa-construir-um-mvp', title: "Quanto custa construir um MVP? Guia prático e realista" },
  ],
  'desenvolvimento-web-e-saas': [
    { slug: 'o-que-e-desenvolvimento-de-sistemas-e-como-ele-pode-transformar-seu-negocio', title: "O que é desenvolvimento de sistemas e como ele pode transformar seu negócio" },
    { slug: 'sinais-de-que-voce-precisa-de-um-sistema-proprio', title: "Sinais de que você precisa de um sistema próprio" },
    { slug: 'desenvolvimento-de-software-multiplataforma-vantagens-e-desvantagens', title: "Desenvolvimento de software multiplataforma: vantagens e desvantagens" },
    { slug: 'graphql-vs-rest-como-escolher-a-api-certa-para-seu-negocio', title: "GraphQL vs REST: como escolher a API certa para seu negócio" },
  ],
  'solucoes-digitais-para-negocios': [
    { slug: 'erp-pronto-ou-sob-medida-como-escolher', title: "ERP pronto ou sob medida? Como escolher a solução que realmente economiza seu negócio" },
    { slug: 'sinais-de-que-voce-precisa-de-um-sistema-proprio', title: "Sinais de que você precisa de um sistema próprio" },
    { slug: 'transformacao-digital-superar-desafios-solucoes-praticas', title: "Transformação digital: como superar os maiores desafios e aplicar soluções práticas" },
    { slug: 'processos-automatizados-com-ia', title: "10 processos da sua empresa que podem ser automatizados com IA" },
  ],
  'engenharia-e-arquitetura-de-software': [
    { slug: 'microservicos-ou-monolito-quando-cada-arquitetura-compensa', title: "Microserviços ou monolito: quando cada arquitetura compensa" },
    { slug: 'como-escolher-padrao-arquitetura-software-ideal', title: "Como escolher o padrão de arquitetura de software ideal para seu projeto" },
    { slug: 'divida-tecnica-como-se-acumula-quanto-custa-quando-pagar', title: "Dívida técnica: como se acumula, quanto custa e quando pagar" },
    { slug: 'modernizacao-de-sistemas-legados-sem-interromper-operacao', title: "Modernização de sistemas legados sem interromper a operação" },
    { slug: 'arquitetura-kubernetes-lideres-engenharia', title: "Arquitetura kubernetes: o que líderes de engenharia precisam saber" },
  ],
  'inteligencia-artificial-e-automacao': [
    { slug: 'processos-automatizados-com-ia', title: "10 processos da sua empresa que podem ser automatizados com IA" },
    { slug: 'inteligencia-artificial-em-producao-como-transformar-prototipos-em-resultados-reais', title: "Inteligência artificial em produção: como transformar protótipos em resultados reais" },
    { slug: 'como-integrar-ia-no-desenvolvimento-do-seu-aplicativo-movel', title: "Como integrar IA no desenvolvimento do seu aplicativo móvel" },
    { slug: 'machine-learning-vs-inteligencia-artificial-quando-comprar-ou-construir', title: "Machine Learning vs Inteligência Artificial: Quando Comprar ou Construir sua Solução no Brasil" },
    { slug: 'governanca-de-dados-para-ia', title: "Governança de dados para IA: como preparar uma base realmente confiável" },
  ],
  'qualidade-de-software-e-seguranca': [
    { slug: 'testes-automatizados-reduzem-defeitos-e-retrabalho', title: "Testes automatizados reduzem defeitos e retrabalho? O que a evidência permite afirmar" },
    { slug: 'lgpd-para-aplicativos-como-adequar-se', title: "LGPD para aplicativos: como garantir a conformidade sem comprometer o negócio" },
    { slug: 'lgpd-na-pratica-erros-silenciosos-empresas-sistemas', title: "LGPD na prática: erros silenciosos que expõem empresas e sistemas" },
    { slug: 'orcamento-de-ciberseguranca-como-transformar-protecao-em-crescimento', title: "Orçamento de cibersegurança: como transformar proteção em capacidade de crescimento" },
  ],
  'design-de-produto-e-experiencia': [
    { slug: 'como-melhorar-experiencia-usuario-aplicativos', title: "Como melhorar a experiência do usuário em aplicativos e aumentar resultados" },
    { slug: 'usabilidade-mobile-como-melhorar', title: "Usabilidade mobile: como melhorar a experiência do usuário" },
    { slug: 'teste-de-usabilidade-guia-pratico-custos-erros-comuns', title: "Teste de usabilidade: guia prático, custos e erros comuns no Brasil" },
    { slug: 'redesign-de-aplicativo-quando-por-que-como-fazer', title: "Redesign de aplicativo: quando, por que e como fazer sem surpresas" },
    { slug: 'design-thinking-para-desenvolvimento-de-software', title: "Design thinking para desenvolvimento de software: como aplicar e evitar erros comuns" },
  ],
  'estrategia-de-produto-digital': [
    { slug: 'gestao-de-produtos-de-software-pilares-desafios-dicas', title: "Gestão de produtos de software: pilares, desafios e dicas práticas" },
    { slug: 'erros-gestao-produtos-digitais-terceirizados', title: "Erros comuns na gestão de produtos digitais terceirizados" },
    { slug: 'squad-as-a-service-quando-como-contratar', title: "Squad as a service: quando e como contratar" },
    { slug: 'kpis-essenciais-produtividade-desenvolvimento-software', title: "KPIs essenciais para medir a produtividade no desenvolvimento de software" },
    { slug: 'ciclo-tres-meses-desenvolvimento-software', title: "Ciclo de três meses no desenvolvimento de software: por que funciona e como aplicar" },
  ],
}
