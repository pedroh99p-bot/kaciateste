# Regras permanentes do projeto

Este projeto é uma fábrica de landing pages premium para despachantes. A aplicação deve continuar configurável por prospect e não deve virar um conjunto de páginas duplicadas.

## Regras não negociáveis

- Não colocar dados de lead diretamente nos componentes.
- Não criar componente exclusivo para um prospect.
- Não usar as imagens da pasta `referencias/` como assets finais.
- Não inventar avaliações, prazos, garantias, números, certificações ou provas sociais.
- Não prometer aprovação ou prazo dependente de órgãos públicos.
- Não criar banco, CMS, painel administrativo, push, deploy ou repositório remoto sem pedido explícito.
- Não usar classes dinâmicas imprevisíveis para tema; use tokens e variáveis CSS.
- Manter WhatsApp, SEO, tema, copy, assets e seções controlados por configuração.

## Fluxo recomendado

1. Alterar ou criar prospect em `src/prospects/configs/`.
2. Registrar o slug em `src/prospects/registry.ts`.
3. Executar `npm run prospect:validate`.
4. Executar `npm run typecheck`, `npm run lint` e `npm run build`.
5. Revisar mobile primeiro: 360, 390 e 430 px.

## Referências visuais

As imagens em `referencias/` são uma única landing mobile dividida em partes. Elas devem orientar hierarquia, ritmo, contraste, CTAs, cards e composição; nunca devem ser copiadas como imagens dentro da interface.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
