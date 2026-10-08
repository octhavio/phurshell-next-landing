import type { Metadata } from 'next'
import TransitionLink from '../../src/components/TransitionLink'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Regras de uso do site da Phurshell, da calculadora de custo e dos conteúdos publicados.',
  alternates: { canonical: 'https://phurshell.com/termos-de-uso/' },
}

export default function TermosDeUso() {
  return (
    <main className="bg-white">
      <article className="mx-auto max-w-3xl px-4 py-16 text-gray-700 sm:px-6 sm:py-24 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-secondary [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="text-4xl font-black text-secondary sm:text-5xl">Termos de Uso</h1>
        <p className="text-sm text-gray-500">Última atualização: 8 de outubro de 2026</p>

        <p>
          Estes termos valem para o uso do site phurshell.com, mantido pela{' '}
          <b>Phurshell Desenvolvimento de Sites e Aplicativos Ltda.</b> (“Phurshell”). Ao usar o site, você concorda
          com eles.
        </p>

        <h2>1. Conteúdo do site</h2>
        <p>
          Os textos, imagens, marcas e materiais do site pertencem à Phurshell ou a seus clientes e parceiros. Você
          pode citar e compartilhar nossos artigos com link para a fonte. Não é permitido copiar o conteúdo para
          republicação comercial sem autorização.
        </p>

        <h2>2. Calculadora de custo e estimativas</h2>
        <p>
          Os valores e prazos da calculadora são estimativas para referência e não são proposta comercial. O preço e o
          prazo de um projeto só valem depois de uma proposta formal, feita a partir do escopo detalhado.
        </p>

        <h2>3. Informações dos artigos</h2>
        <p>
          Os artigos em Insights têm caráter informativo. Revisamos o que publicamos, mas tecnologias, preços e normas
          mudam, e o conteúdo não substitui uma análise do seu caso.
        </p>

        <h2>4. Uso adequado</h2>
        <ul>
          <li>Não envie pelos formulários dados de terceiros sem autorização nem conteúdo ilegal;</li>
          <li>Não tente acessar áreas restritas, como propostas de outros clientes, nem prejudicar o funcionamento do site.</li>
        </ul>

        <h2>5. Links externos</h2>
        <p>O site pode ter links para sites de terceiros. Não respondemos pelo conteúdo nem pelas práticas desses sites.</p>

        <h2>6. Privacidade</h2>
        <p>
          O tratamento de dados pessoais está descrito na{' '}
          <TransitionLink href="/politica-de-privacidade/" className="font-bold text-primary underline">
            Política de Privacidade
          </TransitionLink>
          .
        </p>

        <h2>7. Alterações e foro</h2>
        <p>
          Podemos atualizar estes termos a qualquer momento; a data no topo indica a versão em vigor. Estes termos
          seguem a lei brasileira, com foro na comarca de São Paulo/SP.
        </p>

        <h2>8. Contato</h2>
        <p>
          <a className="font-bold text-primary underline" href="mailto:contato@phurshell.com">contato@phurshell.com</a>
        </p>
      </article>
    </main>
  )
}
