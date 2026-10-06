import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WealthCraft | Suporte',
  description: 'Suporte do jogo WealthCraft: dúvidas, problemas, sugestões e solicitações sobre seus dados.',
  alternates: { canonical: 'https://phurshell.com/wealthcraft/' },
}

const faq = [
  {
    q: 'Perdi meu progresso ao trocar de iPhone. Como recupero?',
    a: 'O progresso é salvo automaticamente no nosso servidor e vinculado à sua conta do Game Center. Entre com o mesmo Game Center no aparelho novo e abra o jogo com internet: o progresso é restaurado sozinho.',
  },
  {
    q: 'Comprei o Multiplicador permanente e ele não aparece.',
    a: 'Abra a loja do Turbo (botão dourado no topo da tela inicial) e toque em “Restaurar compras”, usando a mesma conta Apple da compra.',
  },
  {
    q: 'O botão de anúncio diz “Sem anúncio agora”.',
    a: 'Às vezes não há anúncio disponível na sua região naquele momento. Tente de novo mais tarde.',
  },
  {
    q: 'O dinheiro do jogo é real?',
    a: 'Não. WealthCraft é um jogo de simulação: empresas, ativos e valores são fictícios e nenhum dinheiro real é investido.',
  },
]

export default function WealthCraftSupportPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">WealthCraft</p>
        <h1 className="mt-2 text-4xl font-black text-secondary sm:text-5xl">Suporte</h1>
        <p className="mt-6 text-lg text-gray-600">
          Dúvidas, problemas, sugestões ou pedidos sobre seus dados? Fale com a gente pelo e-mail{' '}
          <a className="font-bold text-primary underline" href="mailto:contato@phurshell.com">contato@phurshell.com</a>.
          Respondemos em até 2 dias úteis.
        </p>
        <p className="mt-4 text-gray-600">
          Dentro do jogo você também pode enviar sugestões e reclamações em <b>Configurações → Sugestões e reclamações</b>.
        </p>

        <h2 className="mt-14 text-2xl font-extrabold text-secondary">Perguntas frequentes</h2>
        <dl className="mt-6 space-y-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-gray-200 p-6">
              <dt className="font-bold text-secondary">{item.q}</dt>
              <dd className="mt-2 text-gray-600">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-14 text-gray-600">
          Leia também a{' '}
          <a className="font-bold text-primary underline" href="/wealthcraft/privacidade/">Política de Privacidade do WealthCraft</a>.
        </p>
      </section>
    </main>
  )
}
