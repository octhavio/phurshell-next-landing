# Checklist de Pendências - Phurshell Landing Page

## ✅ Concluído Recentemente
- ✅ Links quebrados do Footer corrigidos
- ✅ GitHub removido das redes sociais
- ✅ LinkedIn e Instagram adicionados ao SEO Schema
- ✅ Open Graph image criada (og-image.png)
- ✅ Dados estruturados JSON-LD implementados
- ✅ Sitemap.xml criado
- ✅ Robots.txt criado

---

## ❌ Pendências Críticas

### 1. **Favicon** (IMPORTANTE!)
**Status**: ❌ Não existe

**Arquivos necessários**:
- `app/icon.png` ou `app/icon.ico` (Next.js 14)
- Tamanhos recomendados:
  - 16x16, 32x32, 48x48 (favicon.ico)
  - 180x180 (Apple touch icon)
  - 192x192, 512x512 (Android icons)

**Como criar**:
1. Exportar logo em formato quadrado
2. Usar ferramenta: https://realfavicongenerator.net/
3. Salvar como `app/icon.png` (Next.js gera automaticamente os outros tamanhos)

**Impacto**:
- SEO
- Profissionalismo
- Reconhecimento da marca nas abas do navegador

---

### 2. **Google Search Console**
**Status**: ❌ Não configurado

**Ação**:
1. Acessar: https://search.google.com/search-console
2. Adicionar propriedade
3. Verificar domínio
4. Copiar código de verificação
5. Adicionar em `app/layout.tsx` (linha 80)
6. Submeter sitemap: `https://phurshell.com.br/sitemap.xml`

**Impacto**:
- Monitoramento de indexação
- Identificação de erros
- Análise de performance SEO

---

### 3. **Analytics & Tracking**
**Status**: ❌ Não configurado

**Ferramentas recomendadas**:
- [ ] Google Analytics 4 (GA4)
- [ ] Google Tag Manager (GTM) - opcional mas recomendado
- [ ] Meta Pixel (Facebook/Instagram Ads) - se for usar ads
- [ ] Microsoft Clarity - heatmaps e gravações (grátis)

**Como adicionar**:
1. Criar conta no Google Analytics
2. Obter Measurement ID (G-XXXXXXXXXX)
3. Adicionar script no `app/layout.tsx`
4. Configurar eventos de conversão (formulário de contato)

---

### 4. **Formulário de Contato**
**Status**: ⚠️ Verificar se está funcional

**Verificar**:
- [ ] Backend/API para processar formulário
- [ ] Validação de campos
- [ ] Mensagens de erro
- [ ] Email de confirmação
- [ ] Integração com CRM (se aplicável)
- [ ] Proteção anti-spam (Google reCAPTCHA)

**Ação**: Testar o fluxo completo do formulário

---

### 5. **Performance & Otimização**

**Verificar**:
- [ ] Lighthouse Score (executar auditoria)
- [ ] Core Web Vitals
- [ ] Compressão de imagens
- [ ] Lazy loading de imagens
- [ ] Tamanho do bundle JavaScript

**Como testar**:
```bash
npm run build
npm run start
# Abrir Chrome DevTools > Lighthouse
```

**Meta**:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

---

### 6. **Conteúdo & Copy**

**Revisar**:
- [ ] Textos estão revisados (ortografia/gramática)
- [ ] CTAs são claros e persuasivos
- [ ] Descrições de serviços estão completas
- [ ] Cases têm informações suficientes
- [ ] Página "Sobre" tem conteúdo relevante

---

### 7. **Responsividade**

**Testar em**:
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)
- [ ] Ultra-wide (1920px+)

**Dispositivos reais recomendados**:
- [ ] iPhone
- [ ] Android
- [ ] iPad

---

### 8. **Testes de Navegação**

**Fluxos críticos**:
- [ ] Home → Serviços → Contato
- [ ] Home → Cases → Case específico
- [ ] Home → Insights → Post específico
- [ ] Formulário de contato → Página de sucesso
- [ ] Links do Footer funcionam
- [ ] Links da Navbar funcionam
- [ ] Transições de página funcionam

---

### 9. **Acessibilidade**

**Verificar**:
- [ ] Alt text em todas as imagens
- [ ] Hierarquia de headings (H1, H2, H3)
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funciona
- [ ] Screen readers (testar com NVDA ou VoiceOver)
- [ ] ARIA labels onde necessário

**Ferramenta**: axe DevTools (extensão Chrome)

---

### 10. **Legal & Compliance**

**Páginas necessárias**:
- [ ] Política de Privacidade
- [ ] Termos de Uso
- [ ] LGPD Compliance
- [ ] Cookie Banner (se usar cookies de tracking)

**Nota**: Verificar necessidade legal no Brasil

---

### 11. **Integração WordPress (Preparado mas não ativo)**

**Status**: ⚠️ Código existe mas não está sendo usado

**Arquivos**:
- `lib/wordpress.ts` - API client
- `types/wordpress.ts` - Interfaces

**Decisão necessária**:
- Remover código não utilizado?
- Ou manter para uso futuro?

---

### 12. **Teste de Compartilhamento Social**

**Testar Open Graph**:
- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

**URL para testar**: https://phurshell.com.br

---

### 13. **Segurança**

**Verificar**:
- [ ] HTTPS configurado (produção)
- [ ] Headers de segurança (CSP, X-Frame-Options, etc)
- [ ] Proteção contra XSS
- [ ] Sanitização de inputs do formulário
- [ ] Rate limiting na API
- [ ] CORS configurado corretamente

---

### 14. **Domínio & Hospedagem**

**Verificar**:
- [ ] Domínio registrado
- [ ] DNS configurado
- [ ] SSL/TLS certificado
- [ ] Ambiente de produção (Vercel/Netlify/AWS)
- [ ] Variáveis de ambiente configuradas
- [ ] Backup automático

---

### 15. **Monitoramento & Alertas**

**Configurar**:
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring (New Relic, DataDog)
- [ ] Alertas por email/SMS

---

## 📊 Prioridades

### 🔴 Alta Prioridade (Fazer AGORA)
1. ❌ Criar Favicon
2. ❌ Testar formulário de contato
3. ❌ Executar Lighthouse audit
4. ❌ Testar responsividade em dispositivos reais
5. ❌ Configurar Google Analytics

### 🟡 Média Prioridade (Esta Semana)
6. ❌ Configurar Google Search Console
7. ❌ Testar compartilhamento social
8. ❌ Revisar todo o conteúdo/copy
9. ❌ Adicionar Política de Privacidade
10. ❌ Configurar error tracking (Sentry)

### 🟢 Baixa Prioridade (Próximo Sprint)
11. ❌ Melhorias de acessibilidade avançadas
12. ❌ Integração com CRM
13. ❌ Testes A/B
14. ❌ Blog/Insights dinâmico com WordPress

---

## 🚀 Próximos Passos Imediatos

1. **Criar Favicon** (15 min)
2. **Testar Formulário** (30 min)
3. **Lighthouse Audit** (15 min)
4. **Google Analytics** (20 min)
5. **Testar Mobile** (30 min)

**Tempo estimado**: ~2 horas para itens críticos

---

## 📝 Notas

- Este checklist deve ser revisado antes do deploy para produção
- Alguns itens podem não ser aplicáveis dependendo do escopo do projeto
- Priorize sempre: Performance > SEO > Estética
- Teste em dispositivos reais, não apenas no navegador

---

**Última atualização**: 2026-03-13
