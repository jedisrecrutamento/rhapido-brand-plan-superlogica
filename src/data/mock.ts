import { CompanyConfig, Job } from "@/types/company";

// Superlógica - Programa de recrutamento para pessoas com deficiência "Super Inclusão"
// Identidade: Superlógica Design Language (Sonic = azul institucional, Babar/Trooper = neutros)
export const companyConfig: CompanyConfig = {
  name: "Superlógica",
  slug: "superlogica",
  logo: "https://yt3.googleusercontent.com/SmnxQYfHLmanjjKk6r8L8m1cxjK8HRBzMA1POgh4rLFf-5pAjOGoOL9HhIaopWESSUjkLNWigw=s160-c-k-c0x00ffffff-no-rj",
  coverImage: "https://yt3.googleusercontent.com/2vFkSKZAU1WVGCrz1KfjXkRyYW4ls0zxulMAvP1k9v0iqecYzNrurEFs_sr4osl2RKoWv4JO=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",

  colors: {
    primary: "#0f34f2",
    primaryDark: "#0c2ac4",
    secondary: "#2FD3F6",
    secondaryLight: "#35B6FF",
    light: "#F3F4F7",
  },

  tagline: "Super Inclusão — Sua carreira começa aqui",
  subtitle: "Programa de recrutamento para pessoas com deficiência da Superlógica. Tecnologia, gestão e inclusão.",

  description: `A **Superlógica** é referência em software de gestão para condomínios e locação de imóveis, com mais de 20 anos de atuação e milhares de clientes em todo o Brasil.

Com o programa **Super Inclusão**, reforçamos nosso compromisso com a **diversidade e a inclusão** de pessoas com deficiência no mercado de trabalho. Queremos talentos que façam a diferença em um ambiente acessível, com oportunidades reais de crescimento.

Aqui você encontra **vagas inclusivas** em tecnologia, atendimento, administração e outras áreas, além de apoio desde o processo seletivo até a sua adaptação na equipe.`,

  stats: [
    { value: "+100 mil", label: "Condomínios administrados" },
    { value: "+6.000", label: "Imobiliárias no ecossistema" },
    { value: "+20", label: "Anos de história" },
    { value: "#1", label: "Em gestão condominial e locação" },
  ],

  institute: {
    name: "Super Inclusão",
    tagline: "Programa de recrutamento para pessoas com deficiência da Superlógica",
    description: "O Super Inclusão é o nosso programa dedicado a atrair, acolher e desenvolver profissionais com deficiência. Oferecemos vagas em diversas áreas, processo seletivo acessível, ambiente adaptado e acompanhamento para que todos possam crescer conosco.",
    stats: [
      { value: "Vagas", label: "Inclusivas abertas" },
      { value: "Acessível", label: "Processo seletivo" },
      { value: "Apoio", label: "Na adaptação" },
      { value: "Crescimento", label: "Para todos" },
    ],
    programs: [
      { name: "Vagas inclusivas", age: "Todas as áreas", description: "Tecnologia, atendimento, administrativo e mais" },
      { name: "Processo acessível", age: "Sem barreiras", description: "Etapas adaptadas e suporte durante a seleção" },
      { name: "Ambiente para todos", age: "Dia a dia", description: "Estrutura e cultura de inclusão no trabalho" },
    ],
    images: [
      "/cadeirantes.jpeg",
      "/cadeirante2.jpeg",
      "/down.jpeg",
      "/cadeirantes.jpeg",
    ],
    website: "https://superlogica.com",
  },

  website: "https://superlogica.com",
  linkedin: "https://www.linkedin.com/company/superlogica",
  instagram: "https://www.instagram.com/superlogica",
  youtube: "https://www.youtube.com/@Superlogicatec/videos",

  videos: [
    { title: "Nosso propósito", youtubeId: "Dsc8sF6rVy8" },
    { title: "Por que a Superlógica?", youtubeId: "Iwv8OstqxGo" },
  ],

  benefits: [
    { icon: "rocket", title: "Carreira", description: "Oportunidades de crescimento em uma empresa líder em tecnologia." },
    { icon: "heart", title: "Inclusão", description: "Ambiente acessível e equipe preparada para a diversidade." },
    { icon: "graduation", title: "Desenvolvimento", description: "Treinamentos e suporte para sua evolução profissional." },
    { icon: "star", title: "Benefícios", description: "Pacote competitivo e qualidade de vida no trabalho." },
  ],

  values: [
    { title: "Inovação", description: "Tecnologia a serviço das pessoas." },
    { title: "Inclusão", description: "Lugar para todos os talentos." },
    { title: "Respeito", description: "Diversidade como força." },
    { title: "Resultado", description: "Crescimento sustentável com pessoas." },
  ],

  gallery: [
    { url: "/down.jpeg", alt: "Inclusão e diversidade" },
    { url: "/cadeirantes.jpeg", alt: "Pessoas com deficiência no ambiente de trabalho" },
    { url: "/cadeirante2.jpeg", alt: "Profissional em atividade" },
  ],
};

export const jobs: Job[] = [
  { id: "1", title: "Analista de Suporte", location: "Remoto", locationType: "remote", type: "full-time", area: "Suporte", publishedAt: "2025-02-10" },
  { id: "2", title: "Desenvolvedor(a) Full Stack", location: "Remoto", locationType: "remote", type: "full-time", area: "Tecnologia", publishedAt: "2025-02-09" },
  { id: "3", title: "Analista Administrativo", location: "São Paulo - SP", locationType: "onsite", type: "full-time", area: "Administrativo", publishedAt: "2025-02-08" },
  { id: "4", title: "Atendimento ao Cliente", location: "São Paulo - SP", locationType: "hybrid", type: "full-time", area: "Atendimento", publishedAt: "2025-02-07" },
  { id: "5", title: "Analista de QA", location: "Remoto", locationType: "remote", type: "full-time", area: "Tecnologia", publishedAt: "2025-02-06" },
  { id: "6", title: "Assistente de RH", location: "São Paulo - SP", locationType: "onsite", type: "full-time", area: "Recursos Humanos", publishedAt: "2025-02-05" },
  { id: "7", title: "Designer UX/UI", location: "Remoto", locationType: "remote", type: "full-time", area: "Design", publishedAt: "2025-02-04" },
  { id: "8", title: "Analista de Dados", location: "Híbrido", locationType: "hybrid", type: "full-time", area: "Dados", publishedAt: "2025-02-03" },
  { id: "9", title: "Estagiário(a) TI", location: "São Paulo - SP", locationType: "hybrid", type: "internship", area: "Tecnologia", publishedAt: "2025-02-02" },
  { id: "10", title: "Analista Financeiro", location: "São Paulo - SP", locationType: "onsite", type: "full-time", area: "Finanças", publishedAt: "2025-02-01" },
];

export const getUniqueAreas = (jobs: Job[]): string[] => {
  return [...new Set(jobs.map((job) => job.area))].sort();
};

export const getUniqueStates = (jobs: Job[]): string[] => {
  const states = jobs
    .map((job) => {
      const parts = job.location.split(" - ");
      return parts.length > 1 ? parts[1] : null;
    })
    .filter((state): state is string => state !== null);
  return [...new Set(states)].sort();
};

export const locationTypeLabels: Record<string, string> = {
  remote: "Remoto",
  onsite: "Presencial",
  hybrid: "Híbrido",
};

export const jobTypeLabels: Record<string, string> = {
  "full-time": "Efetivo",
  "part-time": "Meio período",
  temporary: "Temporário",
  internship: "Estágio",
};
