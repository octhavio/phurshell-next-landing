import TransitionLink from '../components/TransitionLink'
import ContactCTA from '../components/ContactCTA'
import SEO from '../components/SEO'

export default function CasePsiapp() {
  return (
    <div className="bg-white">
      <SEO
        title="Case Psiapp"
        description="Conectando psicólogos e pacientes através da tecnologia. Desenvolvimento completo dos aplicativos iOS e Android, backoffice e análise de dados."
        url="/cases/psiapp"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FD9773] py-24 sm:py-32">
        <div className="container relative z-10 mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mb-8">
            <TransitionLink
              href="/cases"
              className="inline-flex items-center gap-2 text-lg font-bold text-white/80 transition-colors hover:text-white"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Voltar para Cases
            </TransitionLink>
          </div>

          {/* Logo and Title */}
          <div className="mb-12 flex flex-col items-start gap-6">
            <img
              src="/images/img-home-icon-psiapp.png"
              alt="Logo Psiapp"
              width={120}
              height={40}
              className="h-auto"
            />
            <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Conectando psicólogos e pacientes através da tecnologia
            </h1>
          </div>

          {/* Meta Info */}
          <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-2 text-sm font-black uppercase tracking-wider text-white/70">Indústria</h3>
              <p className="text-xl font-bold text-white">Saúde Mental / Healthtech</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-black uppercase tracking-wider text-white/70">Período</h3>
              <p className="text-xl font-bold text-white">2019 - Presente</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-black uppercase tracking-wider text-white/70">Plataformas</h3>
              <p className="text-xl font-bold text-white">iOS, Android, Web, Backoffice</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-button">
            <img
              src="/images/img-home-case-psiapp.png"
              alt="Interface do aplicativo Psiapp"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-4xl font-black text-dark sm:text-5xl">
              Visão Geral
            </h2>
            <p className="mb-6 text-xl leading-relaxed text-dark/70">
              O Psiapp nasceu com a missão de democratizar o acesso à psicoterapia no Brasil. Em 2019, quando a ideia surgiu, encontrar um psicólogo compatível com suas necessidades era um processo complexo e demorado. A pandemia de 2020 acelerou a necessidade de soluções digitais na área da saúde mental.
            </p>
            <p className="text-xl leading-relaxed text-dark/70">
              A Phurshell foi escolhida como parceira tecnológica para transformar essa visão em realidade, desenvolvendo uma plataforma completa que conecta psicólogos e pacientes de forma simples, segura e eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-black text-dark sm:text-5xl">
                O Desafio
              </h2>
              <div className="space-y-4 text-xl leading-relaxed text-dark/70">
                <p>
                  Criar uma plataforma que atendesse simultaneamente dois públicos distintos — psicólogos e pacientes — cada um com necessidades e expectativas diferentes.
                </p>
                <p>
                  Para os <strong className="text-dark">psicólogos</strong>, era essencial oferecer ferramentas profissionais de gestão: agenda, prontuários, controle financeiro e um perfil que destacasse suas especializações.
                </p>
                <p>
                  Para os <strong className="text-dark">pacientes</strong>, a experiência precisava ser acolhedora e descomplicada: buscar profissionais por especialização, agendar consultas com facilidade e ter um ambiente seguro para suas sessões online.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-button bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-[#FD9773]/10">
                  <i className="fa-jelly fa-users fa-xl text-[#FD9773]"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Dupla Persona</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Equilibrar as necessidades de profissionais de saúde com a experiência de usuários finais buscando ajuda.
                </p>
              </div>

              <div className="rounded-button bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-[#FD9773]/10">
                  <i className="fa-jelly fa-shield-halved fa-xl text-[#FD9773]"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Segurança e Privacidade</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Garantir conformidade com LGPD e proteção total dos dados sensíveis de pacientes.
                </p>
              </div>

              <div className="rounded-button bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-button bg-[#FD9773]/10">
                  <i className="fa-jelly fa-video fa-xl text-[#FD9773]"></i>
                </div>
                <h3 className="mb-3 text-xl font-black text-dark">Videochamadas Estáveis</h3>
                <p className="text-lg leading-relaxed text-dark/70">
                  Implementar sistema de videochamadas confiável para sessões terapêuticas sem interrupções.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-16 text-center text-4xl font-black text-dark sm:text-5xl">
            Nosso Processo
          </h2>

          <div className="space-y-16">
            {/* Stage 1 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-[#FD9773]">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <h3 className="mb-3 text-2xl font-black text-dark">Descoberta e Validação</h3>
              </div>
              <div>
                <p className="mb-4 text-xl leading-relaxed text-dark/70">
                  Começamos com uma imersão profunda no universo da psicoterapia. Entrevistamos psicólogos para entender seus processos de trabalho, principais dores e necessidades. Mapeamos a jornada do paciente desde a busca por ajuda até o acompanhamento contínuo.
                </p>
                <p className="text-xl leading-relaxed text-dark/70">
                  Validamos hipóteses através de protótipos iniciais, testando conceitos com profissionais e potenciais usuários. Essa fase foi crucial para definir as funcionalidades prioritárias para o MVP.
                </p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-[#FD9773]">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <h3 className="mb-3 text-2xl font-black text-dark">Design e Arquitetura</h3>
              </div>
              <div>
                <p className="mb-4 text-xl leading-relaxed text-dark/70">
                  Criamos wireframes detalhados para todos os fluxos: cadastro de psicólogos com verificação de credenciais, busca e filtros para pacientes, sistema de agendamento, prontuários digitais e área financeira.
                </p>
                <p className="text-xl leading-relaxed text-dark/70">
                  A identidade visual do Psiapp precisava transmitir profissionalismo e, ao mesmo tempo, acolhimento. Desenvolvemos uma paleta de cores suaves, tipografia legível e elementos que inspiram confiança sem perder a modernidade.
                </p>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-[#FD9773]">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <h3 className="mb-3 text-2xl font-black text-dark">Desenvolvimento</h3>
              </div>
              <div>
                <p className="mb-4 text-xl leading-relaxed text-dark/70">
                  Desenvolvemos três aplicativos nativos: um para pacientes (iOS e Android), outro para psicólogos (iOS e Android) e um backoffice web completo para administração da plataforma.
                </p>
                <p className="mb-4 text-xl leading-relaxed text-dark/70">
                  A infraestrutura foi construída para ser escalável desde o início. Implementamos sistema de notificações push, integração com gateways de pagamento, sistema de videochamadas com WebRTC, e um robusto sistema de agendamento com gestão de conflitos.
                </p>
                <p className="text-xl leading-relaxed text-dark/70">
                  A segurança foi prioridade máxima: criptografia end-to-end nas videochamadas, armazenamento seguro de dados sensíveis, autenticação de dois fatores e conformidade total com a LGPD.
                </p>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-button bg-[#FD9773]">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <h3 className="mb-3 text-2xl font-black text-dark">Lançamento e Evolução</h3>
              </div>
              <div>
                <p className="mb-4 text-xl leading-relaxed text-dark/70">
                  O lançamento foi estratégico: primeiro, onboarding de psicólogos selecionados para garantir qualidade e testar a plataforma em condições reais. Depois, abertura gradual para pacientes com acompanhamento próximo de métricas e feedbacks.
                </p>
                <p className="text-xl leading-relaxed text-dark/70">
                  Desde o lançamento, mantemos um ciclo contínuo de melhorias. Analisamos dados de uso, coletamos feedbacks de psicólogos e pacientes, e implementamos novas funcionalidades regularmente. A plataforma evoluiu muito desde a versão inicial, sempre guiada pelas necessidades reais dos usuários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-6 text-4xl font-black text-dark sm:text-5xl">
            Tecnologias Utilizadas
          </h2>
          <p className="mb-12 max-w-3xl text-xl leading-relaxed text-dark/70">
            Stack tecnológico robusto escolhido para garantir performance, escalabilidade e melhor experiência do usuário.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-button border border-dark/10 bg-white p-6">
              <h3 className="mb-2 text-lg font-black text-dark">Mobile</h3>
              <p className="text-base text-dark/70">React Native, TypeScript, Redux</p>
            </div>
            <div className="rounded-button border border-dark/10 bg-white p-6">
              <h3 className="mb-2 text-lg font-black text-dark">Backend</h3>
              <p className="text-base text-dark/70">Node.js, PostgreSQL, Redis</p>
            </div>
            <div className="rounded-button border border-dark/10 bg-white p-6">
              <h3 className="mb-2 text-lg font-black text-dark">Video</h3>
              <p className="text-base text-dark/70">WebRTC, Janus Gateway</p>
            </div>
            <div className="rounded-button border border-dark/10 bg-white p-6">
              <h3 className="mb-2 text-lg font-black text-dark">Cloud</h3>
              <p className="text-base text-dark/70">AWS, Docker, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-16 text-center text-4xl font-black text-dark sm:text-5xl">
            Resultados
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-5xl font-black text-[#FD9773] sm:text-6xl">100k+</div>
              <p className="text-xl font-bold text-dark">Downloads</p>
              <p className="text-base text-dark/70">Nas lojas iOS e Android</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-black text-[#FD9773] sm:text-6xl">4.8</div>
              <p className="text-xl font-bold text-dark">Avaliação</p>
              <p className="text-base text-dark/70">Média nas app stores</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-black text-[#FD9773] sm:text-6xl">5k+</div>
              <p className="text-xl font-bold text-dark">Psicólogos</p>
              <p className="text-base text-dark/70">Ativos na plataforma</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-black text-[#FD9773] sm:text-6xl">200k+</div>
              <p className="text-xl font-bold text-dark">Consultas</p>
              <p className="text-base text-dark/70">Realizadas com sucesso</p>
            </div>
          </div>

          <div className="mt-16 rounded-button bg-gray-50 p-8 sm:p-12">
            <h3 className="mb-6 text-center text-3xl font-black text-dark">
              Impacto Real na Saúde Mental
            </h3>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-dark/70">
              O Psiapp se consolidou como uma das principais plataformas de psicoterapia online do Brasil, facilitando o acesso à saúde mental para milhares de pessoas e proporcionando aos psicólogos uma ferramenta profissional completa para gerenciar suas práticas.
            </p>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-2xl px-10 sm:px-14 lg:px-20">
          <h2 className="mb-16 text-center text-4xl font-black text-dark sm:text-5xl">
            Funcionalidades Principais
          </h2>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-black text-dark">Busca Inteligente de Profissionais</h3>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  Sistema de busca avançado que permite aos pacientes encontrarem o psicólogo ideal filtrando por especialização, abordagem terapêutica, disponibilidade de horários, faixa de preço e avaliações.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Filtros por especialização (ansiedade, depressão, relacionamentos, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Visualização de perfis completos com apresentação em vídeo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Sistema de avaliações e recomendações</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-button bg-white p-8">
                <div className="aspect-[4/3] rounded-button bg-gray-100"></div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="order-last lg:order-first">
                <div className="rounded-button bg-white p-8">
                  <div className="aspect-[4/3] rounded-button bg-gray-100"></div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-3xl font-black text-dark">Agendamento Simplificado</h3>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  Interface intuitiva para agendar, reagendar e cancelar consultas. O sistema gerencia automaticamente conflitos de horários e envia lembretes tanto para pacientes quanto para psicólogos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Calendário sincronizado com disponibilidade real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Notificações push antes das consultas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Política de cancelamento flexível</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-black text-dark">Videochamadas Seguras</h3>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  Sistema de videochamadas integrado com qualidade de imagem e áudio otimizadas, criptografia end-to-end e funcionalidades específicas para sessões terapêuticas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Qualidade HD adaptativa de acordo com a conexão</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Sala de espera virtual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Gravação opcional (com consentimento)</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-button bg-white p-8">
                <div className="aspect-[4/3] rounded-button bg-gray-100"></div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="order-last lg:order-first">
                <div className="rounded-button bg-white p-8">
                  <div className="aspect-[4/3] rounded-button bg-gray-100"></div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-3xl font-black text-dark">Backoffice para Psicólogos</h3>
                <p className="mb-6 text-xl leading-relaxed text-dark/70">
                  Ferramenta completa de gestão profissional que centraliza todos os aspectos da prática clínica em uma única plataforma.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Prontuários digitais seguros e organizados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Relatórios financeiros e controle de recebimentos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-check mt-1 text-[#FD9773]"></i>
                    <span className="text-lg text-dark/70">Estatísticas de atendimento e crescimento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}
