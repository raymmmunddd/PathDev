export interface Milestone {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'course' | 'book' | 'project';
  url: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  skills: string[];
  milestones: Milestone[];
  careerOutcomes: string[];
}