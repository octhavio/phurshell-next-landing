export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishedAt: string
  readTime: string
  image: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'desenvolvimento-de-software-multiplataforma-vantagens-e-desvantagens',
    title: 'Desenvolvimento de Software Multiplataforma: Vantagens e Desvantagens',
    excerpt:
      'Descubra os prós e contras do desenvolvimento multiplataforma e como escolher a melhor abordagem para seu projeto.',
    content: `
      <p>O desenvolvimento de software multiplataforma tem se tornado cada vez mais popular entre empresas que buscam maximizar seu alcance sem multiplicar custos. Neste artigo, vamos explorar as principais vantagens e desvantagens dessa abordagem.</p>

      <h3>O que é Desenvolvimento Multiplataforma?</h3>
      <p>O desenvolvimento multiplataforma permite que você crie aplicativos que funcionam em múltiplas plataformas (iOS, Android, Web) usando uma única base de código. Isso é possível através de frameworks como Flutter, React Native e Xamarin.</p>

      <h3>Principais Vantagens</h3>

      <h4>1. Alcance Amplo em Diversos Dispositivos</h4>
      <p>Com uma única base de código, você pode atingir usuários em iOS, Android e até mesmo na web. Isso significa que seu produto estará disponível para uma audiência muito maior sem precisar desenvolver versões separadas para cada plataforma.</p>

      <h4>2. Economia de Recursos e Tempo</h4>
      <p>Desenvolver uma vez e publicar em múltiplas plataformas resulta em economia significativa de tempo e recursos. Você precisará de menos desenvolvedores, menos tempo de desenvolvimento e menos manutenção de código.</p>

      <h4>3. Consistência na Experiência do Usuário</h4>
      <p>Manter uma experiência consistente entre plataformas se torna muito mais fácil quando você está trabalhando com uma única base de código. Isso garante que seus usuários tenham a mesma experiência premium, independentemente do dispositivo que estão usando.</p>

      <h3>Principais Desvantagens</h3>

      <h4>1. Possíveis Problemas de Performance</h4>
      <p>Embora os frameworks modernos tenham melhorado muito, aplicativos multiplataforma podem ter performance ligeiramente inferior aos nativos em cenários muito complexos ou que exigem muito do hardware.</p>

      <h4>2. Limitações de Recursos Específicos</h4>
      <p>Algumas funcionalidades muito específicas de cada plataforma podem não estar disponíveis ou exigir código nativo adicional. Isso pode adicionar complexidade ao projeto.</p>

      <h3>Principais Ferramentas e Frameworks</h3>
      <ul>
        <li><strong>Flutter:</strong> Framework do Google que usa a linguagem Dart, conhecido por sua performance excepcional e rica biblioteca de widgets.</li>
        <li><strong>React Native:</strong> Desenvolvido pelo Facebook, permite usar JavaScript e React para criar apps nativos.</li>
        <li><strong>Xamarin:</strong> Plataforma da Microsoft que utiliza C# e .NET para desenvolvimento multiplataforma.</li>
      </ul>

      <h3>Conclusão</h3>
      <p>O desenvolvimento multiplataforma é uma excelente escolha para a maioria dos projetos, especialmente quando você precisa lançar rapidamente e atingir o maior número possível de usuários. A chave é entender as necessidades específicas do seu projeto e escolher a abordagem que melhor se alinha com seus objetivos.</p>
    `,
    category: 'Desenvolvimento',
    categorySlug: 'desenvolvimento',
    author: {
      name: 'Phurshell',
      role: 'Equipe Técnica',
    },
    publishedAt: '2026-02-20',
    readTime: '8 min',
    image: '/blog/multiplataforma.jpg',
    featured: true,
  },
  {
    id: '2',
    slug: 'como-escolher-entre-app-nativo-e-hibrido',
    title: 'Como Escolher Entre App Nativo e Híbrido para Seu Negócio',
    excerpt:
      'Entenda as diferenças fundamentais entre desenvolvimento nativo e híbrido e tome a melhor decisão para seu projeto.',
    content: `
      <p>Uma das primeiras decisões ao iniciar um projeto de aplicativo mobile é escolher entre desenvolvimento nativo ou híbrido. Cada abordagem tem seus méritos e casos de uso ideais.</p>

      <h3>Desenvolvimento Nativo</h3>
      <p>Apps nativos são desenvolvidos especificamente para uma plataforma usando as linguagens e ferramentas oficiais: Swift/Objective-C para iOS e Kotlin/Java para Android.</p>

      <h4>Quando Escolher Nativo</h4>
      <ul>
        <li>Performance é crítica (jogos, apps de edição de vídeo/foto)</li>
        <li>Precisa acessar recursos avançados do hardware</li>
        <li>Orçamento permite desenvolver separadamente para cada plataforma</li>
        <li>Experiência de usuário específica da plataforma é essencial</li>
      </ul>

      <h3>Desenvolvimento Híbrido/Multiplataforma</h3>
      <p>Apps híbridos compartilham código entre plataformas usando frameworks como React Native ou Flutter.</p>

      <h4>Quando Escolher Híbrido</h4>
      <ul>
        <li>Precisa lançar rapidamente em múltiplas plataformas</li>
        <li>Orçamento é limitado</li>
        <li>O app não exige recursos muito específicos de cada plataforma</li>
        <li>Quer manter uma única equipe de desenvolvimento</li>
      </ul>

      <h3>Nossa Recomendação</h3>
      <p>Na Phurshell, recomendamos Flutter ou React Native para a maioria dos projetos, pois oferecem excelente performance e experiência de usuário enquanto mantêm os custos controlados. Para casos específicos que exigem máxima performance ou recursos muito avançados, desenvolvimento nativo pode ser a melhor escolha.</p>
    `,
    category: 'Desenvolvimento',
    categorySlug: 'desenvolvimento',
    author: {
      name: 'Phurshell',
      role: 'Equipe Técnica',
    },
    publishedAt: '2026-02-15',
    readTime: '6 min',
    image: '/blog/nativo-vs-hibrido.jpg',
    featured: true,
  },
  {
    id: '3',
    slug: 'transformacao-digital-na-saude-tendencias-2026',
    title: 'Transformação Digital na Saúde: Principais Tendências para 2026',
    excerpt:
      'Explore as inovações tecnológicas que estão revolucionando o setor de saúde e melhorando a experiência de pacientes e profissionais.',
    content: `
      <p>O setor de saúde está passando por uma transformação digital sem precedentes. Vamos explorar as principais tendências que estão moldando o futuro da healthtech.</p>

      <h3>Telemedicina e Consultas Virtuais</h3>
      <p>A telemedicina se consolidou como uma realidade permanente. Plataformas modernas estão oferecendo experiências cada vez mais completas, com integração de prontuários eletrônicos, prescrições digitais e acompanhamento remoto de pacientes.</p>

      <h3>Inteligência Artificial no Diagnóstico</h3>
      <p>IA está auxiliando médicos em diagnósticos mais precisos e rápidos, especialmente em áreas como radiologia e patologia. Algoritmos conseguem identificar padrões que podem passar despercebidos ao olho humano.</p>

      <h3>Prontuário Eletrônico Inteligente</h3>
      <p>Sistemas modernos de prontuário eletrônico vão além do armazenamento de dados, oferecendo insights, alertas de interações medicamentosas e sugestões baseadas em evidências científicas.</p>

      <h3>Wearables e Monitoramento Contínuo</h3>
      <p>Dispositivos vestíveis estão permitindo o monitoramento contínuo de sinais vitais, ajudando na prevenção e detecção precoce de problemas de saúde.</p>

      <h3>Conclusão</h3>
      <p>A transformação digital na saúde está apenas começando. Empresas que investirem em tecnologia agora estarão bem posicionadas para oferecer cuidados de saúde mais eficientes e acessíveis.</p>
    `,
    category: 'Healthtech',
    categorySlug: 'healthtech',
    author: {
      name: 'Phurshell',
      role: 'Equipe Técnica',
    },
    publishedAt: '2026-02-10',
    readTime: '7 min',
    image: '/blog/healthtech-trends.jpg',
    featured: false,
  },
  {
    id: '4',
    slug: 'mvp-como-validar-sua-ideia-sem-gastar-fortuna',
    title: 'MVP: Como Validar Sua Ideia de App Sem Gastar uma Fortuna',
    excerpt:
      'Aprenda a criar um MVP eficiente que valida sua ideia de negócio com investimento mínimo e máximo aprendizado.',
    content: `
      <p>Muitos empreendedores cometem o erro de investir pesado em um produto completo antes de validar se existe demanda real. O MVP (Minimum Viable Product) resolve esse problema.</p>

      <h3>O que é um MVP?</h3>
      <p>MVP é a versão mais simples do seu produto que ainda entrega valor ao usuário e permite testar suas hipóteses principais de negócio.</p>

      <h3>Por que Criar um MVP?</h3>
      <ul>
        <li><strong>Redução de Risco:</strong> Valide sua ideia antes de investir pesado</li>
        <li><strong>Feedback Rápido:</strong> Aprenda com usuários reais desde cedo</li>
        <li><strong>Economia de Recursos:</strong> Construa apenas o necessário</li>
        <li><strong>Time to Market:</strong> Lance mais rápido que a concorrência</li>
      </ul>

      <h3>Como Definir Seu MVP</h3>
      <h4>1. Identifique o Problema Principal</h4>
      <p>Qual é o problema #1 que você está resolvendo? Foque nisso.</p>

      <h4>2. Liste as Features Essenciais</h4>
      <p>Quais funcionalidades são absolutamente necessárias para resolver esse problema? Seja brutal ao cortar o que não é essencial.</p>

      <h4>3. Defina Métricas de Sucesso</h4>
      <p>Como você saberá se o MVP validou sua hipótese? Defina métricas claras antes de começar.</p>

      <h3>Erros Comuns ao Criar MVP</h3>
      <ul>
        <li>Adicionar features "just in case"</li>
        <li>Não definir métricas de sucesso</li>
        <li>Não coletar feedback estruturado</li>
        <li>Demorar demais para lançar</li>
      </ul>

      <h3>Nossa Abordagem</h3>
      <p>Na Phurshell, ajudamos clientes a validar ideias em 30-60 dias com MVPs focados. Usamos metodologias ágeis e frameworks modernos para entregar rápido sem comprometer qualidade.</p>
    `,
    category: 'Estratégia',
    categorySlug: 'estrategia',
    author: {
      name: 'Phurshell',
      role: 'Equipe de Produto',
    },
    publishedAt: '2026-02-05',
    readTime: '5 min',
    image: '/blog/mvp-guide.jpg',
    featured: true,
  },
  {
    id: '5',
    slug: 'ui-ux-diferencas-e-porque-ambos-importam',
    title: 'UI vs UX: Entendendo as Diferenças e Por Que Ambos São Cruciais',
    excerpt:
      'Descubra as diferenças entre UI e UX design e como cada um contribui para o sucesso do seu produto digital.',
    content: `
      <p>UI e UX são termos frequentemente usados de forma intercambiável, mas representam aspectos diferentes (e igualmente importantes) do design de produto.</p>

      <h3>O que é UX (User Experience)?</h3>
      <p>UX Design trata da experiência geral do usuário ao interagir com seu produto. É sobre resolver problemas, facilitar tarefas e criar jornadas fluidas.</p>

      <h4>UX Designer se Preocupa Com:</h4>
      <ul>
        <li>Pesquisa de usuários e entendimento de necessidades</li>
        <li>Arquitetura de informação</li>
        <li>Fluxos de usuário e jornadas</li>
        <li>Wireframes e protótipos</li>
        <li>Testes de usabilidade</li>
      </ul>

      <h3>O que é UI (User Interface)?</h3>
      <p>UI Design é sobre a aparência visual e interatividade. É o que o usuário vê e toca quando usa seu produto.</p>

      <h4>UI Designer se Preocupa Com:</h4>
      <ul>
        <li>Layout e composição visual</li>
        <li>Tipografia e hierarquia</li>
        <li>Paleta de cores</li>
        <li>Componentes e design system</li>
        <li>Animações e micro-interações</li>
      </ul>

      <h3>Por Que Ambos São Importantes?</h3>
      <p>Um produto com excelente UX mas UI pobre pode funcionar bem, mas não vai encantar. Por outro lado, um produto bonito (boa UI) mas com experiência confusa (UX ruim) vai frustrar usuários.</p>

      <h3>Como Trabalhamos na Phurshell</h3>
      <p>Nossos projetos sempre começam com pesquisa e UX. Entendemos os usuários, mapeamos jornadas e criamos wireframes. Só então partimos para UI, criando interfaces que sejam tanto bonitas quanto funcionais.</p>
    `,
    category: 'Design',
    categorySlug: 'design',
    author: {
      name: 'Phurshell',
      role: 'Equipe de Design',
    },
    publishedAt: '2026-01-30',
    readTime: '6 min',
    image: '/blog/ui-ux.jpg',
    featured: false,
  },
  {
    id: '6',
    slug: 'apis-rest-graphql-qual-escolher',
    title: 'APIs REST vs GraphQL: Qual Escolher para Seu Projeto?',
    excerpt:
      'Compare as duas abordagens mais populares para construção de APIs e entenda qual se adequa melhor às suas necessidades.',
    content: `
      <p>REST e GraphQL são as duas abordagens dominantes para construção de APIs modernas. Cada uma tem seus pontos fortes e casos de uso ideais.</p>

      <h3>REST: O Padrão Estabelecido</h3>
      <p>REST (Representational State Transfer) é uma arquitetura consolidada, com ampla adoção e compreensão no mercado.</p>

      <h4>Vantagens do REST</h4>
      <ul>
        <li>Simplicidade e curva de aprendizado suave</li>
        <li>Caching bem estabelecido</li>
        <li>Ótimas ferramentas e suporte</li>
        <li>Amplamente compreendido por desenvolvedores</li>
      </ul>

      <h4>Desvantagens do REST</h4>
      <ul>
        <li>Over-fetching (buscar mais dados que o necessário)</li>
        <li>Under-fetching (precisar fazer múltiplas chamadas)</li>
        <li>Versionamento pode ser complexo</li>
      </ul>

      <h3>GraphQL: O Novo Paradigma</h3>
      <p>GraphQL permite que clientes solicitem exatamente os dados que precisam em uma única requisição.</p>

      <h4>Vantagens do GraphQL</h4>
      <ul>
        <li>Busque exatamente o que precisa</li>
        <li>Uma única requisição para dados relacionados</li>
        <li>Forte tipagem e documentação automática</li>
        <li>Evolução da API sem versionamento</li>
      </ul>

      <h4>Desvantagens do GraphQL</h4>
      <ul>
        <li>Curva de aprendizado maior</li>
        <li>Caching mais complexo</li>
        <li>Pode ser overkill para APIs simples</li>
      </ul>

      <h3>Quando Usar Cada Uma?</h3>

      <h4>Use REST quando:</h4>
      <ul>
        <li>API é simples e bem definida</li>
        <li>Caching é crítico</li>
        <li>Time tem pouca experiência com GraphQL</li>
      </ul>

      <h4>Use GraphQL quando:</h4>
      <ul>
        <li>Clientes precisam de flexibilidade nos dados</li>
        <li>Múltiplos clientes com necessidades diferentes</li>
        <li>Quer evitar múltiplas versões da API</li>
      </ul>

      <h3>Nossa Recomendação</h3>
      <p>Na Phurshell, escolhemos a tecnologia baseada nas necessidades específicas do projeto. Para apps móveis com requisitos complexos de dados, GraphQL geralmente oferece melhor experiência de desenvolvimento.</p>
    `,
    category: 'Desenvolvimento',
    categorySlug: 'desenvolvimento',
    author: {
      name: 'Phurshell',
      role: 'Equipe de Backend',
    },
    publishedAt: '2026-01-25',
    readTime: '7 min',
    image: '/blog/rest-vs-graphql.jpg',
    featured: false,
  },
]

export const categories = [
  { name: 'Todos', slug: 'todos' },
  { name: 'Desenvolvimento', slug: 'desenvolvimento' },
  { name: 'Healthtech', slug: 'healthtech' },
  { name: 'Estratégia', slug: 'estrategia' },
  { name: 'Design', slug: 'design' },
]
