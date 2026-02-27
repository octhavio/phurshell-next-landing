# Phurshell - Website Institucional

Site institucional da Phurshell, uma fábrica de software especializada em desenvolvimento de aplicativos mobile e web sob medida.

## Stack Tecnológica

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilização**: TailwindCSS
- **CMS**: WordPress Headless (integração futura)
- **Deploy**: Vercel (recomendado)

## Arquitetura do Projeto

```
phurshell-react-landing/
├── app/
│   ├── layout.tsx          # Layout raiz com metadata SEO
│   ├── page.tsx             # Home page
│   └── globals.css          # Estilos globais
├── components/
│   ├── Header.tsx           # Cabeçalho com navegação
│   ├── Footer.tsx           # Rodapé institucional
│   ├── Hero.tsx             # Seção hero da home
│   ├── About.tsx            # Seção sobre a empresa
│   ├── Services.tsx         # Seção de serviços
│   ├── Process.tsx          # Seção do processo
│   ├── Cases.tsx            # Seção de cases/portfólio
│   └── CTA.tsx              # Call-to-action final
├── lib/
│   └── wordpress.ts         # Funções para consumir WordPress API
├── types/
│   └── wordpress.ts         # TypeScript types para WordPress
├── public/                  # Arquivos estáticos
├── next.config.js           # Configuração do Next.js
├── tailwind.config.ts       # Configuração do TailwindCSS
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências do projeto
```

## Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn ou pnpm

## Instalação

1. Clone o repositório:
```bash
git clone https://gitlab.com/phurshell/phurshell/phurshell-react-landing.git
cd phurshell-react-landing
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente (opcional neste momento):
```bash
cp .env.example .env
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Seções da Home Page

### 1. Hero Section
- Headline forte sobre a fábrica de apps
- Subheadline estratégica
- CTAs principais (Falar com especialista / Ver projetos)
- Estatísticas da empresa

### 2. Sobre a Phurshell
- Texto institucional
- Valores da empresa (Qualidade, Agilidade, Inovação)

### 3. Serviços
- Desenvolvimento Mobile
- Sistemas Web
- Arquitetura & Backend
- Integrações & APIs

### 4. Processo
Etapas do processo de desenvolvimento:
1. Descoberta
2. Arquitetura
3. Desenvolvimento
4. Evolução

### 5. Cases de Sucesso
- Portfólio de projetos (mock por enquanto)
- Preparado para integração com WordPress API

### 6. CTA Final
- Call-to-action forte para contato
- Links para WhatsApp e email

## Integração com WordPress (Próximos Passos)

O projeto está preparado para integração com WordPress headless CMS.

### Configuração no WordPress:

1. **Instalar plugins necessários**:
   - WP REST API (geralmente já incluído no core)
   - Advanced Custom Fields (ACF) PRO
   - Custom Post Type UI (para criar CPT "cases")

2. **Criar Custom Post Type "Cases"**:
```php
// functions.php
function phurshell_register_cases_cpt() {
    $args = array(
        'public' => true,
        'label'  => 'Cases',
        'show_in_rest' => true, // IMPORTANTE para REST API
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
    );
    register_post_type('cases', $args);
}
add_action('init', 'phurshell_register_cases_cpt');
```

3. **Configurar ACF para Cases**:
   - client_name (Text)
   - project_type (Select)
   - technologies (Repeater)
   - project_url (URL)
   - challenge (Textarea)
   - solution (Textarea)
   - results (Textarea)

4. **Habilitar CORS (se necessário)**:
```php
// functions.php
function phurshell_enable_cors() {
    header("Access-Control-Allow-Origin: *");
}
add_action('init', 'phurshell_enable_cors');
```

### Configuração no Next.js:

1. Adicione a URL da API no `.env`:
```env
WORDPRESS_API_URL=https://seu-wordpress.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://phurshell.com
REVALIDATE_SECRET=seu-secret-aqui
```

2. As funções em `lib/wordpress.ts` já estão prontas para consumir a API:
```typescript
import { getCases, getPages, getPosts } from '@/lib/wordpress'

// Em um Server Component
const cases = await getCases(6)
```

3. Ativar revalidação on-demand (webhook):
   - Criar API Route: `/app/api/revalidate/route.ts`
   - Configurar webhook no WordPress para chamar a rota ao publicar

## SEO

O projeto está otimizado para SEO com:

- Metadata completa em `app/layout.tsx`
- OpenGraph tags
- Twitter Cards
- Sitemap.xml (adicionar futuramente)
- Robots.txt (adicionar futuramente)
- Structured Data / JSON-LD (adicionar futuramente)

## Deploy na Vercel

1. Conecte o repositório GitLab à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push na branch main

```bash
# Ou via CLI
npx vercel
```

## Performance

- Next.js App Router com React Server Components
- Image Optimization automática
- Font Optimization (Inter via next/font)
- Incremental Static Regeneration (ISR) preparado
- Lazy loading de componentes quando aplicável

## Personalização

### Cores
Edite as cores em `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Conteúdo
Os componentes em `/components` contêm o conteúdo. Edite diretamente cada arquivo.

### Metadata SEO
Edite `app/layout.tsx` para alterar título, descrição e OpenGraph.

## Melhorias Futuras

- [ ] Conectar ao WordPress headless
- [ ] Adicionar página de Cases individual
- [ ] Implementar formulário de contato
- [ ] Adicionar blog
- [ ] Implementar i18n (português/inglês)
- [ ] Adicionar animações com Framer Motion
- [ ] Implementar dark mode
- [ ] Adicionar Google Analytics
- [ ] Criar sitemap.xml dinâmico
- [ ] Adicionar testes (Jest/Cypress)

## Contribuindo

1. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
2. Commit suas mudanças: `git commit -m 'Add: minha feature'`
3. Push para a branch: `git push origin feature/minha-feature`
4. Abra um Merge Request

## Suporte

Para dúvidas ou suporte:
- Email: contato@phurshell.com
- WhatsApp: +55 (11) 99999-9999

## Licença

Propriedade da Phurshell. Todos os direitos reservados.

---

Desenvolvido com ❤️ pela equipe Phurshell
