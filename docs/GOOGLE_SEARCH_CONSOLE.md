# Configuração do Google Search Console

Este guia explica como configurar e verificar o site no Google Search Console.

## Pré-requisitos

- Site em produção (domínio configurado)
- Conta Google

## Passo a Passo

### 1. Acessar o Google Search Console

Acesse: https://search.google.com/search-console

### 2. Adicionar Propriedade

1. Clique em **"Adicionar propriedade"**
2. Escolha **"Prefixo do URL"**
3. Digite a URL completa do site: `https://phurshell.com.br`
4. Clique em **"Continuar"**

### 3. Verificar Propriedade

Existem várias formas de verificar. As mais comuns são:

#### Opção 1: Meta Tag HTML (Recomendada - Já Configurada)

1. No Google Search Console, selecione o método **"Tag HTML"**
2. Copie apenas o código de verificação (parte entre `content="` e `"`)

   Exemplo:
   ```html
   <meta name="google-site-verification" content="abc123xyz456" />
   ```
   Você deve copiar apenas: `abc123xyz456`

3. Crie um arquivo `.env.local` na raiz do projeto (se não existir)
4. Adicione a variável com o código:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz456
   ```

5. Faça rebuild e deploy do projeto:
   ```bash
   npm run build
   ```

6. Volte ao Google Search Console e clique em **"Verificar"**

#### Opção 2: Google Tag Manager (Alternativa)

Como o GTM já está instalado (GTM-NF9RL69), você pode verificar diretamente via GTM:

1. No Google Search Console, selecione **"Google Tag Manager"**
2. Clique em **"Verificar"**

Esta opção é mais simples pois não requer alteração no código.

#### Opção 3: Google Analytics (Se aplicável)

Se você adicionar o Google Analytics futuramente, também pode verificar via Analytics.

## Após a Verificação

1. **Enviar Sitemap**
   - No Search Console, vá em **"Sitemaps"** no menu lateral
   - Adicione: `https://phurshell.com.br/sitemap.xml`
   - Clique em **"Enviar"**

2. **Monitorar Indexação**
   - Aguarde alguns dias para o Google começar a rastrear
   - Acompanhe em **"Cobertura"** ou **"Páginas"**

3. **Verificar Desempenho**
   - Use a seção **"Desempenho"** para ver:
     - Cliques
     - Impressões
     - CTR
     - Posição média

## Arquivos Relevantes

- **Sitemap**: `/app/sitemap.ts` → Gera `/sitemap.xml`
- **Robots**: `/app/robots.ts` → Gera `/robots.txt`
- **Metadata**: `/app/layout.tsx` → Configuração de SEO
- **Variáveis**: `.env.local` → Códigos de verificação

## Bing Webmaster Tools (Opcional)

O processo é similar para o Bing:

1. Acesse: https://www.bing.com/webmasters
2. Adicione o site
3. Copie o código de verificação
4. Adicione no `.env.local`:
   ```env
   NEXT_PUBLIC_BING_SITE_VERIFICATION=123ABC456DEF
   ```
5. Rebuild e deploy

## Troubleshooting

### Verificação falha

- Certifique-se que o site está acessível publicamente
- Verifique se o build foi feito após adicionar a variável
- Limpe o cache do navegador
- Aguarde alguns minutos e tente novamente

### Sitemap não aparece

- Verifique se o arquivo está acessível: `https://phurshell.com.br/sitemap.xml`
- Certifique-se que o robots.txt está correto: `https://phurshell.com.br/robots.txt`

## Recursos

- [Documentação oficial do Google Search Console](https://support.google.com/webmasters/answer/9128668)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
