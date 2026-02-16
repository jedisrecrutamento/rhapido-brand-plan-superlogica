// Tipos para configuração da empresa - Estrutura SaaS

export interface CompanyConfig {
  // Informações básicas
  name: string;
  slug: string;
  logo: string;
  coverImage: string;
  
  // Cores da marca
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    light: string;
  };
  
  // Textos
  tagline: string;
  subtitle?: string;
  description: string;
  
  // Estatísticas em destaque
  stats?: {
    value: string;
    label: string;
  }[];
  
  // Instituto / Programa de impacto (ex.: pessoas com deficiência)
  institute?: {
    name: string;
    tagline: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
    programs: {
      name: string;
      age: string;
      description: string;
    }[];
    images: string[];
    website: string;
  };
  
  // Links
  website?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  
  // Vídeos institucionais
  videos?: {
    title: string;
    youtubeId: string;
  }[];
  
  // Benefícios/Por que trabalhar aqui
  benefits?: {
    icon: string;
    title: string;
    description: string;
  }[];
  
  // Valores/cultura
  values?: {
    title: string;
    description: string;
  }[];
  
  // Galeria de imagens
  gallery?: {
    url: string;
    alt: string;
  }[];
}

export interface Job {
  id: string;
  title: string;
  location: string;
  locationType: 'remote' | 'onsite' | 'hybrid';
  type: 'full-time' | 'part-time' | 'temporary' | 'internship';
  area: string;
  publishedAt: string;
}

export interface JobFilters {
  search: string;
  locationType: string;
  type: string;
  area: string;
  state: string;
}
