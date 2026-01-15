
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  deployedUrl?: string;
  stars?: number;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link: string;
  description?: string;
  highlight?: string;
  technologies?: string[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
}
