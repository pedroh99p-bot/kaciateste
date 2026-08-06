# Configuração de prospects

O prospect modelo está em `src/prospects/configs/modelo.ts`.

Para cadastrar um novo lead, duplique a configuração modelo, troque os campos comerciais e registre o novo arquivo em `src/prospects/registry.ts`.

Campos principais:

- `slug`
- `business`
- `specialist`
- `contact`
- `location`
- `assets`
- `services`
- `benefits`
- `process`
- `testimonials`
- `proof`
- `theme`
- `typography`
- `copy`
- `rollers`
- `seo`

Provas sociais só devem aparecer quando `proof.enabled` ou `testimonials.enabled` estiverem habilitados com dados reais ou claramente demonstrativos.

As demonstrações ficam com `noindex` por padrão. Só permita indexação quando `status` for `client` e `seo.allowIndexing` for `true`.
