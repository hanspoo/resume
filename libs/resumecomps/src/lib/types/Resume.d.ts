interface Resume {
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

interface Education {
  location: string;
  since: string;
  to: string;
  career: string;
  institution: string;
}

interface Experience {
  location?: string;
  since?: string;
  to?: string;
  position: string;
  company: string;
  description: string;
  projects?: Project[];
  tools?: string[];
}

interface Project {
  name: string;
  description: string;
  tools: string[];
}
interface Idiom {
  language: string;
  level: string;
  studies: string;
}

interface Skill {
  skill: string;
  level: string;
}
