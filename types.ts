
export interface BuildStep {
  label: string;
  description: string;
}

export interface AutomationProject {
  id: string;
  title: string;
  concept: string;
  role: string;
  challenge: string;
  solution: string;
  techStack: string[];
  steps: BuildStep[];
}

export interface MobileAppProject {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  features: string[];
  techStack: string[];
  image: string;
}
