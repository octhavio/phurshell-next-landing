'use client'

import { Document, Page, Text, View, Image, Link, StyleSheet, Font, Svg, Path, Defs, RadialGradient, Stop, Rect } from '@react-pdf/renderer'
import { formatCurrency } from '../propostas/PropostaPDF'

// PDF que o lead baixa depois de enviar a calculadora (plano SEO, item 12).
// É peça de venda: capa com o número e o prazo, o que entra no valor, prova
// (cases e depoimento) e uma página de ação com WhatsApp. Escrito como estimativa.

export interface EstimativaItem {
  label: string
  value: number
}

export interface EstimativaSection {
  title: string
  items: EstimativaItem[]
}

interface EstimativaPDFProps {
  name: string
  description?: string
  category?: string
  value: number
  weeks: number
  sections: EstimativaSection[]
  // Prefixo das imagens: '' no navegador (caminho do site); caminho da pasta public fora dele.
  assetBase?: string
}

const WHATSAPP = '5511991341871'

// Nunito, a família do site. TTF completo: tem as aspas tipográficas.
Font.register({
  family: 'Nunito',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshRTM.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhRTM.ttf', fontWeight: 500 },
    { src: 'https://fonts.gstatic.com/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDGUmRTM.ttf', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDFwmRTM.ttf', fontWeight: 700 },
    { src: 'https://fonts.gstatic.com/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDDsmRTM.ttf', fontWeight: 800 },
    { src: 'https://fonts.gstatic.com/s/nunito/v32/XRXI3I6Li01BKofiOc5wtlZ2di8HDBImRTM.ttf', fontWeight: 900 },
  ],
})
// Sem hifenização: título quebrando em "estimati-va" fica com cara de erro.
Font.registerHyphenationCallback((word) => [word])

const c = {
  orange: '#FF5100',
  dark: '#161616',
  cream: '#F9FAFB',
  white: '#FFFFFF',
  text: '#1A1A1A',
  gray: '#6E6A65',
  muted: '#A8A39C',
  line: '#E5E7EB',
  beige: '#EFEAE3',
  sand: '#D3C9BE',
  peach: '#FF9D6B',
  soft: '#FFF0E8',
  softText: '#C2410C',
  darkLine: '#2C2B2A',
  darkCircle: '#2E2D2C',
}

// O que cada item da calculadora significa no dia a dia (rótulo do item -> descrição).
const ITEM_HINTS: Record<string, string> = {
  'Aplicativo para iOS (iPhones)': 'App publicado na App Store.',
  'Aplicativo para Android (smartphones)': 'App publicado na Google Play.',
  'Aplicativo para web': 'Acesso pelo navegador, sem instalar nada.',
  Logo: 'Marca própria para o app e para as lojas.',
  'Interface customizada': 'Telas desenhadas para a sua marca, em vez de um modelo pronto.',
  'Autenticação e login': 'Cadastro, entrada segura e recuperação de senha.',
  'Perfis de usuário': 'Cada cliente com seus dados e histórico.',
  'Envio de notificações': 'Lembretes e avisos direto no celular.',
  'Integração com redes sociais': 'Entrar e compartilhar com Google, Apple ou redes sociais.',
  Videoconferência: 'Chamadas de vídeo dentro do app.',
  'Pagamentos e transações': 'Cobrança dentro do app, com segurança.',
  'Serviço de assinatura': 'Planos com cobrança recorrente.',
  'Chat e mensagens': 'Conversa em tempo real dentro do app.',
  'Serviço de localização (Geolocalização)': 'Mapa, localização e rotas em tempo real.',
  'Buscas e filtros': 'Encontrar rápido o que procura, com busca e filtros.',
  'Sistema administrativo': 'Painel web para gerenciar usuários, conteúdo e relatórios.',
  'Site institucional': 'Página para apresentar o app e levar às lojas.',
  'Integrações com outros sistemas': 'Conexão com sistemas que você já usa, como ERP, CRM ou pagamentos.',
}

// Itens que costumam ficar para depois do lançamento: viram "pode entrar depois"
// e saem do valor da primeira versão.
const CAN_WAIT = new Set([
  'Logo',
  'Perfis de usuário',
  'Integração com redes sociais',
  'Buscas e filtros',
  'Site institucional',
])

const s = StyleSheet.create({
  page: { fontFamily: 'Nunito', fontSize: 10, color: c.text, backgroundColor: c.cream, paddingTop: 44, paddingBottom: 60, paddingHorizontal: 44 },
  footer: { position: 'absolute', bottom: 26, left: 44, right: 44, flexDirection: 'row', justifyContent: 'space-between', fontSize: 8, color: c.muted },
  eyebrow: { fontSize: 8.5, fontWeight: 700, color: c.orange, letterSpacing: 1.2, textTransform: 'uppercase' },
  lead: { fontSize: 10.5, color: c.gray, lineHeight: 1.55 },

  // Capa
  coverTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { width: 104, height: 26 },
  coverTag: { fontSize: 8.5, fontWeight: 600, color: c.gray, letterSpacing: 1.2 },
  hello: { fontFamily: 'Nunito', fontWeight: 400, fontSize: 21, marginTop: 70 },
  bigValue: { fontFamily: 'Nunito', fontWeight: 900, fontSize: 78, color: c.orange, letterSpacing: -1.5, marginTop: 2 },
  weeks: { fontFamily: 'Nunito', fontWeight: 500, fontSize: 19, lineHeight: 1.3, marginTop: 6 },
  told: { flexDirection: 'row', marginTop: 34 },
  toldBar: { width: 3, backgroundColor: c.orange, borderRadius: 2, marginRight: 14 },
  toldLabel: { fontSize: 7.5, fontWeight: 700, color: c.gray, letterSpacing: 1, marginBottom: 6 },
  toldText: { fontSize: 11.5, color: c.text, lineHeight: 1.55 },
  card: { backgroundColor: c.white, borderRadius: 14, padding: 20 },
  cardHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 },
  cardTitle: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 13 },
  cardNote: { fontSize: 8.5, color: c.gray },
  phases: { flexDirection: 'row' },
  phase: { paddingRight: 8 },
  phaseBar: { height: 6, borderRadius: 3, marginBottom: 10 },
  phaseName: { fontSize: 9.5, fontWeight: 700, color: c.text },
  phaseWeeks: { fontSize: 8.5, color: c.gray, marginTop: 1 },
  phaseOut: { fontSize: 8.5, color: c.text, marginTop: 8, lineHeight: 1.4 },
  stats: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: c.line, paddingTop: 18, marginTop: 18 },
  stat: { flex: 1 },
  statValue: { fontFamily: 'Nunito', fontWeight: 800, fontSize: 24 },
  statLabel: { fontSize: 9, color: c.gray, marginTop: 2 },
  fine: { fontSize: 8, color: c.gray, lineHeight: 1.5, marginTop: 14 },

  // Itens
  h1: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 25, letterSpacing: -0.3, marginTop: 4, marginBottom: 6 },
  groupTitle: { fontSize: 7.5, fontWeight: 700, color: c.gray, letterSpacing: 1.2, textTransform: 'uppercase', marginTop: 11, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: c.line },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: c.line },
  rowMain: { flex: 1, paddingRight: 14 },
  rowTitleLine: { flexDirection: 'row', alignItems: 'center' },
  rowTitle: { fontSize: 10.5, fontWeight: 600, color: c.text },
  rowHint: { fontSize: 9, color: c.gray, marginTop: 1 },
  rowValue: { fontSize: 10.5, fontWeight: 600, color: c.text },
  badge: { fontSize: 7.5, fontWeight: 600, color: c.softText, backgroundColor: c.soft, borderRadius: 8, paddingVertical: 2, paddingHorizontal: 7, marginLeft: 8 },
  total: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: c.dark, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 18, marginTop: 12 },
  totalLabel: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 13, color: c.white },
  totalSub: { fontSize: 8.5, color: c.muted, marginTop: 2 },
  totalValue: { fontFamily: 'Nunito', fontWeight: 800, fontSize: 22, color: c.white },
  smaller: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: c.soft, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 18, marginTop: 8 },
  smallerTitle: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 11.5, color: c.text },
  smallerText: { fontSize: 9, color: c.gray, lineHeight: 1.5, marginTop: 3, maxWidth: 300 },
  smallerLabel: { fontSize: 8.5, color: c.gray, textAlign: 'right' },
  smallerValue: { fontFamily: 'Nunito', fontWeight: 800, fontSize: 17, color: c.orange, textAlign: 'right' },

  // Prova
  caseCard: { flexDirection: 'row', alignItems: 'center', borderRadius: 14, overflow: 'hidden', paddingVertical: 14, paddingLeft: 22, paddingRight: 16, marginBottom: 8 },
  caseBg: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  caseLogo: { alignSelf: 'flex-start', height: 14, objectFit: 'contain' },
  caseTitle: { fontFamily: 'Nunito', fontWeight: 900, fontSize: 14.5, color: c.white, marginTop: 8, lineHeight: 1.2 },
  caseText: { fontSize: 8.5, color: c.white, opacity: 0.92, lineHeight: 1.45, marginTop: 4 },
  caseStats: { flexDirection: 'row', marginTop: 10 },
  caseStat: { marginRight: 16 },
  caseStatValue: { fontFamily: 'Nunito', fontWeight: 900, fontSize: 13, color: c.white },
  caseStatLabel: { fontSize: 7.5, color: c.white, opacity: 0.85 },
  caseHighlight: { alignSelf: 'flex-start', fontSize: 8.5, fontWeight: 800, color: c.white, lineHeight: 1.4, marginTop: 10, backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: 8, paddingVertical: 4, paddingHorizontal: 8 },
  caseBody: { flex: 1, paddingRight: 14 },
  phones: { flexDirection: 'row' },
  // 405x842 é a proporção das telas de /cases: largura e altura seguem essa razão.
  phone: { width: 75, height: 156, marginLeft: 6 },
  quote: { backgroundColor: c.orange, borderRadius: 14, padding: 18 },
  quoteMark: { fontFamily: 'Nunito', fontWeight: 800, fontSize: 26, color: c.white, lineHeight: 0.9 },
  quoteText: { fontSize: 11, fontWeight: 600, color: c.white, lineHeight: 1.55, marginTop: 4 },
  quoteWho: { fontSize: 9, fontWeight: 700, color: c.white, marginTop: 10 },

  // Ação
  ctaPage: { fontFamily: 'Nunito', backgroundColor: c.dark, color: c.white, paddingTop: 44, paddingBottom: 40, paddingHorizontal: 44, justifyContent: 'space-between' },
  ctaTitle: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 32, color: c.white, lineHeight: 1.12, letterSpacing: -0.4, marginTop: 8 },
  ctaLead: { fontSize: 11, color: '#C9C5BF', lineHeight: 1.6, marginTop: 12, maxWidth: 440 },
  steps: { marginTop: 24, borderTopWidth: 1, borderTopColor: c.darkLine },
  step: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: c.darkLine },
  stepNum: { width: 22, height: 22, borderRadius: 11, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  stepNumText: { fontSize: 9.5, fontWeight: 700, color: c.white },
  stepText: { fontSize: 11, color: c.white },
  contact: { backgroundColor: c.white, borderRadius: 14, padding: 16 },
  person: { flexDirection: 'row', alignItems: 'center' },
  photo: { width: 40, height: 40, borderRadius: 20, objectFit: 'cover' },
  personName: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 11.5, color: c.text },
  personRole: { fontSize: 8.5, color: c.gray, marginTop: 1 },
  button: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: c.orange, borderRadius: 10, paddingVertical: 14, paddingHorizontal: 16, marginTop: 14, textDecoration: 'none' },
  buttonTitle: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 13.5, color: c.white },
  buttonSub: { fontSize: 9, color: c.white, marginTop: 2 },
  pill: { flexDirection: 'row', alignItems: 'center', backgroundColor: c.white, borderRadius: 14, paddingVertical: 7, paddingHorizontal: 14 },
  pillText: { fontFamily: 'Nunito', fontWeight: 700, fontSize: 10, color: c.orange },
  links: { flexDirection: 'row', marginTop: 12 },
  linkText: { fontSize: 9, fontWeight: 600, color: c.text, marginRight: 18 },
  ctaFine: { fontSize: 7.5, color: '#8C8780', lineHeight: 1.5, marginTop: 12 },
})

// Mesmo visual e cores da seção de cases da home (app/page.tsx); números da proposta comercial (PropostaClient).
const CASES = [
  {
    slug: 'diag',
    title: 'Aplicativo de gestão clínica para médicos',
    text: 'Plataforma completa de gestão de saúde com geração de prontuários e receitas médicas, chat com IA para suporte diagnóstico.',
    stats: [['16.000+', 'médicos usuários']],
    from: '#F5F0FF',
    to: '#8046FB',
  },
  {
    slug: 'psiapp',
    title: 'O aplicativo que conecta psicólogos a pacientes',
    text: 'Desenvolvimento completo dos aplicativos para pacientes e psicólogos, backoffice para gestão de atendimentos e análise de dados.',
    stats: [['3.000+', 'psicólogos ativos'], ['60.000+', 'pacientes cadastrados'], ['20.000+', 'consultas realizadas']],
    from: '#FFF5F0',
    to: '#FD9773',
  },
  {
    slug: 'autoday',
    title: 'Seguro de carro sob demanda e mais acessível',
    text: 'MVP de insurtech que revolucionou o mercado com seguro intermitente: você paga apenas pelos dias que usar o veículo.',
    stats: [] as string[][],
    highlight: 'A empresa recebeu múltiplos aportes milionários e foi vendida para o Sem Parar.',
    from: '#EDE5F7',
    to: '#5E239F',
  },
]

// Divisão típica do prazo; o desenvolvimento fica com o que sobra.
const phasesFor = (weeks: number) => {
  const discovery = Math.max(1, Math.round(weeks * 0.1))
  const design = Math.max(1, Math.round(weeks * 0.2))
  const tests = Math.max(1, Math.round(weeks * 0.15))
  return [
    { name: 'Discovery', weeks: discovery, color: c.dark, out: 'Escopo e fluxos validados' },
    { name: 'Design', weeks: design, color: c.orange, out: 'Protótipo navegável' },
    { name: 'Desenvolvimento', weeks: weeks - discovery - design - tests, color: c.peach, out: 'Versões para testar ao longo do caminho' },
    { name: 'Testes e publicação', weeks: tests, color: c.sand, out: 'App nas lojas' },
  ]
}

const firstName = (name: string) => name.trim().split(/\s+/)[0] || 'Olá'

const Footer = ({ page }: { page: number }) => (
  <View style={s.footer} fixed>
    <Text>Phurshell · Estimativa do seu app</Text>
    <Text>{page} / 4</Text>
  </View>
)

export default function EstimativaPDF({ name, description, category, value, weeks, sections, assetBase = '' }: EstimativaPDFProps) {
  const img = (path: string) => `${assetBase}${path}`
  const phases = phasesFor(weeks)
  const canWait = sections.flatMap((section) => section.items).filter((item) => CAN_WAIT.has(item.label))
  const firstVersion = value - canWait.reduce((sum, item) => sum + item.value, 0)
  const whatsappText = encodeURIComponent(
    `Olá! Sou ${name.trim()} e fiz a estimativa na calculadora da Phurshell: ${formatCurrency(value)} em ${weeks} semanas. Quero conversar sobre o projeto.`
  )

  return (
    <Document title="Estimativa do seu app | Phurshell" author="Phurshell">
      {/* 1. Capa */}
      <Page size="A4" style={s.page}>
        <View style={s.coverTop}>
          <Image src={img('/logos/img-navbar-logo-dark.svg')} style={s.logo} />
          <Text style={s.coverTag}>ESTIMATIVA PERSONALIZADA</Text>
        </View>

        <Text style={s.hello}>{firstName(name)}, o seu app sai por cerca de</Text>
        <Text style={s.bigValue}>{formatCurrency(value)}</Text>
        <Text style={s.weeks}>em {weeks} semanas, do primeiro desenho ao app nas lojas.</Text>

        {description?.trim() ? (
          <View style={s.told}>
            <View style={s.toldBar} />
            <View style={{ flex: 1 }}>
              <Text style={s.toldLabel}>O QUE VOCÊ NOS CONTOU</Text>
              <Text style={s.toldText}>“{description.trim()}”</Text>
            </View>
          </View>
        ) : null}

        <View style={{ flexGrow: 1 }} />

        <View style={s.card} wrap={false}>
          <View style={s.cardHead}>
            <Text style={s.cardTitle}>Como as {weeks} semanas se dividem</Text>
            <Text style={s.cardNote}>uma única equipe do início ao fim</Text>
          </View>
          <View style={s.phases}>
            {/* Largura mínima: fase curta não pode encostar o nome na seguinte */}
            {phases.map((p) => (
              <View key={p.name} style={[s.phase, { flex: Math.max(p.weeks, 2.6) }]}>
                <View style={[s.phaseBar, { backgroundColor: p.color }]} />
                <Text style={s.phaseName}>{p.name}</Text>
                <Text style={s.phaseWeeks}>{p.weeks} sem.</Text>
                <Text style={s.phaseOut}>{p.out}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={s.stats}>
          {[
            ['11', 'anos de mercado'],
            ['100+', 'apps desenvolvidos'],
            ['50+', 'projetos entregues'],
          ].map(([v, l]) => (
            <View key={l} style={s.stat}>
              <Text style={s.statValue}>{v}</Text>
              <Text style={s.statLabel}>{l}</Text>
            </View>
          ))}
        </View>
        <Text style={s.fine}>
          Valor de referência calculado a partir das suas respostas, com a mesma tabela que usamos nas primeiras conversas.
          Na proposta, o escopo é detalhado e o valor e o prazo são fechados.
        </Text>
      </Page>

      {/* 2. O que está incluído */}
      <Page size="A4" style={[s.page, { backgroundColor: c.white }]}>
        <Text style={s.eyebrow}>Seu projeto{category ? ` · ${category}` : ''}</Text>
        <Text style={s.h1}>O que está incluído no valor</Text>
        <Text style={s.lead}>Cada item tem o valor de referência e o que ele significa no dia a dia do seu app.</Text>

        {sections.map((section) => (
          <View key={section.title} wrap={false}>
            <Text style={s.groupTitle}>{section.title}</Text>
            {section.items.map((item) => (
              <View key={item.label} style={s.row}>
                <View style={s.rowMain}>
                  <View style={s.rowTitleLine}>
                    <Text style={s.rowTitle}>{item.label}</Text>
                    {CAN_WAIT.has(item.label) ? <Text style={s.badge}>pode entrar depois</Text> : null}
                  </View>
                  {ITEM_HINTS[item.label] ? <Text style={s.rowHint}>{ITEM_HINTS[item.label]}</Text> : null}
                </View>
                <Text style={s.rowValue}>{formatCurrency(item.value)}</Text>
              </View>
            ))}
          </View>
        ))}

        <View style={s.total} wrap={false}>
          <View>
            <Text style={s.totalLabel}>Investimento estimado</Text>
            <Text style={s.totalSub}>{weeks} semanas · design, desenvolvimento e publicação</Text>
          </View>
          <Text style={s.totalValue}>{formatCurrency(value)}</Text>
        </View>

        {canWait.length > 0 && firstVersion > 0 ? (
          <View style={s.smaller} wrap={false}>
            <View>
              <Text style={s.smallerTitle}>Quer começar menor?</Text>
              <Text style={s.smallerText}>
                Deixar os itens marcados para depois do lançamento é o jeito mais comum de reduzir o investimento inicial.
              </Text>
            </View>
            <View>
              <Text style={s.smallerLabel}>primeira versão a partir de</Text>
              <Text style={s.smallerValue}>{formatCurrency(firstVersion)}</Text>
            </View>
          </View>
        ) : null}

        <Footer page={2} />
      </Page>

      {/* 3. Prova */}
      <Page size="A4" style={s.page}>
        <Text style={s.eyebrow}>Alguns cases</Text>
        <Text style={[s.h1, { fontSize: 21 }]}>Produtos digitais que ajudamos a levar do zero ao mercado</Text>
        <Text style={[s.lead, { marginBottom: 14 }]}>
          Aplicativos e plataformas que começaram como ideia e hoje atendem milhares de usuários.
        </Text>

        {CASES.map((item) => (
          <View key={item.slug} style={s.caseCard} wrap={false}>
            {/* Gradiente radial da home, com o ponto claro atrás dos celulares */}
            <Svg style={s.caseBg} viewBox="0 0 100 100" preserveAspectRatio="none">
              <Defs>
                <RadialGradient id={`g-${item.slug}`} cx="80%" cy="100%" r="75%">
                  <Stop offset="0%" stopColor={item.from} />
                  <Stop offset="100%" stopColor={item.to} />
                </RadialGradient>
              </Defs>
              <Rect x="0" y="0" width="100" height="100" fill={`url(#g-${item.slug})`} />
            </Svg>
            <View style={s.caseBody}>
              <Image src={img(`/images/pdf/logo-${item.slug}.png`)} style={s.caseLogo} />
              <Text style={s.caseTitle}>{item.title}</Text>
              <Text style={s.caseText}>{item.text}</Text>
              {item.stats.length > 0 ? (
                <View style={s.caseStats}>
                  {item.stats.map(([v, l]) => (
                    <View key={l} style={s.caseStat}>
                      <Text style={s.caseStatValue}>{v}</Text>
                      <Text style={s.caseStatLabel}>{l}</Text>
                    </View>
                  ))}
                </View>
              ) : null}
              {'highlight' in item && item.highlight ? <Text style={s.caseHighlight}>{item.highlight}</Text> : null}
            </View>
            <View style={s.phones}>
              {[1, 2].map((n) => (
                <Image key={n} src={img(`/images/pdf/phone-${item.slug}-${n}.png`)} style={s.phone} />
              ))}
            </View>
          </View>
        ))}

        <Footer page={3} />
      </Page>

      {/* 4. Ação */}
      <Page size="A4" style={s.ctaPage}>
        <View>
          <Text style={s.eyebrow}>Próximo passo</Text>
          <Text style={s.ctaTitle}>Vamos transformar essa estimativa em proposta?</Text>
          <Text style={s.ctaLead}>
            Uma conversa rápida para entender o seu negócio. Você sai com o escopo claro, o que dá para cortar na primeira
            versão e uma proposta com valor e prazo fechados.
          </Text>

          <View style={s.steps}>
            {[
              'Você chama no WhatsApp com esta estimativa',
              'Conversamos sobre o projeto e o que é essencial para lançar',
              'Você recebe a proposta com escopo, prazo e investimento definidos',
            ].map((text, i) => (
              <View key={text} style={s.step}>
                <View style={[s.stepNum, { backgroundColor: i === 0 ? c.orange : c.darkCircle }]}>
                  <Text style={s.stepNumText}>{i + 1}</Text>
                </View>
                <Text style={s.stepText}>{text}</Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <View style={s.quote} wrap={false}>
            <Text style={s.quoteMark}>“</Text>
            <Text style={s.quoteText}>
              Sabe quando você encontra parceiros que realmente vestem a camisa junto com você? A Phurshell é exatamente
              isso. Uma empresa cheia de ideias impressionantes, com uma equipe batalhadora e extremamente dedicada, e o
              melhor: sempre disposta a ajudar de verdade.
            </Text>
            <Text style={s.quoteWho}>Amanda Bernardes · Fundadora do Diag</Text>
          </View>
          <View style={[s.contact, { marginTop: 14 }]}>
            <View style={s.person}>
              <Image src={img('/images/pdf/gustavo.jpg')} style={s.photo} />
              <View style={{ marginLeft: 12 }}>
                <Text style={s.personName}>Gustavo Bittar</Text>
                <Text style={s.personRole}>Co-fundador da Phurshell · quem vai te atender</Text>
              </View>
            </View>
            <Link src={`https://wa.me/${WHATSAPP}?text=${whatsappText}`} style={s.button}>
              <View>
                <Text style={s.buttonTitle}>Falar com a Phurshell no WhatsApp</Text>
                <Text style={s.buttonSub}>(11) 99134-1871 · resposta no mesmo dia</Text>
              </View>
              <View style={s.pill}>
                <Text style={s.pillText}>Abrir</Text>
                {/* Seta desenhada: a Nunito não tem o caractere → */}
                <Svg width={10} height={8} viewBox="0 0 10 8" style={{ marginLeft: 5 }}>
                  <Path d="M0 4 H8.5 M5.5 1 L8.5 4 L5.5 7" stroke={c.orange} strokeWidth={1.6} fill="none" />
                </Svg>
              </View>
            </Link>
            <View style={s.links}>
              <Text style={s.linkText}>contato@phurshell.com</Text>
              <Text style={s.linkText}>phurshell.com</Text>
            </View>
          </View>
          <Text style={s.ctaFine}>
            Estimativa de referência gerada pela calculadora da Phurshell. Regras de negócio, integrações específicas, volume
            de usuários e nível de detalhe do design podem mudar valor e prazo.
          </Text>
        </View>
      </Page>
    </Document>
  )
}
