export interface EnrolledRoadmap {
  id: string;
  title: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  currentLesson: string;
  timeSpent: string;
}

export interface LessonSection {
  title: string;
  content: string;
  codeExample?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  sections: LessonSection[];
  keyPoints: string[];
}

export interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswer: number;
}

export interface Quiz {
  title: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface RoadmapContent {
  id: string;
  title: string;
  description: string;
  progress: number;
  lesson: Lesson;
  quiz: Quiz;
}