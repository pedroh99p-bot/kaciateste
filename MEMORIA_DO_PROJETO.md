# Memoria do projeto — base despachante

Este projeto deve usar a memoria/metodo da skill `digital-project-studio` como fonte principal de estrategia, design, tecnologia, conversao e QA.

## Fonte de metodo carregada

- Skill instalada: `digital-project-studio`
- Referencias aplicadas neste projeto:
  - catalogo de projetos e aprendizados brasileiros
  - guia de escolha de stack
  - sistema de design e direcao visual
  - playbook de sites, ofertas e conversao
  - checklist de QA, SEO, performance e entrega

## Estado atual

- Pasta inspecionada: `base (despachante)`
- Inventario atual: projeto vazio, sem stack definida, sem arquivos de site, sem scripts e sem dados sensiveis encontrados.
- Recomendacao inicial: se o objetivo for criar uma landing/site simples de despachante, usar HTML + CSS + JavaScript. Nao usar React, Next.js, banco ou CMS sem uma necessidade real.

## Direcao do projeto

Objetivo provavel: criar uma base de site/landing para servico de despachante ou documentacao veicular no Brasil.

Acao primaria recomendada: contato pelo WhatsApp para tirar duvidas, solicitar orcamento ou iniciar atendimento.

Tom visual e de copy:

- documental
- claro
- confiavel
- pratico
- responsavel
- local

Evitar:

- promessas de resultado garantido
- dados inventados de experiencia, credenciais, avaliacoes ou prazo
- visual juridico generico demais, como excesso de balancas, carimbos ou simbolos burocraticos sem identidade
- texto vago que poderia servir para qualquer negocio

## Briefing minimo antes de publicar

Confirmar com o usuario ou com os ativos reais:

- nome do despachante/empresa
- cidade, bairro ou area atendida
- WhatsApp com DDD
- endereco, horario e canais de atendimento, se houver
- Instagram, Google Business ou outra prova externa
- servicos realmente oferecidos
- diferenciais verdadeiros
- fotos, logo, identidade visual e documentos visuais permitidos
- restricoes legais/comerciais

Servicos comuns do nicho podem aparecer apenas como exemplos ou placeholders ate confirmacao, como transferencia, licenciamento, segunda via, comunicacao de venda, regularizacao, multas e CNH.

## Arquitetura recomendada da pagina

1. Header com logo/nome, navegacao curta e CTA para WhatsApp.
2. Hero literal: o que faz, para quem, em qual regiao e qual proximo passo.
3. Faixa de confianca com prova real quando existir: local, atendimento, experiencia confirmada, avaliacao ou canais oficiais.
4. Secao de problemas comuns: documentacao atrasada, duvida sobre processo, compra/venda de veiculo, regularizacao.
5. Lista de servicos confirmados.
6. Como funciona em 3 ou 4 passos.
7. Prova, autoridade ou explicacao de seguranca.
8. FAQ com objecoes reais.
9. CTA final para WhatsApp.
10. Rodape com dados completos e links.

## Regras de design

- Mobile-first: validar primeiro em telas de 390 px e 430 px.
- Primeiro viewport precisa mostrar servico, local/publico, beneficio, confianca e CTA.
- Usar contraste forte e texto legivel.
- Evitar carrosseis e efeitos pesados se nao melhorarem a decisao do usuario.
- Usar imagem real quando existir; se usar imagem ilustrativa, deixar coerente com o nicho e nao fingir que e foto real do cliente.
- CTA flutuante de WhatsApp nao pode cobrir formulario, FAQ ou rodape no mobile.

## Regras tecnicas

- Preservar a stack existente se futuramente arquivos forem adicionados.
- Para base nova e estatica: HTML semantico, CSS responsivo e JavaScript progressivo.
- Usar links de WhatsApp no formato `https://wa.me/55DDDNUMERO?text=MENSAGEM_CODIFICADA` somente quando o numero real for confirmado.
- Nunca salvar tokens, chaves, `.env`, dados pessoais privados ou credenciais no projeto.
- Metadados devem usar nome real do negocio antes de publicar: title, description, og:title, og:description, og:image e favicon.

## Checklist de QA antes de entregar

- Sem overflow horizontal em 390, 430, 768 e desktop.
- CTA principal aparece cedo e funciona.
- Menu mobile, FAQ, formularios e links funcionam por toque e teclado.
- Texto cabe em botoes, cards e navegacao.
- Imagens mantem proporcao e tem texto alternativo adequado.
- WhatsApp usa numero correto e mensagem contextual.
- SEO basico preenchido.
- Console sem erro que quebre a jornada.
- Se houver build/testes, executar os comandos existentes.

## Criterio de pronto

O projeto so deve ser considerado pronto quando o artefato solicitado existir, a acao principal estiver funcionando, os dados reais estiverem corretos ou marcados como placeholders, e as validacoes aplicaveis tiverem sido executadas e relatadas.
