# synses.app

Site institucional público da Synses. Projeto separado do aplicativo.

Next.js (App Router) + TypeScript + Tailwind + `next/font` (Plus Jakarta Sans e Inter). Páginas estáticas: `/`, `/privacidade`, `/termos`, além de `sitemap.xml`, `robots.txt` e imagem Open Graph. Sem analytics, pixels ou cookies.

## Marca

Segue a Opção 1 "Clareza Analítica" aprovada em 13 out, a mesma do app (`Workme/docs/design/aderencia-marca-synses-2026-10-13.md`). Os tokens de `src/app/globals.css` são os do app. O logo em `public/brand/` foi copiado do app e ainda é raster: falta o master vetorial de quem desenhou o logo.

## Telas do produto

`public/produto/*.png` são telas reais do app (`Workme`), capturadas a 1440 × 900 em 2x:
- build de produção local, sem o selo do Next;
- banco PGlite novo (`.data/site-shots`), com uma conta local fictícia: Marina Souza (`marina@exemplo.test`), empresa "Ateliê Bem Feito" (camisetas e canecas personalizadas);
- consultor simulado (`AI_PROVIDER=mock`, `CONVERSATION_TOOLS=on`);
- planilhas fictícias de `scripts/fixtures/roteiro-g3b/`: `01_custos_diretos_sistema`, `02_gastos_indiretos_mensais`, `03_producao_e_horas_por_produto` e `04_vendas_por_produto`.

Roteiro: "Quanto eu ganho em cada coisa que vendo?" → enviar as quatro planilhas → "Unidades produzidas" → "Sim, pode" → "e quanto sobra em cada produto?" → "É o que faturei no mês" → "Sai de cada venda".

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Sem as variáveis do Resend, o formulário simula o envio em desenvolvimento e mostra a mensagem no terminal.

## Antes de publicar

- [ ] Revisão jurídica de `/privacidade` e `/termos`.
- [ ] Configurar o Resend (abaixo) e testar o formulário no ambiente de preview da Vercel.

## Formulário (Resend)

O envio usa a API do Resend a partir de um **subdomínio** (`forms.synses.app`), para não interferir no e-mail corporativo da GoDaddy no domínio raiz.

1. No Resend, adicione o domínio `forms.synses.app`.
2. Na GoDaddy, crie **apenas** os registros que o Resend pedir para esse subdomínio (DKIM, SPF/MX de retorno em `send.forms...`).
   - Não altere os registros MX existentes de `synses.app`.
   - Não crie um segundo registro SPF no domínio raiz.
3. Na Vercel (Settings → Environment Variables), configure as variáveis descritas em `.env.example`:
   - `RESEND_API_KEY`
   - `CONTACT_FROM_EMAIL` (ex.: `Site Synses <contato@forms.synses.app>`)
   - `CONTACT_TO_EMAIL` (seu e-mail corporativo já existente)

As respostas usam `reply-to` com o e-mail de quem preencheu o formulário.

## Deploy na Vercel

1. Suba o repositório para o GitHub e importe o projeto na Vercel (framework detectado automaticamente).
2. Configure as variáveis de ambiente.
3. Valide o preview antes de conectar `synses.app`.
4. Para conectar o domínio, a Vercel pede um registro A (raiz) e/ou CNAME (`www`). Esses registros não afetam os MX do e-mail.
