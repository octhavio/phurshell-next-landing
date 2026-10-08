import TransitionLink from './TransitionLink'

// Guia abaixo da calculadora (plano SEO out/2026, item 12): mira "quanto custa um aplicativo".
// Os valores dos exemplos saem da tabela da propria calculadora (app/calculadora/page.tsx);
// se a tabela mudar, refazer as contas aqui.

const EXEMPLOS = [
  {
    nome: 'App simples',
    valor: 'R$ 38 mil a R$ 51 mil',
    prazo: '12 semanas',
    escopo: 'Uma plataforma (iOS ou Android), interface própria, login, perfil e notificações. Com painel administrativo, chega perto de R$ 51 mil.',
  },
  {
    nome: 'App de média complexidade',
    valor: 'cerca de R$ 89 mil',
    prazo: '18 semanas',
    escopo: 'iOS e Android, interface própria, login, perfil, notificações, pagamentos, buscas e filtros, além do painel administrativo.',
  },
  {
    nome: 'Marketplace ou app de entrega',
    valor: 'a partir de R$ 155 mil',
    prazo: '20 semanas ou mais',
    escopo: 'iOS, Android e web, logo e interface, pagamentos, chat, geolocalização, buscas, painel administrativo, site e integrações com sistemas de terceiros.',
  },
]

const FATORES = [
  ['Número de plataformas', 'Cada plataforma (iOS, Android, web) tem tela, teste e publicação próprios. Um app multiplataforma, feito com React Native ou Flutter, reduz parte desse custo, mas não zera.'],
  ['Design sob medida', 'Uma interface própria custa mais que um layout pronto, e costuma se pagar em conversão e retenção. É o item que mais diferencia o app dos concorrentes.'],
  ['Pagamentos e assinaturas', 'Cobrança envolve regras das lojas, segurança, estornos e conciliação. Na calculadora, pagamentos e assinatura estão entre os itens mais caros.'],
  ['Chat, vídeo e tempo real', 'Mensagens e videochamadas exigem servidor sempre conectado, fila de notificações e cuidado com escala. Videoconferência é a funcionalidade mais cara da tabela.'],
  ['Geolocalização', 'Mapa, rota e rastreamento em tempo real (como em apps de entrega e mobilidade) somam custo de desenvolvimento e de APIs de mapas.'],
  ['Painel administrativo', 'Quase todo app de negócio precisa de um painel para cadastrar conteúdo, atender usuários e tirar relatórios. É um sistema web à parte.'],
  ['Integrações', 'Conectar o app a ERP, CRM, gateway de pagamento ou sistemas legados é o item mais caro da calculadora, porque depende da qualidade da API do outro lado.'],
]

// Mesmos valores da calculadora (valor da tabela x multiplicador 0,85).
const ITENS: [string, string][] = [
  ['App para iOS', 'R$ 8.500'],
  ['App para Android', 'R$ 8.500'],
  ['App para web', 'R$ 6.375'],
  ['Logo', 'R$ 4.250'],
  ['Interface sob medida', 'R$ 12.750'],
  ['Autenticação e login', 'R$ 8.500'],
  ['Perfis de usuário', 'R$ 4.250'],
  ['Notificações', 'R$ 4.250'],
  ['Integração com redes sociais', 'R$ 8.500'],
  ['Chat e mensagens', 'R$ 12.750'],
  ['Geolocalização', 'R$ 12.750'],
  ['Buscas e filtros', 'R$ 12.750'],
  ['Pagamentos e transações', 'R$ 17.000'],
  ['Serviço de assinatura', 'R$ 17.000'],
  ['Videoconferência', 'R$ 17.000'],
  ['Painel administrativo', 'R$ 12.750'],
  ['Site institucional', 'R$ 4.250'],
  ['Integração com sistemas de terceiros', 'R$ 25.500'],
]

export const CALCULADORA_FAQ: { q: string; a: string }[] = [
  {
    q: 'Quanto custa um aplicativo simples?',
    a: 'Pela nossa calculadora, um app simples para uma plataforma, com interface própria, login, perfil e notificações, fica em torno de R$ 38 mil e 12 semanas. Com painel administrativo, chega perto de R$ 51 mil.',
  },
  {
    q: 'Por que os orçamentos de aplicativo variam tanto?',
    a: 'Porque o mesmo nome esconde escopos muito diferentes. Plataformas, funcionalidades, integrações e o nível de design mudam o número de horas de trabalho. Compare propostas pelo escopo detalhado, não só pelo preço final.',
  },
  {
    q: 'Quanto tempo leva para desenvolver um app?',
    a: 'Projetos simples levam cerca de 12 semanas; apps de média complexidade, de 16 a 18 semanas; marketplaces e apps com muitas integrações, 20 semanas ou mais. O prazo final depende do escopo fechado na proposta.',
  },
  {
    q: 'Fazer para iOS e Android custa o dobro?',
    a: 'Não necessariamente. Com tecnologias multiplataforma como React Native ou Flutter, boa parte do código é compartilhada. Ainda assim há custo extra de testes, ajustes de cada sistema e publicação nas duas lojas.',
  },
  {
    q: 'Quanto custa manter um aplicativo depois de pronto?',
    a: 'A manutenção cobre servidores, correções, atualizações para novas versões do iOS e do Android e pequenas melhorias. Uma referência comum de mercado é reservar por ano de 15% a 20% do valor do desenvolvimento. A Phurshell oferece planos de suporte com custo definido conforme o nível de atendimento.',
  },
  {
    q: 'Dá para começar com um MVP mais barato?',
    a: 'Sim, e é o caminho que recomendamos para validar uma ideia. O MVP reúne só as funcionalidades que provam o valor do produto, lança mais rápido e usa o retorno dos primeiros usuários para decidir o que construir depois.',
  },
  {
    q: 'O valor da calculadora é uma proposta?',
    a: 'Não. A calculadora dá uma estimativa de referência. O preço e o prazo do projeto saem de uma proposta formal, feita depois de uma conversa para detalhar o escopo, sem custo.',
  },
]

export default function CalculadoraGuia() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-4xl px-6 sm:px-10 [&_h2]:mb-6 [&_h2]:mt-16 [&_h2]:text-4xl [&_h2]:font-black [&_h2]:text-dark [&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-dark [&_p]:mt-4 [&_p]:text-xl [&_p]:leading-relaxed [&_p]:text-dark/70">
        <h2 className="!mt-0">Quanto custa um aplicativo em 2026?</h2>
        <p>
          Um aplicativo sob medida custa a partir de R$ 38 mil para um projeto simples e passa de R$ 150 mil para um
          marketplace ou app de entrega. A diferença vem de três coisas: em quantas plataformas o app vai rodar, quais
          funcionalidades ele tem e com quais sistemas ele precisa conversar. A calculadora acima soma esses itens com a
          mesma tabela que usamos para fazer as primeiras estimativas na Phurshell.
        </p>
        <p>
          Abaixo explicamos o que pesa no preço, quanto tempo cada tipo de projeto leva, quanto custa manter o app depois
          do lançamento e como comparar orçamentos de empresas diferentes.
        </p>

        <h2>Faixas de preço por tipo de app</h2>
        <p>Valores calculados pela própria calculadora, para projetos típicos de cada faixa:</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {EXEMPLOS.map((e) => (
            <div key={e.nome} className="flex flex-col rounded-button border border-dark/10 p-6">
              <h3>{e.nome}</h3>
              <p className="!mt-3 !text-2xl font-black !text-brand-orange">{e.valor}</p>
              <p className="!mt-1 !text-base font-bold !text-dark/60">{e.prazo}</p>
              <p className="!text-base">{e.escopo}</p>
            </div>
          ))}
        </div>
        <p>
          Quer o detalhe de um caso real? Veja{' '}
          <TransitionLink href="/insights/quanto-custa-criar-app-igual-ao-ifood/" className="font-bold text-brand-orange underline">
            quanto custa criar um app igual ao iFood
          </TransitionLink>{' '}
          e{' '}
          <TransitionLink href="/insights/quanto-custa-construir-um-mvp/" className="font-bold text-brand-orange underline">
            quanto custa construir um MVP
          </TransitionLink>
          .
        </p>

        <h2>O que encarece um aplicativo</h2>
        <p>
          O preço de um app é, no fim, o número de horas de design, desenvolvimento e teste que ele exige. Estes são os
          itens que mais mexem nessa conta:
        </p>
        <dl className="mt-8 divide-y divide-dark/10">
          {FATORES.map(([t, d]) => (
            <div key={t} className="py-5">
              <dt className="text-xl font-black text-dark">{t}</dt>
              <dd className="mt-2 text-xl leading-relaxed text-dark/70">{d}</dd>
            </div>
          ))}
        </dl>
        <p>
          A categoria do app também conta. Um app de agendamento e um marketplace podem ter o mesmo número de telas, mas o
          marketplace tem dois tipos de usuário, pagamento dividido entre vendedores e regras de comissão. Por isso a
          calculadora pergunta a categoria antes das funcionalidades.
        </p>

        <h2>Quanto custa cada funcionalidade</h2>
        <p>
          Estes são os valores de referência que a calculadora soma para cada item. Eles servem para entender o peso de
          cada escolha no orçamento; a proposta final considera também a categoria do app e as regras de negócio.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left text-xl">
            <thead>
              <tr className="border-b-2 border-dark">
                <th className="py-3 pr-4 font-black text-dark">Item</th>
                <th className="py-3 text-right font-black text-dark">Valor de referência</th>
              </tr>
            </thead>
            <tbody>
              {ITENS.map(([item, valor]) => (
                <tr key={item} className="border-b border-dark/10">
                  <td className="py-3 pr-4 text-dark/70">{item}</td>
                  <td className="py-3 text-right font-bold tabular-nums text-dark">{valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Repare que a funcionalidade pesa mais que a plataforma: um app com pagamentos, chat e geolocalização custa mais
          pelas regras e pela infraestrutura por trás dessas telas do que pelo fato de rodar no iPhone ou no Android.
        </p>

        <h2>Quanto tempo leva para desenvolver</h2>
        <p>
          O prazo acompanha o tamanho do escopo. Na nossa experiência com mais de 100 apps entregues, projetos de até
          R$ 60 mil ficam prontos em cerca de 12 semanas, os de média complexidade levam de 16 a 18 semanas e os maiores,
          20 semanas ou mais.
        </p>
        <p>
          Esse tempo inclui descoberta, design, desenvolvimento, testes e publicação nas lojas. A Apple e o Google revisam
          cada versão antes de liberar, o que soma de um a alguns dias no fim do projeto. Para entender cada etapa, leia{' '}
          <TransitionLink href="/insights/quanto-tempo-leva-para-desenvolver-um-app-para-android-e-ios/" className="font-bold text-brand-orange underline">
            quanto tempo leva para desenvolver um app para Android e iOS
          </TransitionLink>
          .
        </p>

        <h2>Nativo, híbrido ou web: o impacto no custo</h2>
        <p>
          Um app nativo é escrito separadamente para iOS (Swift) e Android (Kotlin). Entrega a melhor performance e acesso
          total aos recursos do aparelho, mas dobra boa parte do trabalho. Um app multiplataforma (React Native ou Flutter)
          compartilha a maior parte do código entre os dois sistemas e costuma ser a escolha mais econômica para startups e
          empresas que precisam estar nas duas lojas.
        </p>
        <p>
          Um web app roda no navegador, não passa pela revisão das lojas e é o mais barato de manter, mas tem acesso
          limitado a câmera, notificações e funcionamento offline. Comparamos as três opções em{' '}
          <TransitionLink href="/insights/como-escolher-entre-app-nativo-web-app-ou-hibrido/" className="font-bold text-brand-orange underline">
            como escolher entre app nativo, web app ou híbrido
          </TransitionLink>
          .
        </p>

        <h2>Quanto custa manter um aplicativo</h2>
        <p>
          O custo não acaba no lançamento. Todo app precisa de servidor e banco de dados, correção de erros que aparecem com
          o uso real, atualização a cada nova versão do iOS e do Android e pequenas melhorias pedidas pelos usuários. Uma
          referência comum de mercado é reservar por ano de 15% a 20% do valor do desenvolvimento.
        </p>
        <p>
          Esse número cai quando o app é bem construído desde o início, com testes automatizados e arquitetura organizada.
          Detalhamos o assunto em{' '}
          <TransitionLink href="/insights/manutencao-de-aplicativos-custos-reais-estrategias/" className="font-bold text-brand-orange underline">
            manutenção de aplicativos: custos reais e estratégias
          </TransitionLink>
          .
        </p>

        <h2>Custos além do desenvolvimento</h2>
        <p>Na hora de planejar o orçamento, inclua também os custos recorrentes que não dependem da software house:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-xl leading-relaxed text-dark/70">
          <li>
            <b className="text-dark">Contas nas lojas:</b> a Apple cobra US$ 99 por ano no Apple Developer Program, e o
            Google Play cobra uma taxa única de US$ 25.
          </li>
          <li>
            <b className="text-dark">Comissão das lojas:</b> em compras e assinaturas dentro do app, Apple e Google ficam
            com 15% a 30% do valor, conforme o faturamento e o tipo de produto.
          </li>
          <li>
            <b className="text-dark">Servidores e banco de dados:</b> crescem com o número de usuários. No começo costumam
            ser baixos e sobem conforme o app ganha tração.
          </li>
          <li>
            <b className="text-dark">Serviços de terceiros:</b> mapas, envio de SMS e e-mail, videochamada e gateway de
            pagamento cobram por uso ou por transação.
          </li>
        </ul>

        <h2>Como economizar sem comprometer o app</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-xl leading-relaxed text-dark/70">
          <li>
            <b className="text-dark">Comece por um MVP.</b> Lance só o que prova o valor do produto e deixe o resto para
            depois dos primeiros usuários.{' '}
            <TransitionLink href="/insights/como-definir-escopo-mvp-sem-desperdicar-dinheiro/" className="font-bold text-brand-orange underline">
              Veja como definir o escopo do MVP
            </TransitionLink>
            .
          </li>
          <li>
            <b className="text-dark">Use multiplataforma quando fizer sentido.</b> Para a maioria dos apps de negócio, React
            Native ou Flutter entregam qualidade de app nativo com um código só.
          </li>
          <li>
            <b className="text-dark">Use serviços prontos.</b> Login social, pagamentos e notificações têm fornecedores
            consolidados. Integrar sai mais barato do que construir do zero.
          </li>
          <li>
            <b className="text-dark">Feche o escopo antes de começar.</b> Mudanças no meio do caminho são a maior causa de
            orçamento estourado.
          </li>
        </ul>

        <h2>Como comparar orçamentos</h2>
        <p>
          Duas propostas com preços muito diferentes quase sempre descrevem projetos diferentes. Antes de comparar valores,
          confira se as duas incluem as mesmas plataformas, o design sob medida, o painel administrativo, os testes, a
          publicação nas lojas e o suporte depois do lançamento. Pergunte também quem é o dono do código-fonte e como
          funciona a garantia.
        </p>
        <p>
          Também vale entender o modelo de contrato: escopo fechado (preço e prazo definidos antes) ou squad dedicada
          (time contratado por mês, com escopo flexível). Explicamos os prós e contras de cada um em{' '}
          <TransitionLink href="/insights/terceirizacao-desenvolvimento-aplicativos-custos-vantagens/" className="font-bold text-brand-orange underline">
            terceirização de desenvolvimento de aplicativos
          </TransitionLink>
          .
        </p>

        <div className="mt-16 rounded-button bg-dark p-8 text-white sm:p-10">
          <h3 className="!text-white">Quer um orçamento exato para o seu app?</h3>
          <p className="!text-white/70">
            A Phurshell é uma{' '}
            <TransitionLink href="/servicos/desenvolvimento-de-aplicativos/" className="font-bold text-brand-orange underline">
              empresa de desenvolvimento de aplicativos
            </TransitionLink>{' '}
            com 10 anos de mercado e mais de 100 apps entregues. Conte sua ideia e devolvemos uma proposta com escopo, prazo e
            custo definidos.
          </p>
          <TransitionLink
            href="/contato/"
            className="mt-6 inline-flex items-center gap-2 rounded-button bg-brand-orange px-8 py-4 font-bold text-white transition-smooth hover:bg-brand-orange-light"
          >
            Pedir proposta
            <i className="fa-solid fa-arrow-right"></i>
          </TransitionLink>
        </div>

        <h2>Perguntas frequentes</h2>
        <div className="divide-y divide-dark/10">
          {CALCULADORA_FAQ.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-xl font-bold text-dark">
                {f.q}
                <i className="fa-solid fa-chevron-down text-xl text-brand-orange transition-transform group-open:rotate-180"></i>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: CALCULADORA_FAQ.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  )
}
