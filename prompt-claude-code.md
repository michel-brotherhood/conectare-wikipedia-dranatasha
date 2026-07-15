# Prompt para Claude Code — Wiki Dra. Natasha Slhessarenko

## INSTRUÇÃO GERAL

Construa uma wiki enciclopédica para a **Dra. Natasha Slhessarenko**, pré-candidata ao Governo de Mato Grosso pelo PSD em 2026. O formato deve seguir exatamente o estilo da wiki de referência: **https://wiki.deputadovitorjunior.com.br/**

## ESTRUTURA DA WIKI

A wiki deve ter **4 páginas principais** acessíveis via menu de navegação superior:

### 1. Artigo (página principal — `/`)
- Artigo enciclopédico completo sobre Natasha Slhessarenko
- Infobox com dados pessoais (nome completo, nascimento, naturalidade, formação, partido, profissão, CRM, Instagram)
- Índice numerado com seções: Trajetória pessoal, Formação acadêmica, Carreira médica e empreendedorismo, Atuação no CFM, Pré-candidatura, Propostas, Carta Compromisso, Posicionamentos, Vida pessoal, Ver também, Referências, FAQ
- Referências numeradas com links clicáveis
- Seção de perguntas frequentes (FAQ) no final

### 2. Trajetória (`/trajetoria`)
- Linha do tempo vertical interativa com 15 marcos (1968–2026)
- Cada marco com ano, título, descrição e ícone
- Alternância de lados (esquerda/direita) em desktop, empilhada em mobile
- Animação de entrada ao scroll (fade-in + slide)

### 3. Propostas (`/propostas`)
- 4 áreas temáticas: Saúde, Mulheres (Carta Compromisso com 18 propostas), Segurança Pública, Gestão Pública
- Cards de propostas com título, descrição e ícone
- Tabela completa das 18 propostas da Carta Compromisso
- Citações em destaque (blockquote)

### 4. Contato (`/contato`)
- Redes sociais (Instagram @dranatashamt)
- Site oficial
- Partido e coligação

## DESIGN

### Paleta de cores (institucional da campanha)

```css
:root {
  --color-roxo: #6E2594;
  --color-laranja: #FF6B35;
  --color-rosa: #EF476F;
  --color-azul-turquesa: #00C2D1;
  --color-amarelo: #ECCD44;
  --color-roxo-claro: #9B59B6;
  --color-laranja-claro: #FFA07A;
  --color-rosa-claro: #FF8FAB;
  --color-turquesa-escuro: #008CBA;
  --gradient-primary: linear-gradient(135deg, #6E2594 0%, #EF476F 50%, #FF6B35 100%);
  --gradient-secondary: linear-gradient(135deg, #00C2D1 0%, #6E2594 100%);
  --gradient-tertiary: linear-gradient(135deg, #EF476F 0%, #FF6B35 100%);
  --gradient-footer: linear-gradient(90deg, #6E2594, #EF476F, #FF6B35, #ECCD44, #00C2D1);
  --color-text-dark: #1A1A2E;
  --color-text-light: #FFFFFF;
  --color-bg-light: #FAFAFA;
  --color-bg-white: #FFFFFF;
}
```

### Tipografia

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&family=Pacifico&display=swap" rel="stylesheet" />
```

- **Headlines:** Montserrat (700–900)
- **Corpo:** Poppins (400–600)
- **Assinatura/script:** Pacifico (apenas para elementos decorativos)

### Layout

- Header fixo com logo "Doutora NATASHA | Wiki" e navegação (Artigo, Trajetória, Propostas, Contato)
- Footer com ribbon gradiente `--gradient-footer` (faixa colorida de 4px no topo do footer)
- Background claro (#FAFAFA) com cards brancos
- Categorias hierárquicas no topo: "Mato Grosso › Política › PSD › Natasha Slhessarenko"
- Referências numeradas no estilo Wikipedia [1], [2], etc.
- Infobox flutuante à direita em desktop, empilhada em mobile
- Responsivo: mobile-first, breakpoints em 640px, 768px, 1024px

### Elementos visuais

- **Ribbon footer:** faixa gradiente de 4px no topo do footer com `--gradient-footer`
- **Ícones:** usar os 20 ícones da campanha (fornecidos separadamente em PNG com fundo transparente)
- **Citações:** blockquote com borda esquerda em `--color-roxo` e fundo levemente colorido
- **Tabelas:** cabeçalho com fundo `--color-roxo` e texto branco, linhas alternadas
- **Links internos:** cor `--color-roxo` com underline ao hover

## CONTEÚDO

O conteúdo completo de cada página está nos arquivos Markdown fornecidos junto com este prompt:

| Arquivo | Página |
|---------|--------|
| `artigo-principal.md` | Artigo principal (home) |
| `trajetoria.md` | Página de Trajetória |
| `propostas.md` | Página de Propostas |
| `contato.md` | Página de Contato |

Cada arquivo contém o texto completo, com referências numeradas, citações e tabelas. Use o conteúdo diretamente, formatando em HTML/React conforme necessário.

## SEO

- `<title>` único por página
- Meta description por página
- Open Graph tags (og:title, og:description, og:image)
- Schema.org Article markup para o artigo principal
- Sitemap.xml
- Robots.txt
- URLs amigáveis: `/`, `/trajetoria`, `/propostas`, `/contato`

## STACK RECOMENDADA

- Next.js (App Router) ou Astro para SSG/SSR
- Tailwind CSS para estilização
- Framer Motion para animações da timeline
- React Markdown ou MDX para renderizar o conteúdo

## OBSERVAÇÕES

- As fotos da Dra. Natasha serão fornecidas separadamente
- Os 20 ícones da campanha serão fornecidos separadamente (PNG com fundo transparente)
- O logo da campanha será fornecido separadamente
- O conteúdo é factual e baseado em fontes verificáveis (Itatiaia, RDM Online, Portal do CFM, Folha Max, Vida VG, Wikipédia)
- Manter tom enciclopédico, impessoal e factual em todo o site
- Seguir o estilo visual da wiki de referência: https://wiki.deputadovitorjunior.com.br/
