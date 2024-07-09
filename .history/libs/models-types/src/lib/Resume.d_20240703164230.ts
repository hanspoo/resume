export interface Resume {
  contactInfo: ContactInfo;
  objective: string;
  summary: Summary;
  skills: Skill[];
  idioms: Idiom[];
  experiences: Experience[];
  educations: Education[];
}

export interface Summary {
  pitch: string;
  highlights: string[];
  competencies: Skill[];
}

export interface ContactInfo {
  resumeEmail: string;
  name: string;
  certgree: string;
  location: string;
  phone: string;
  birthDate: string;
  nationality: string;
  linkedin: string;
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

export interface SkillsList {
  [category: string]: string[];
}
