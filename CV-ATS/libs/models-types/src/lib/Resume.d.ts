export interface Resume {
  name: string;
  grade: string;
  email: string;
  address: string;
  phone: string;
  birthDate: string;
  nationality: string;
  linkedin: string;
  objective: string;
  skills: Skill[];
  idioms: Idiom[];
  experiences: Experience[];
  educations: Education[];
}

export interface Education {
  location: string;
  since: string;
  to: string;
  career: string;
  institution: string;
}

export interface Experience {
  location?: string;
  since?: string;
  to?: string;
  position: string;
  company: string;
  description: string;
  projects?: Project[];
  tools?: string[];
}

export interface Project {
  name: string;
  description: string;
  tools: string[];
}
export interface Idiom {
  language: string;
  level: string;
  studies: string;
}

export interface Skill {
  skill: string;
  level: string;
}
