import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a Phurshell coleta, usa e protege os dados pessoais de quem visita o site e entra em contato.',
  alternates: { canonical: 'https://phurshell.com/politica-de-privacidade/' },
}

export default function PoliticaDePrivacidade() {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-16 text-gray-700 sm:px-6 sm:py-24 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-secondary [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="text-4xl font-black text-secondary sm:text-5xl">Política de Privacidade</h1>
        <p className="text-sm text-gray-500">Última atualização: 8 de outubro de 2026</p>

        <p>
          Esta política explica como a <b>Phurshell Desenvolvimento de Sites e Aplicativos Ltda.</b> (“Phurshell”,
          “nós”) trata os dados pessoais de quem visita o site phurshell.com e usa nossos formulários, de acordo com a
          Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018). Os aplicativos que publicamos têm políticas
          próprias, indicadas em suas páginas.
        </p>

        <h2>1. Dados que coletamos</h2>
        <ul>
          <li>
            <b>Formulário de contato:</b> nome, e-mail, telefone, empresa, mensagem e as respostas sobre o projeto
            (tipo, estágio, orçamento, prazo e como nos conheceu).
          </li>
          <li>
            <b>Calculadora de custo:</b> nome, e-mail, telefone, descrição do projeto e as respostas escolhidas na
            calculadora.
          </li>
          <li>
            <b>Navegação:</b> páginas visitadas, origem do acesso, tipo de aparelho e navegador, localização aproximada
            e interações com o site, coletados por cookies e tecnologias semelhantes.
          </li>
        </ul>

        <h2>2. Para que usamos</h2>
        <ul>
          <li>Responder seu contato e preparar propostas e estimativas (execução de procedimentos preliminares a contrato);</li>
          <li>Falar com você por e-mail, telefone ou WhatsApp sobre o seu pedido;</li>
          <li>Medir o uso do site e o resultado das nossas campanhas, e melhorar o conteúdo (legítimo interesse).</li>
        </ul>
        <p>Não vendemos seus dados pessoais.</p>

        <h2>3. Cookies e ferramentas de terceiros</h2>
        <p>Usamos as seguintes ferramentas, que podem gravar cookies no seu navegador:</p>
        <ul>
          <li><b>Google Tag Manager e Google Analytics:</b> estatísticas de uso do site.</li>
          <li><b>Google Ads:</b> medição de conversões e anúncios.</li>
          <li><b>OpenAI Pixel:</b> medição de conversões de anúncios.</li>
        </ul>
        <p>
          Você pode bloquear ou apagar cookies nas configurações do seu navegador. O site continua funcionando, mas
          deixamos de medir sua visita.
        </p>

        <h2>4. Compartilhamento</h2>
        <p>
          Compartilhamos dados apenas com os fornecedores que nos ajudam a operar o site e o atendimento (hospedagem,
          e-mail, CRM e as ferramentas acima), e com autoridades quando a lei exigir. Alguns desses fornecedores
          armazenam dados fora do Brasil, com as salvaguardas previstas na LGPD.
        </p>

        <h2>5. Armazenamento e prazo</h2>
        <p>
          Guardamos os dados de contato enquanto houver conversa ou relação comercial com você e, depois disso, pelo
          prazo exigido por lei. Você pode pedir a exclusão a qualquer momento.
        </p>

        <h2>6. Seus direitos</h2>
        <p>
          Pela LGPD, você pode pedir confirmação de tratamento, acesso, correção, anonimização, portabilidade ou
          exclusão dos seus dados, e revogar consentimentos. Envie o pedido para{' '}
          <a className="font-bold text-primary underline" href="mailto:contato@phurshell.com">contato@phurshell.com</a>.
          Respondemos em até 15 dias.
        </p>

        <h2>7. Segurança</h2>
        <p>
          Os dados trafegam com criptografia (HTTPS) e o acesso é restrito às pessoas da equipe que precisam deles para
          atender você.
        </p>

        <h2>8. Alterações</h2>
        <p>Podemos atualizar esta política. A data no topo indica a versão em vigor.</p>

        <h2>9. Contato</h2>
        <p>
          Dúvidas sobre privacidade:{' '}
          <a className="font-bold text-primary underline" href="mailto:contato@phurshell.com">contato@phurshell.com</a>
        </p>
      </article>
    </main>
  )
}
