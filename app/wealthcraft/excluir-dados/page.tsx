import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WealthCraft | Excluir seus dados',
  description: 'Como pedir a exclusão da sua conta e dos seus dados no jogo WealthCraft, da Phurshell.',
  alternates: { canonical: 'https://phurshell.com/wealthcraft/excluir-dados/' },
}

const mail = 'mailto:contato@phurshell.com?subject=WealthCraft%3A%20excluir%20dados'

export default function WealthCraftDeleteDataPage() {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-16 text-gray-700 sm:px-6 sm:py-24 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-secondary [&_li]:mt-2 [&_p]:mt-4 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">WealthCraft · Phurshell</p>
        <h1 className="mt-2 text-4xl font-black text-secondary sm:text-5xl">Excluir seus dados</h1>
        <p className="text-sm text-gray-500">Última atualização: 8 de outubro de 2026</p>

        <p>
          O jogo <b>WealthCraft</b> é desenvolvido pela <b>Phurshell Desenvolvimento de Sites e Aplicativos Ltda.</b> Você
          pode pedir a exclusão da sua conta e de todos os dados ligados a ela a qualquer momento, sem custo.
        </p>

        <h2>Como pedir</h2>
        <ol>
          <li>
            Envie um e-mail para{' '}
            <a className="font-bold text-primary underline" href={mail}>contato@phurshell.com</a> com o assunto{' '}
            <b>“WealthCraft: excluir dados”</b>.
          </li>
          <li>
            Informe seu <b>nome de usuário</b> no jogo (em <b>Configurações → Perfil</b>). Se você ainda não escolheu um
            nome, informe o modelo do aparelho e a data aproximada em que começou a jogar.
          </li>
          <li>Respondemos confirmando a exclusão em até <b>15 dias</b>.</li>
        </ol>
        <p>
          Quer só recomeçar o jogo? Em <b>Configurações → Excluir jogo salvo</b> o progresso do aparelho é zerado na hora.
          Isso não apaga a conta; para apagar tudo, use o pedido por e-mail acima.
        </p>

        <h2>O que é excluído</h2>
        <ul>
          <li>Progresso do jogo em todos os aparelhos (saldo, investimentos, imóveis, coleções, conquistas) e as cópias de segurança;</li>
          <li>Nome de usuário e sua posição nos rankings;</li>
          <li>Identificadores da conta (código do aparelho e vínculo com o Game Center);</li>
          <li>Informações do aparelho, tempo de jogo e sugestões ou reclamações que você enviou.</li>
        </ul>

        <h2>O que pode ser mantido</h2>
        <ul>
          <li>
            <b>Registros de compras:</b> ficam com a Apple, o Google e o RevenueCat (que valida as compras), pelo prazo que
            a lei e as políticas deles exigem. Uma compra feita continua podendo ser restaurada pela sua conta da loja.
          </li>
          <li><b>Estatísticas agregadas e anônimas</b> (por exemplo, quantas pessoas jogaram em um dia), que não identificam você.</li>
        </ul>
        <p>
          Dados de anúncios coletados pelo Google AdMob seguem a política do Google; você pode redefinir o ID de
          publicidade nas configurações do seu aparelho.
        </p>

        <p className="mt-10">
          Veja também a <a className="font-bold text-primary underline" href="/wealthcraft/privacidade/">Política de Privacidade</a>.
        </p>
      </article>
    </main>
  )
}
