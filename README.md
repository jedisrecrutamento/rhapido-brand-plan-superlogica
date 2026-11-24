<div align="center">

<img src="./public/logo-superlogica.svg" alt="Superlógica" height="56" />

# Super Inclusão · Página de Carreiras PCD

**Página de carreiras do programa de recrutamento para pessoas com deficiência da Superlógica, feita com o RHapido.**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<sub>Um projeto <a href="https://jedis.com.br">Jedis Recrutamento e Tecnologia</a> · parte da plataforma ⚡ <strong>RHapido</strong></sub>

</div>

---

## ♿ Sobre o projeto

O **Super Inclusão** é uma página de carreiras com a identidade visual da Superlógica, criada para **atrair, acolher e contratar profissionais com deficiência (PCD)**.

Ela faz parte do **Brand Plan do RHapido**, o ATS da Jedis. Cada cliente pode ter sua própria página de carreiras, com marca, conteúdo e vagas próprias, a partir de uma única configuração. Este repositório é a versão feita para a Superlógica.

## ✨ O que tem na página

| | Seção | O que faz |
|---|---|---|
| 🖼️ | **Banner + logo** | Capa institucional com o logo da empresa sobreposto. |
| 💬 | **Apresentação** | Tagline, descrição da empresa e imagens que mostram o programa. |
| 🎬 | **Vídeos institucionais** | Vídeos do YouTube incorporados (propósito e cultura). |
| 🔗 | **Redes sociais** | Links para site, LinkedIn, Instagram e YouTube. |
| 💼 | **Vagas** | Lista de vagas com **busca por texto** e **filtros** por modalidade, tipo de contrato, área e estado, além de contador de resultados e botão para limpar os filtros. |
| 🙋 | **Banco de talentos** | Chamada para quem não encontrou uma vaga e quer se cadastrar. |
| 💙 | **Programa Super Inclusão** | Banner do programa, grade de imagens com números e os pilares: vagas inclusivas, processo acessível e ambiente para todos. |

## 🧩 Personalizável por cliente

A página é montada a partir de um único objeto `CompanyConfig` (veja [`src/types/company.ts`](./src/types/company.ts)). Para criar a página de outro cliente, basta trocar a configuração. Não é preciso mexer nos componentes.

```ts
export const companyConfig: CompanyConfig = {
  name: "Superlógica",
  slug: "superlogica",
  colors: { primary: "#0f34f2", secondary: "#2FD3F6", /* ... */ },
  tagline: "Super Inclusão — Sua carreira começa aqui",
  institute: {                 // programa de impacto (ex.: PCD)
    name: "Super Inclusão",
    programs: [/* ... */],
  },
  videos: [/* ... */],
  // benefits, values, gallery, links sociais...
};
```

| Campo | Para que serve |
|---|---|
| `name`, `slug`, `logo`, `coverImage` | Identidade básica da empresa |
| `colors` | Paleta da marca, aplicada em toda a página |
| `tagline`, `subtitle`, `description` | Textos institucionais (a descrição aceita **negrito**) |
| `stats` | Números em destaque |
| `institute` | Programa de impacto: nome, descrição, números, pilares e imagens |
| `videos` | IDs de vídeos do YouTube |
| `benefits`, `values`, `gallery` | Benefícios, cultura e galeria de fotos |
| `website`, `linkedin`, `instagram`, `youtube` | Links externos |

As vagas seguem o tipo `Job`:

```ts
interface Job {
  id: string;
  title: string;
  location: string;                                   // ex.: "São Paulo - SP" ou "Remoto"
  locationType: "remote" | "onsite" | "hybrid";
  type: "full-time" | "part-time" | "temporary" | "internship";
  area: string;
  publishedAt: string;                                // AAAA-MM-DD
}
```

> ℹ️ Por enquanto a configuração e as vagas vêm de dados de exemplo em [`src/data/mock.ts`](./src/data/mock.ts). O próximo passo é buscar esses dados na API do RHapido.

## 🚀 Como rodar

**Pré-requisitos:** Node.js 20 ou superior e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/jedisrecrutamento/rhapido-brand-plan-superlogica.git
cd rhapido-brand-plan-superlogica

# 2. Instale as dependências
npm install

# 3. Suba o ambiente de desenvolvimento
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000).

| Script | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Sobe a build de produção |
| `npm run lint` | Roda o ESLint |

## 📁 Estrutura

```
.
├── public/                 # Logo e imagens do programa
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout raiz, fonte Inter, metadados/SEO, lang pt-BR
│   │   ├── page.tsx        # Página de carreiras (seções, busca e filtros)
│   │   └── globals.css     # Estilos globais (Tailwind CSS v4)
│   ├── data/
│   │   └── mock.ts         # Configuração da Superlógica + vagas de exemplo
│   └── types/
│       └── company.ts      # Tipos CompanyConfig, Job e JobFilters
└── package.json
```

## 🗺️ Próximos passos

- [ ] Buscar configuração e vagas na API do RHapido, no lugar dos dados de exemplo
- [ ] Ligar o botão do **banco de talentos** ao cadastro de candidatos
- [ ] Página de detalhe da vaga com candidatura
- [ ] Roteamento por `slug` para atender vários clientes num único deploy
- [ ] Auditoria de acessibilidade (WCAG 2.1 AA): contraste, leitor de tela e navegação por teclado

---

<div align="center">

Feito com 💙 pela <a href="https://jedis.com.br"><strong>Jedis Recrutamento e Tecnologia</strong></a>
<br />
<sub>Tecnologia que acelera. Talentos que entregam.</sub>

</div>
