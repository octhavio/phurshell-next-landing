# SEO Checklist - Phurshell

## ✅ Implementado

### 1. Meta Tags Básicas
- ✅ Title dinâmico com template
- ✅ Description otimizada
- ✅ Keywords relevantes
- ✅ Authors, creator, publisher
- ✅ Lang attribute (pt-BR)
- ✅ Viewport configuration
- ✅ Theme color

### 2. Open Graph (Redes Sociais)
- ✅ OG Type, locale, URL
- ✅ OG Title e Description
- ✅ OG Site Name
- ✅ OG Images configurado
- ⚠️ **Imagem OG precisa ser criada** (ver `/public/OG-IMAGE-README.md`)

### 3. Twitter Cards
- ✅ Card type (summary_large_image)
- ✅ Title e Description
- ✅ Creator handle configurado
- ✅ Images configurado
- ⚠️ **Imagem precisa ser criada**

### 4. Dados Estruturados (JSON-LD)
- ✅ Organization Schema
- ✅ WebSite Schema com SearchAction
- ✅ Service Schema com catálogo
- ✅ Implementado em `/components/StructuredData.tsx`

### 5. Robots & Sitemap
- ✅ Robots.txt dinâmico (`/app/robots.ts`)
- ✅ Sitemap.xml dinâmico (`/app/sitemap.ts`)
- ✅ Canonical URLs
- ✅ Robots meta tags (index, follow)

### 6. Performance & SEO Técnico
- ✅ Next.js Image Optimization
- ✅ Font optimization (Nunito via next/font)
- ✅ Static generation quando possível
- ✅ Semantic HTML

## ⚠️ Pendente/Configurar

### 1. Imagens
- ❌ Criar `og-image.png` (1200x630px)
  - Seguir instruções em `/public/OG-IMAGE-README.md`
  - Testar com Facebook Sharing Debugger
  - Testar com Twitter Card Validator

### 2. Search Console
- ❌ Configurar Google Search Console
  - Acessar: https://search.google.com/search-console
  - Adicionar propriedade
  - Verificar domínio
  - Adicionar código em `app/layout.tsx` (linha 80)

- ❌ Configurar Bing Webmaster Tools (opcional)
  - Acessar: https://www.bing.com/webmasters
  - Adicionar código de verificação

### 3. Analytics
- ❌ Google Analytics 4
- ❌ Google Tag Manager (opcional)
- ❌ Microsoft Clarity (opcional)

### 4. Redes Sociais
- ❌ Adicionar links de redes sociais no Organization Schema
  - LinkedIn, Instagram, Twitter/X
  - Atualizar em `/components/StructuredData.tsx` (linha 27)

### 5. Conteúdo Dinâmico
- ❌ Quando houver posts de blog, adicionar ao sitemap
  - Descomentar código em `/app/sitemap.ts` (linhas 20-27)
- ❌ Quando houver cases individuais, adicionar ao sitemap

### 6. Melhorias Futuras (Opcional)
- ❌ FAQPage Schema (se adicionar FAQ na home)
- ❌ BreadcrumbList Schema
- ❌ Review/Rating Schema
- ❌ LocalBusiness Schema (se tiver endereço físico)

## 📊 Testes de SEO

### Ferramentas para Testar
1. **Google Search Console**
   - URL: https://search.google.com/search-console
   - Verificar indexação
   - Verificar Core Web Vitals

2. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Testar performance e SEO

3. **Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Verificar dados estruturados

4. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Testar Open Graph

5. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Testar Twitter Cards

6. **Lighthouse (Chrome DevTools)**
   - Abrir DevTools > Lighthouse
   - Executar auditoria completa

## 🚀 Próximos Passos Imediatos

1. **Criar og-image.png**
   - Dimensões: 1200x630px
   - Salvar em `/public/og-image.png`
   - Seguir guia em `/public/OG-IMAGE-README.md`

2. **Configurar Google Search Console**
   - Criar conta/adicionar propriedade
   - Obter código de verificação
   - Adicionar código em `app/layout.tsx`
   - Submeter sitemap: `https://phurshell.com.br/sitemap.xml`

3. **Testar SEO**
   - Executar Lighthouse
   - Testar dados estruturados
   - Verificar Open Graph

4. **Monitoramento Contínuo**
   - Acompanhar Google Search Console semanalmente
   - Verificar erros de indexação
   - Monitorar Core Web Vitals

## 📝 Arquivos Criados/Modificados

### Novos Arquivos
- `/components/StructuredData.tsx` - Dados estruturados JSON-LD
- `/app/sitemap.ts` - Sitemap dinâmico
- `/app/robots.ts` - Robots.txt dinâmico
- `/public/OG-IMAGE-README.md` - Guia para criar imagem OG
- `/SEO-CHECKLIST.md` - Este arquivo

### Arquivos Modificados
- `/app/layout.tsx` - Adicionado StructuredData e melhorados comentários

## 🔗 Links Úteis

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
