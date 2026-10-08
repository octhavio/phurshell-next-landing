import type { Metadata } from 'next'

// Lojas: sem href = "Em breve".
const stores: { icon: string; label: string; hint: string; href?: string }[] = [
  { icon: 'fa-apple', label: 'App Store', hint: 'iPhone', href: 'https://apps.apple.com/br/app/wealthcraft/id6819423807' },
  { icon: 'fa-google-play', label: 'Google Play', hint: 'Android' },
]

export const metadata: Metadata = {
  title: 'WealthCraft | Comece do zero e construa um império',
  description:
    'Jogo de investimentos: toque para ganhar seus primeiros reais e invista em ações, imóveis, cripto e coleções até o primeiro bilhão. Desafie seus amigos no ranking.',
  alternates: { canonical: 'https://phurshell.com/wealthcraft/' },
  openGraph: {
    type: 'website',
    title: 'WealthCraft | Quem fica rico primeiro?',
    description: 'Toque, invista e construa seu império até o primeiro bilhão. Jogue comigo e veja quem chega lá primeiro.',
    url: 'https://phurshell.com/wealthcraft/',
    images: [{ url: '/wealthcraft/1-home.webp', width: 440, height: 956, alt: 'WealthCraft' }],
  },
}

const shots = [
  { src: '/wealthcraft/1-home.webp', alt: 'Tela inicial com a moeda e o saldo' },
  { src: '/wealthcraft/2-investimentos.webp', alt: 'Investimentos em ações' },
  { src: '/wealthcraft/3-imoveis.webp', alt: 'Imóveis para alugar' },
  { src: '/wealthcraft/4-colecoes.webp', alt: 'Coleção de carros' },
]

const features = [
  ['Comece do zero', 'Toque na moeda para ganhar seus primeiros reais, sem dinheiro nenhum.'],
  ['Invista de verdade (no jogo)', 'Mais de 100 empresas, renda fixa, fundos, cripto e 200 imóveis rendendo por hora.'],
  ['Coleções de luxo', 'Carros clássicos e superesportivos, relógios raros e cartas colecionáveis.'],
  ['Ranking de amigos', 'Compare seu patrimônio com os amigos do Game Center e veja quem lidera a semana.'],
]

const faq = [
  {
    q: 'Perdi meu progresso ao trocar de iPhone. Como recupero?',
    a: 'O progresso é salvo automaticamente no nosso servidor e vinculado à sua conta do Game Center. Entre com o mesmo Game Center no aparelho novo e abra o jogo com internet: o progresso é restaurado sozinho.',
  },
  {
    q: 'Comprei o Multiplicador permanente e ele não aparece.',
    a: 'Abra a página do Turbo (botão dourado no topo da tela inicial) e toque em “Restaurar compras”, usando a mesma conta Apple da compra.',
  },
  {
    q: 'O botão de anúncio diz “Sem anúncio agora”.',
    a: 'Às vezes não há anúncio disponível na sua região naquele momento. Tente de novo mais tarde.',
  },
  {
    q: 'Meus amigos não aparecem no ranking.',
    a: 'O ranking usa seus amigos do Game Center que também jogam WealthCraft. Confira se você permitiu o acesso aos amigos (Ajustes → Game Center) e convide-os pelo botão do ranking.',
  },
  {
    q: 'O dinheiro do jogo é real?',
    a: 'Não. WealthCraft é um jogo de simulação: empresas, ativos e valores são fictícios e nenhum dinheiro real é investido.',
  },
]

export default function WealthCraftPage() {
  return (
    <main className="bg-[#080B09] text-[#F2F4EF]">
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <img src="/wealthcraft/icon.webp" alt="" width={88} height={88} className="mx-auto rounded-[22px] lg:mx-0" />
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
            Comece do zero.
            <br />
            <span className="text-[#C8F169]">Chegue ao bilhão.</span>
          </h1>
          <p className="mt-6 text-lg text-[#C9D0C7]">
            Toque para ganhar seus primeiros reais, invista em ações, imóveis e cripto e construa seu império. Será que você
            fica rico antes dos seus amigos?
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {stores.map((s) => {
              const Tag = s.href ? 'a' : 'div'
              return (
              <Tag
                key={s.label}
                {...(s.href ? { href: s.href, target: '_blank', rel: 'noopener noreferrer' } : { 'aria-disabled': true })}
                className={`relative inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-[#111713] px-6 py-3 text-left${s.href ? ' transition hover:border-[#C8F169]' : ''}`}
              >
                <i className={`fa-brands ${s.icon} text-2xl text-[#C8F169]`} aria-hidden="true" />
                <span className="flex flex-col leading-tight">
                  <span className="text-xs text-[#8A938C]">{s.hint}</span>
                  <span className="text-lg font-extrabold">{s.label}</span>
                </span>
                {!s.href && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-[#E9C46A] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[#3B2C08]">
                    Em breve
                  </span>
                )}
              </Tag>
              )
            })}
          </div>
          <p className="mt-3 text-sm text-[#8A938C]">Grátis no iPhone · Android em breve</p>
        </div>
        <div className="flex flex-1 justify-center gap-4">
          {shots.slice(0, 2).map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={220}
              height={478}
              className={`w-40 rounded-[28px] border border-white/10 shadow-2xl sm:w-52 ${i === 1 ? 'mt-12' : ''}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-[#111713] p-6">
              <h2 className="text-xl font-extrabold text-[#E9C46A]">{title}</h2>
              <p className="mt-2 text-[#C9D0C7]">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
          {shots.map((s) => (
            <img key={s.src} src={s.src} alt={s.alt} width={220} height={478} className="w-44 flex-shrink-0 rounded-[24px] border border-white/10" />
          ))}
        </div>
      </section>

      <section id="suporte" className="bg-white text-gray-700">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-3xl font-black text-secondary">Suporte</h2>
          <p className="mt-4 text-lg text-gray-600">
            Dúvidas, problemas, sugestões ou pedidos sobre seus dados? Escreva para{' '}
            <a className="font-bold text-primary underline" href="mailto:contato@phurshell.com">contato@phurshell.com</a>.
            Respondemos em até 2 dias úteis. Dentro do jogo, você também pode enviar sugestões em{' '}
            <b>Configurações → Sugestões e reclamações</b>.
          </p>
          <dl className="mt-8 space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 p-6">
                <dt className="font-bold text-secondary">{item.q}</dt>
                <dd className="mt-2 text-gray-600">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-gray-600">
            Leia também a{' '}
            <a className="font-bold text-primary underline" href="/wealthcraft/privacidade/">Política de Privacidade do WealthCraft</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
