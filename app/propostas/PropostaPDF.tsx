'use client'

import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff', fontWeight: 700 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff', fontWeight: 900 },
  ],
})

const colors = {
  orange: '#FF5100',
  dark: '#19191A',
  gray: '#6B7280',
  lightGray: '#E5E7EB',
  bgLight: '#F9FAFB',
  white: '#FFFFFF',
}

// Types
interface PropostaClient {
  name: string
  contact: string
  email: string
}

interface PropostaProject {
  name: string
  description: string
  deadline: string
  value: number
  maintenance: number
  maintenance_hours: number | null
  infrastructure: number | null
}

interface PropostaScope {
  título: string
  itens: string[]
}

interface PropostaData {
  id: number
  code: string
  client: PropostaClient
  project: PropostaProject
  created_at: string
  validity_days: number
  scope: PropostaScope[]
}

interface PropostaPDFProps {
  proposta: PropostaData
  variant: 'simple' | 'complete'
}

// Helper functions
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

const getValidityDate = (proposta: PropostaData) => {
  const createdDate = new Date(proposta.created_at)
  const validityDate = new Date(createdDate.getTime() + proposta.validity_days * 24 * 60 * 60 * 1000)
  return validityDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

// Hardcoded data
const hardcodedData = {
  etapas: [
    { número: 1, título: 'Kickoff e Discovery', descrição: 'Alinhamento do projeto, definição detalhada do escopo e arquitetura técnica.' },
    { número: 2, título: 'UX/UI Design', descrição: 'Wireframes, protótipos interativos e design final de todas as telas.' },
    { número: 3, título: 'Desenvolvimento', descrição: 'Desenvolvimento com entregas incrementais e validação contínua.' },
    { número: 4, título: 'Testes e Publicação', descrição: 'QA completo, ajustes finais e publicação nas lojas.' },
  ],
  tecnologias: [
    { categoria: 'Apps Mobile', opcoes: 'React Native, Flutter, PWA' },
    { categoria: 'Backend', opcoes: 'Node.js, Laravel, Go, Python' },
    { categoria: 'Frontend', opcoes: 'React, Vue.js, Next.js' },
    { categoria: 'Banco de Dados', opcoes: 'PostgreSQL, MySQL, MongoDB' },
    { categoria: 'Cloud', opcoes: 'AWS, Google Cloud, Azure' },
  ],
  cases: [
    {
      nome: 'Psiapp',
      descrição: 'App que conecta psicólogos a pacientes. 3.000+ psicólogos ativos e 60.000+ pacientes.',
      tags: ['iOS', 'Android', 'Web'],
    },
    {
      nome: 'Diag',
      descrição: 'Plataforma de gestão de saúde com prontuários e IA. 16.000+ médicos usuários.',
      tags: ['iOS', 'Android', 'IA'],
    },
    {
      nome: 'Autoday',
      descrição: 'Insurtech de seguro sob demanda. Recebeu aportes milionários e foi vendida para o Sem Parar.',
      tags: ['iOS', 'Android'],
    },
  ],
  comoTrabalhamos: [
    { título: 'Descoberta de Produto', descrição: 'Mergulhamos no seu negócio para entender desafios e objetivos.' },
    { título: 'UX/UI Design', descrição: 'Desenhamos interfaces que seus usuários vão adorar usar.' },
    { título: 'Desenvolvimento Ágil', descrição: 'Sprints com entregas incrementais e código escalável.' },
    { título: 'Suporte Contínuo', descrição: 'Monitoramos, otimizamos e desenvolvemos novas features.' },
  ],
}

// ============================================
// SHARED STYLES - Clean document style
// ============================================

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 10,
    padding: 50,
    backgroundColor: colors.white,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.orange,
  },
  logo: {
    width: 100,
    height: 25,
  },
  headerRight: {
    textAlign: 'right',
  },
  headerLabel: {
    fontSize: 8,
    color: colors.gray,
    marginBottom: 2,
  },
  headerValue: {
    fontSize: 9,
    color: colors.dark,
    fontWeight: 700,
  },
  // Title section
  titleSection: {
    marginBottom: 25,
  },
  docType: {
    fontSize: 10,
    color: colors.orange,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  projectName: {
    fontSize: 22,
    fontWeight: 900,
    color: colors.dark,
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 11,
    color: colors.gray,
    lineHeight: 1.6,
  },
  // Info grid
  infoGrid: {
    flexDirection: 'row',
    marginBottom: 25,
    gap: 15,
  },
  infoBox: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.bgLight,
    borderRadius: 4,
  },
  infoLabel: {
    fontSize: 8,
    color: colors.gray,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.dark,
  },
  infoValueSmall: {
    fontSize: 9,
    color: colors.gray,
    marginTop: 2,
  },
  // Section
  sectionTitle: {
    fontSize: 14,
    fontWeight: 900,
    color: colors.dark,
    marginBottom: 12,
    marginTop: 20,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  sectionSubtitle: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.dark,
    marginBottom: 8,
    marginTop: 15,
  },
  // Text
  text: {
    fontSize: 10,
    color: colors.gray,
    lineHeight: 1.6,
  },
  textSmall: {
    fontSize: 9,
    color: colors.gray,
    lineHeight: 1.5,
  },
  // Scope
  scopeBlock: {
    marginBottom: 12,
  },
  scopeTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.dark,
    marginBottom: 6,
  },
  scopeItem: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 8,
  },
  scopeBullet: {
    fontSize: 10,
    color: colors.orange,
    marginRight: 8,
  },
  scopeText: {
    fontSize: 10,
    color: colors.gray,
    flex: 1,
    lineHeight: 1.4,
  },
  // Numbered list
  numberedItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  numberedNumber: {
    width: 20,
    fontSize: 10,
    fontWeight: 700,
    color: colors.orange,
  },
  numberedContent: {
    flex: 1,
  },
  numberedTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.dark,
    marginBottom: 2,
  },
  numberedDescription: {
    fontSize: 9,
    color: colors.gray,
    lineHeight: 1.5,
  },
  // Table style rows
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingVertical: 8,
  },
  tableLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.dark,
    width: 100,
  },
  tableValue: {
    fontSize: 9,
    color: colors.gray,
    flex: 1,
  },
  // Case cards
  caseCard: {
    padding: 12,
    backgroundColor: colors.bgLight,
    borderRadius: 4,
    marginBottom: 10,
  },
  caseName: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.dark,
    marginBottom: 4,
  },
  caseDescription: {
    fontSize: 9,
    color: colors.gray,
    lineHeight: 1.5,
    marginBottom: 6,
  },
  caseTags: {
    flexDirection: 'row',
    gap: 6,
  },
  caseTag: {
    fontSize: 8,
    color: colors.orange,
    fontWeight: 700,
  },
  // Investment
  investmentMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: colors.dark,
    borderRadius: 4,
    marginBottom: 10,
  },
  investmentLabel: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.white,
  },
  investmentSublabel: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 2,
  },
  investmentValue: {
    fontSize: 20,
    fontWeight: 900,
    color: colors.orange,
  },
  investmentSecondary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 4,
    marginBottom: 6,
  },
  investmentSecLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.dark,
  },
  investmentSecSublabel: {
    fontSize: 8,
    color: colors.gray,
  },
  investmentSecValue: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.dark,
  },
  investmentSecUnit: {
    fontSize: 9,
    color: colors.gray,
  },
  // Contact box
  contactBox: {
    marginTop: 25,
    padding: 15,
    backgroundColor: colors.bgLight,
    borderRadius: 4,
  },
  contactTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.dark,
    marginBottom: 6,
  },
  contactText: {
    fontSize: 9,
    color: colors.gray,
  },
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
  footerText: {
    fontSize: 8,
    color: colors.gray,
  },
  pageNumber: {
    fontSize: 8,
    color: colors.gray,
  },
})

// ============================================
// SHARED COMPONENTS
// ============================================

const Header = ({ proposta }: { proposta: PropostaData }) => (
  <View style={styles.header}>
    <Image src="/logos/img-navbar-logo-dark.svg" style={styles.logo} />
    <View style={styles.headerRight}>
      <Text style={styles.headerLabel}>Válida até</Text>
      <Text style={styles.headerValue}>{getValidityDate(proposta)}</Text>
    </View>
  </View>
)

const Footer = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>phurshell.com | contato@phurshell.com | (11) 99134-1871</Text>
    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
    />
  </View>
)

// ============================================
// SIMPLE PDF - 2 pages
// ============================================

const SimplePDF = ({ proposta }: { proposta: PropostaData }) => (
  <Document>
    {/* Page 1 - Intro & Scope */}
    <Page size="A4" style={styles.page}>
      <Header proposta={proposta} />

      <View style={styles.titleSection}>
        <Text style={styles.docType}>Proposta Comercial</Text>
        <Text style={styles.projectName}>{proposta.project.name}</Text>
        <Text style={styles.projectDescription}>{proposta.project.description}</Text>
      </View>

      <View style={styles.infoGrid}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Cliente</Text>
          <Text style={styles.infoValue}>{proposta.client.name}</Text>
          <Text style={styles.infoValueSmall}>{proposta.client.contact}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Prazo</Text>
          <Text style={styles.infoValue}>{proposta.project.deadline}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Produtos</Text>
          <Text style={styles.infoValue}>{proposta.scope.length}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Escopo do Projeto</Text>
      {proposta.scope.map((section, index) => (
        <View key={index} style={styles.scopeBlock}>
          <Text style={styles.scopeTitle}>{index + 1}. {section.título || 'Funcionalidades'}</Text>
          {section.itens.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.scopeItem}>
              <Text style={styles.scopeBullet}>•</Text>
              <Text style={styles.scopeText}>{item}</Text>
            </View>
          ))}
        </View>
      ))}

      <Footer />
    </Page>

    {/* Page 2 - Investment */}
    <Page size="A4" style={styles.page}>
      <Header proposta={proposta} />

      <Text style={styles.sectionTitle}>Investimento</Text>

      <View style={styles.investmentMain}>
        <View>
          <Text style={styles.investmentLabel}>Desenvolvimento Completo</Text>
          <Text style={styles.investmentSublabel}>Prazo: {proposta.project.deadline}</Text>
        </View>
        <Text style={styles.investmentValue}>{formatCurrency(proposta.project.value)}</Text>
      </View>

      <View style={styles.investmentSecondary}>
        <View>
          <Text style={styles.investmentSecLabel}>Manutenção Mensal</Text>
          <Text style={styles.investmentSecSublabel}>
            {proposta.project.maintenance_hours
              ? `${proposta.project.maintenance_hours}h de suporte e melhorias`
              : 'Suporte, correções e melhorias'}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={styles.investmentSecValue}>{formatCurrency(proposta.project.maintenance)}</Text>
          <Text style={styles.investmentSecUnit}>/mês</Text>
        </View>
      </View>

      {proposta.project.infrastructure && (
        <View style={styles.investmentSecondary}>
          <View>
            <Text style={styles.investmentSecLabel}>Infraestrutura</Text>
            <Text style={styles.investmentSecSublabel}>Servidores e serviços cloud</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={styles.investmentSecValue}>{formatCurrency(proposta.project.infrastructure)}</Text>
            <Text style={styles.investmentSecUnit}>/mês</Text>
          </View>
        </View>
      )}

      <Text style={styles.sectionTitle}>Condições de Pagamento</Text>
      <View style={styles.scopeBlock}>
        <View style={styles.scopeItem}>
          <Text style={styles.scopeBullet}>•</Text>
          <Text style={styles.scopeText}>Entrada + parcelas mensais durante o desenvolvimento</Text>
        </View>
        <View style={styles.scopeItem}>
          <Text style={styles.scopeBullet}>•</Text>
          <Text style={styles.scopeText}>Pagamento por etapa/sprint concluída</Text>
        </View>
        <View style={styles.scopeItem}>
          <Text style={styles.scopeBullet}>•</Text>
          <Text style={styles.scopeText}>Condições especiais para pagamento à vista</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Próximos Passos</Text>
      <View style={styles.numberedItem}>
        <Text style={styles.numberedNumber}>1.</Text>
        <Text style={styles.scopeText}>Agendar reunião de alinhamento para esclarecer dúvidas</Text>
      </View>
      <View style={styles.numberedItem}>
        <Text style={styles.numberedNumber}>2.</Text>
        <Text style={styles.scopeText}>Aprovação da proposta e assinatura do contrato</Text>
      </View>
      <View style={styles.numberedItem}>
        <Text style={styles.numberedNumber}>3.</Text>
        <Text style={styles.scopeText}>Kickoff do projeto e início da fase de discovery</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Dúvidas? Entre em contato</Text>
        <Text style={styles.contactText}>WhatsApp: (11) 99134-1871 | Email: contato@phurshell.com</Text>
      </View>

      <Footer />
    </Page>
  </Document>
)

// ============================================
// COMPLETE PDF - Flowing content
// ============================================

const CompletePDF = ({ proposta }: { proposta: PropostaData }) => (
  <Document>
    {/* Page 1 - Intro */}
    <Page size="A4" style={styles.page}>
      <Header proposta={proposta} />

      <View style={styles.titleSection}>
        <Text style={styles.docType}>Proposta Comercial</Text>
        <Text style={styles.projectName}>{proposta.project.name}</Text>
        <Text style={styles.projectDescription}>{proposta.project.description}</Text>
      </View>

      <View style={styles.infoGrid}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Cliente</Text>
          <Text style={styles.infoValue}>{proposta.client.name}</Text>
          <Text style={styles.infoValueSmall}>{proposta.client.contact}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Prazo</Text>
          <Text style={styles.infoValue}>{proposta.project.deadline}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Produtos</Text>
          <Text style={styles.infoValue}>{proposta.scope.length}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Cloud</Text>
          <Text style={styles.infoValue}>AWS</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quem é a Phurshell</Text>
      <Text style={styles.text}>
        Desde 2015 desenvolvemos produtos digitais sob medida para startups e empresas que querem crescer com tecnologia. Já ajudamos a lançar dezenas de aplicativos, plataformas e sistemas que hoje operam em produção, atendendo milhares de usuários reais.
      </Text>

      <View style={[styles.infoGrid, { marginTop: 15 }]}>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>50+</Text>
          <Text style={styles.infoValueSmall}>Projetos entregues</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>100+</Text>
          <Text style={styles.infoValueSmall}>Apps desenvolvidos</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValue}>10+</Text>
          <Text style={styles.infoValueSmall}>Anos de mercado</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Como Trabalhamos</Text>
      {hardcodedData.comoTrabalhamos.map((item, index) => (
        <View key={index} style={styles.numberedItem}>
          <Text style={styles.numberedNumber}>{index + 1}.</Text>
          <View style={styles.numberedContent}>
            <Text style={styles.numberedTitle}>{item.título}</Text>
            <Text style={styles.numberedDescription}>{item.descrição}</Text>
          </View>
        </View>
      ))}

      <Footer />
    </Page>

    {/* Page 2 - Cases & Tech */}
    <Page size="A4" style={styles.page}>
      <Header proposta={proposta} />

      <Text style={styles.sectionTitle}>Cases de Sucesso</Text>
      <Text style={[styles.text, { marginBottom: 12 }]}>
        Com mais de 100 apps desenvolvidos, confira alguns projetos que hoje atendem milhares de usuários:
      </Text>

      {hardcodedData.cases.map((caseItem, index) => (
        <View key={index} style={styles.caseCard}>
          <Text style={styles.caseName}>{caseItem.nome}</Text>
          <Text style={styles.caseDescription}>{caseItem.descrição}</Text>
          <View style={styles.caseTags}>
            {caseItem.tags.map((tag, tagIndex) => (
              <Text key={tagIndex} style={styles.caseTag}>{tag}{tagIndex < caseItem.tags.length - 1 ? ' • ' : ''}</Text>
            ))}
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Tecnologias</Text>

      {hardcodedData.tecnologias.map((tech, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableLabel}>{tech.categoria}</Text>
          <Text style={styles.tableValue}>{tech.opcoes}</Text>
        </View>
      ))}

      <Footer />
    </Page>

    {/* Page 3 - Scope, Cronograma, Infra (flowing) */}
    <Page size="A4" style={styles.page}>
      <Header proposta={proposta} />

      <Text style={styles.sectionTitle}>Escopo do Projeto</Text>

      {proposta.scope.map((section, index) => (
        <View key={index} style={styles.scopeBlock}>
          <Text style={styles.scopeTitle}>{index + 1}. {section.título || 'Funcionalidades'}</Text>
          {section.itens.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.scopeItem}>
              <Text style={styles.scopeBullet}>•</Text>
              <Text style={styles.scopeText}>{item}</Text>
            </View>
          ))}
        </View>
      ))}

      <Text style={styles.sectionTitle}>Cronograma</Text>
      <Text style={[styles.text, { marginBottom: 12 }]}>
        Estimamos {proposta.project.deadline} para desenvolvimento completo:
      </Text>

      {hardcodedData.etapas.map((etapa, index) => (
        <View key={index} style={styles.numberedItem}>
          <Text style={styles.numberedNumber}>{etapa.número}.</Text>
          <View style={styles.numberedContent}>
            <Text style={styles.numberedTitle}>{etapa.título}</Text>
            <Text style={styles.numberedDescription}>{etapa.descrição}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Infraestrutura</Text>
      <View style={[styles.infoGrid, { marginBottom: 0 }]}>
        <View style={styles.infoBox}>
          <Text style={styles.infoValueSmall}>API RESTful escalável</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValueSmall}>Banco de dados otimizado</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValueSmall}>Auto-scaling</Text>
        </View>
      </View>
      <View style={styles.infoGrid}>
        <View style={styles.infoBox}>
          <Text style={styles.infoValueSmall}>CDN para assets</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValueSmall}>Sistema de filas</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoValueSmall}>Monitoramento</Text>
        </View>
      </View>

      <Footer />
    </Page>

    {/* Page 4 - Investment */}
    <Page size="A4" style={styles.page}>
      <Header proposta={proposta} />

      <Text style={styles.sectionTitle}>Investimento</Text>

      <View style={styles.investmentMain}>
        <View>
          <Text style={styles.investmentLabel}>Desenvolvimento Completo</Text>
          <Text style={styles.investmentSublabel}>Prazo: {proposta.project.deadline}</Text>
        </View>
        <Text style={styles.investmentValue}>{formatCurrency(proposta.project.value)}</Text>
      </View>

      <View style={styles.investmentSecondary}>
        <View>
          <Text style={styles.investmentSecLabel}>Manutenção Mensal</Text>
          <Text style={styles.investmentSecSublabel}>
            {proposta.project.maintenance_hours
              ? `${proposta.project.maintenance_hours}h de suporte e melhorias`
              : 'Suporte, correções e melhorias'}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={styles.investmentSecValue}>{formatCurrency(proposta.project.maintenance)}</Text>
          <Text style={styles.investmentSecUnit}>/mês</Text>
        </View>
      </View>

      {proposta.project.infrastructure && (
        <View style={styles.investmentSecondary}>
          <View>
            <Text style={styles.investmentSecLabel}>Infraestrutura</Text>
            <Text style={styles.investmentSecSublabel}>Servidores e serviços cloud</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={styles.investmentSecValue}>{formatCurrency(proposta.project.infrastructure)}</Text>
            <Text style={styles.investmentSecUnit}>/mês</Text>
          </View>
        </View>
      )}

      <Text style={styles.sectionTitle}>Condições de Pagamento</Text>
      <View style={styles.scopeBlock}>
        <View style={styles.scopeItem}>
          <Text style={styles.scopeBullet}>•</Text>
          <Text style={styles.scopeText}>Entrada + parcelas mensais durante o desenvolvimento</Text>
        </View>
        <View style={styles.scopeItem}>
          <Text style={styles.scopeBullet}>•</Text>
          <Text style={styles.scopeText}>Pagamento por etapa/sprint concluída</Text>
        </View>
        <View style={styles.scopeItem}>
          <Text style={styles.scopeBullet}>•</Text>
          <Text style={styles.scopeText}>Condições especiais para pagamento à vista</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Próximos Passos</Text>
      <View style={styles.numberedItem}>
        <Text style={styles.numberedNumber}>1.</Text>
        <Text style={styles.scopeText}>Agendar reunião de alinhamento para esclarecer dúvidas</Text>
      </View>
      <View style={styles.numberedItem}>
        <Text style={styles.numberedNumber}>2.</Text>
        <Text style={styles.scopeText}>Aprovação da proposta e assinatura do contrato</Text>
      </View>
      <View style={styles.numberedItem}>
        <Text style={styles.numberedNumber}>3.</Text>
        <Text style={styles.scopeText}>Kickoff do projeto e início da fase de discovery</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Dúvidas? Entre em contato</Text>
        <Text style={styles.contactText}>WhatsApp: (11) 99134-1871 | Email: contato@phurshell.com</Text>
      </View>

      <Footer />
    </Page>
  </Document>
)

// ============================================
// MAIN EXPORT
// ============================================

export default function PropostaPDF({ proposta, variant }: PropostaPDFProps) {
  if (variant === 'simple') {
    return <SimplePDF proposta={proposta} />
  }
  return <CompletePDF proposta={proposta} />
}

export type { PropostaData, PropostaPDFProps }
