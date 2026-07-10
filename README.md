# Lucrelar

Protótipo navegável de uma plataforma imobiliária focada em geração de leads e conversas pelo WhatsApp.

## Tecnologias

- Next.js com App Router
- TypeScript
- CSS global organizado
- Deploy preparado para Vercel
- Supabase planejado para banco de dados, autenticação e armazenamento de imagens

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Validação

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Rotas

- `/`
- `/imoveis`
- `/imoveis/[slug]`
- `/anuncie-seu-imovel`
- `/contato`
- `/admin`
- `/admin/imoveis`
- `/admin/imoveis/novo`

## Dados

Os imóveis atuais são demonstrativos e ficam em `data/properties.ts`. A integração real com Supabase será adicionada em uma etapa posterior.

O número provisório do WhatsApp está centralizado em `lib/whatsapp.ts`.

## Variáveis de ambiente planejadas

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Nunca envie arquivos `.env` ou a chave `SUPABASE_SERVICE_ROLE_KEY` para o GitHub.
