import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WealthCraft | Política de Privacidade',
  description: 'Como o jogo WealthCraft coleta, usa e protege seus dados.',
  alternates: { canonical: 'https://phurshell.com/wealthcraft/privacidade/' },
}

export default function WealthCraftPrivacyPage() {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-16 text-gray-700 sm:px-6 sm:py-24 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-secondary [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <p className="text-sm font-bold uppercase tracking-wider text-primary">WealthCraft</p>
        <h1 className="mt-2 text-4xl font-black text-secondary sm:text-5xl">Política de Privacidade</h1>
        <p className="text-sm text-gray-500">Última atualização: 8 de outubro de 2026</p>

        <p>
          Esta política explica como o jogo <b>WealthCraft</b> (“o app”), desenvolvido pela{' '}
          <b>Phurshell Desenvolvimento de Sites e Aplicativos Ltda.</b> (“Phurshell”, “nós”), trata seus dados pessoais,
          de acordo com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).
        </p>

        <h2>1. Dados que coletamos</h2>
        <ul>
          <li><b>Progresso do jogo:</b> saldo, investimentos, coleções, conquistas e configurações, para salvar e restaurar seu jogo.</li>
          <li><b>Identificadores do jogo:</b> um código aleatório gerado no aparelho e, se você usa o Game Center, o identificador e o apelido de jogador fornecidos pela Apple. Servem para vincular o progresso à sua conta e mostrar seus amigos no ranking. Não coletamos seu nome real, e-mail ou telefone.</li>
          <li><b>Nome de usuário:</b> o nome que você escolhe no jogo, exibido para outros jogadores no ranking geral junto com seu patrimônio e nível.</li>
          <li><b>Uso do jogo:</b> tempo de jogo e dias em que você jogou, para estatísticas internas.</li>
          <li><b>Informações do aparelho:</b> modelo, versão do sistema e versão do app, para suporte e correção de erros.</li>
          <li><b>Mensagens que você envia:</b> sugestões e reclamações enviadas pelas Configurações do jogo.</li>
        </ul>

        <h2>2. Parceiros (terceiros)</h2>
        <ul>
          <li>
            <b>Google AdMob (anúncios):</b> exibe o anúncio opcional que dá o turbo de 1 hora. O AdMob pode coletar o
            identificador de publicidade do aparelho (somente se você permitir no aviso de rastreamento do iOS), dados de
            uso e de interação com anúncios, localização aproximada e dados de diagnóstico. Saiba mais em{' '}
            <a className="text-primary underline" href="https://policies.google.com/technologies/ads">policies.google.com/technologies/ads</a>.
          </li>
          <li><b>Apple (Game Center e compras):</b> autenticação no Game Center e processamento das compras dentro do app no iPhone. Não recebemos dados de pagamento.</li>
          <li><b>Google Play (compras):</b> processamento das compras dentro do app no Android. Não recebemos dados de pagamento.</li>
          <li><b>RevenueCat (validação de compras):</b> confirma e restaura compras dentro do app, usando um identificador anônimo e o histórico de compras.</li>
        </ul>

        <h2>3. Para que usamos</h2>
        <ul>
          <li>Salvar seu progresso na nuvem (cada aparelho tem o próprio jogo salvo) e restaurá-lo se você reinstalar o app;</li>
          <li>Mostrar os rankings de amigos e geral;</li>
          <li>Liberar e restaurar compras;</li>
          <li>Exibir anúncios opcionais;</li>
          <li>Responder mensagens de suporte e melhorar o jogo.</li>
        </ul>
        <p>Não vendemos seus dados pessoais.</p>

        <h2>4. Rastreamento e anúncios</h2>
        <p>
          No iOS, o app pede sua permissão antes de qualquer rastreamento para publicidade (App Tracking Transparency).
          Se você não permitir, os anúncios continuam aparecendo, mas não são personalizados. Você pode mudar isso a
          qualquer momento em <b>Ajustes → Privacidade e Segurança → Rastreamento</b>. No Android, você pode redefinir ou
          excluir o ID de publicidade em <b>Configurações → Google → Anúncios</b>.
        </p>

        <h2>5. Armazenamento e prazo</h2>
        <p>
          O progresso fica guardado no aparelho e em servidores contratados pela Phurshell enquanto você usar o app.
          Você pode pedir a exclusão a qualquer momento (item 6).
        </p>

        <h2>6. Seus direitos</h2>
        <p>
          Pela LGPD, você pode pedir acesso, correção, portabilidade ou exclusão dos seus dados, e revogar consentimentos.
          Envie o pedido para <a className="font-bold text-primary underline" href="mailto:contato@phurshell.com">contato@phurshell.com</a>{' '}
          com o assunto “WealthCraft: dados”. Para excluir sua conta e seus dados, veja o passo a passo em{' '}
          <a className="font-bold text-primary underline" href="/wealthcraft/excluir-dados/">phurshell.com/wealthcraft/excluir-dados</a>.
        </p>

        <h2>7. Crianças</h2>
        <p>
          O app não é direcionado a menores de 13 anos e não coleta intencionalmente dados de crianças. Se você acredita
          que uma criança nos enviou dados, fale com a gente para excluí-los.
        </p>

        <h2>8. Alterações</h2>
        <p>Podemos atualizar esta política. A data da última atualização fica no topo desta página.</p>

        <h2>9. Contato</h2>
        <p>
          Phurshell Desenvolvimento de Sites e Aplicativos Ltda. ·{' '}
          <a className="font-bold text-primary underline" href="mailto:contato@phurshell.com">contato@phurshell.com</a>
        </p>
      </article>
    </main>
  )
}
