import { Roadmap } from '../types/roadmap';

const roadmapsData: Roadmap[] = [
  {
    id: '1',
    title: 'Frontend Development',
    description: 'Master modern web development with React, TypeScript, and cutting-edge frontend technologies. Build interactive user interfaces and responsive web applications.',
    difficulty: 'Beginner',
    duration: '6-8 months',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'REST APIs'],
    milestones: [
      {
        id: 'm1',
        title: 'Web Fundamentals',
        description: 'Learn HTML, CSS, and JavaScript basics. Understand the DOM, responsive design, and modern CSS techniques.',
        estimatedTime: '4-6 weeks',
        resources: []
      },
      {
        id: 'm2',
        title: 'JavaScript Deep Dive',
        description: 'Master ES6+ features, async programming, closures, and object-oriented programming concepts.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm3',
        title: 'React Fundamentals',
        description: 'Build component-based applications with React. Learn hooks, state management, and component lifecycle.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm4',
        title: 'TypeScript & Advanced React',
        description: 'Add type safety to your applications and learn advanced React patterns and performance optimization.',
        estimatedTime: '4-6 weeks',
        resources: []
      },
      {
        id: 'm5',
        title: 'Full Stack Integration',
        description: 'Connect to APIs, handle authentication, and integrate with backend services.',
        estimatedTime: '4-6 weeks',
        resources: []
      }
    ],
    careerOutcomes: [
      'Frontend Developer at tech companies',
      'React Developer specializing in modern frameworks',
      'UI/UX Developer creating beautiful interfaces',
      'Full Stack Developer with frontend focus'
    ]
  },
  {
    id: '2',
    title: 'Backend Development',
    description: 'Build robust server-side applications and APIs. Learn database design, authentication, and scalable architecture patterns.',
    difficulty: 'Intermediate',
    duration: '8-10 months',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Docker', 'AWS'],
    milestones: [
      {
        id: 'm1',
        title: 'Server-Side Programming',
        description: 'Learn Node.js fundamentals, event loop, modules, and building basic servers.',
        estimatedTime: '4-6 weeks',
        resources: []
      },
      {
        id: 'm2',
        title: 'Database Design',
        description: 'Master SQL and NoSQL databases, data modeling, and query optimization.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm3',
        title: 'RESTful API Development',
        description: 'Build scalable APIs with Express, implement authentication, and handle errors properly.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm4',
        title: 'Advanced Backend Concepts',
        description: 'Learn caching, message queues, microservices, and system design principles.',
        estimatedTime: '8-10 weeks',
        resources: []
      },
      {
        id: 'm5',
        title: 'Deployment & DevOps',
        description: 'Deploy applications to cloud platforms, set up CI/CD pipelines, and monitor production systems.',
        estimatedTime: '4-6 weeks',
        resources: []
      }
    ],
    careerOutcomes: [
      'Backend Developer at startups and enterprises',
      'API Developer building scalable services',
      'DevOps Engineer managing infrastructure',
      'Full Stack Developer with backend expertise'
    ]
  },
  {
    id: '3',
    title: 'Full Stack Development',
    description: 'Become a versatile developer capable of building complete web applications from database to user interface.',
    difficulty: 'Advanced',
    duration: '10-12 months',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Testing'],
    milestones: [
      {
        id: 'm1',
        title: 'Frontend Mastery',
        description: 'Deep dive into React, state management, and modern frontend architecture.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm2',
        title: 'Backend Architecture',
        description: 'Build scalable APIs, implement authentication, and design database schemas.',
        estimatedTime: '8-10 weeks',
        resources: []
      },
      {
        id: 'm3',
        title: 'Full Stack Integration',
        description: 'Connect frontend and backend, handle real-time features, and implement end-to-end testing.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm4',
        title: 'System Design',
        description: 'Learn scalability patterns, caching strategies, and microservices architecture.',
        estimatedTime: '8-10 weeks',
        resources: []
      },
      {
        id: 'm5',
        title: 'Production Ready',
        description: 'Deploy to cloud, set up monitoring, implement CI/CD, and optimize performance.',
        estimatedTime: '4-6 weeks',
        resources: []
      }
    ],
    careerOutcomes: [
      'Full Stack Developer at any tech company',
      'Technical Lead managing projects',
      'Startup CTO or founding engineer',
      'Software Architect designing systems'
    ]
  },
  {
    id: '4',
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications for iOS and Android using React Native and modern mobile development practices.',
    difficulty: 'Intermediate',
    duration: '8-10 months',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'Mobile UI/UX', 'APIs', 'Firebase', 'App Store'],
    milestones: [
      {
        id: 'm1',
        title: 'Mobile Development Basics',
        description: 'Learn mobile development fundamentals, React Native setup, and core components.',
        estimatedTime: '4-6 weeks',
        resources: []
      },
      {
        id: 'm2',
        title: 'Navigation & State',
        description: 'Implement navigation patterns, state management, and offline functionality.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm3',
        title: 'Native Features',
        description: 'Access device features like camera, location, notifications, and sensors.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm4',
        title: 'Performance & Optimization',
        description: 'Optimize app performance, handle large lists, and improve user experience.',
        estimatedTime: '4-6 weeks',
        resources: []
      },
      {
        id: 'm5',
        title: 'Deployment',
        description: 'Publish apps to App Store and Google Play, handle updates and monitoring.',
        estimatedTime: '3-4 weeks',
        resources: []
      }
    ],
    careerOutcomes: [
      'Mobile Developer at tech companies',
      'React Native Specialist',
      'Cross-platform Developer',
      'Mobile App Consultant'
    ]
  },
  {
    id: '5',
    title: 'DevOps Engineering',
    description: 'Master cloud infrastructure, automation, and continuous deployment. Learn to build and maintain scalable, reliable systems.',
    difficulty: 'Advanced',
    duration: '10-12 months',
    skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Monitoring', 'Security'],
    milestones: [
      {
        id: 'm1',
        title: 'Linux & Scripting',
        description: 'Master Linux administration, shell scripting, and system fundamentals.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm2',
        title: 'Containerization',
        description: 'Learn Docker, container orchestration with Kubernetes, and microservices deployment.',
        estimatedTime: '8-10 weeks',
        resources: []
      },
      {
        id: 'm3',
        title: 'Cloud Platforms',
        description: 'Master AWS services, infrastructure as code with Terraform, and cloud architecture.',
        estimatedTime: '8-10 weeks',
        resources: []
      },
      {
        id: 'm4',
        title: 'CI/CD Pipelines',
        description: 'Build automated deployment pipelines, implement testing strategies, and ensure quality.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm5',
        title: 'Monitoring & Security',
        description: 'Set up monitoring, logging, alerting, and implement security best practices.',
        estimatedTime: '4-6 weeks',
        resources: []
      }
    ],
    careerOutcomes: [
      'DevOps Engineer at enterprises',
      'Cloud Infrastructure Engineer',
      'Site Reliability Engineer (SRE)',
      'Platform Engineer building tools'
    ]
  },
  {
    id: '6',
    title: 'Data Science & ML',
    description: 'Dive into data analysis, machine learning, and artificial intelligence. Learn to build predictive models and extract insights from data.',
    difficulty: 'Advanced',
    duration: '12-14 months',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'SQL', 'Statistics', 'Deep Learning'],
    milestones: [
      {
        id: 'm1',
        title: 'Python & Statistics',
        description: 'Master Python programming, statistical analysis, and data manipulation.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm2',
        title: 'Data Analysis',
        description: 'Learn data cleaning, exploratory analysis, and visualization techniques.',
        estimatedTime: '6-8 weeks',
        resources: []
      },
      {
        id: 'm3',
        title: 'Machine Learning',
        description: 'Understand ML algorithms, model training, and evaluation techniques.',
        estimatedTime: '10-12 weeks',
        resources: []
      },
      {
        id: 'm4',
        title: 'Deep Learning',
        description: 'Build neural networks, work with TensorFlow/PyTorch, and solve complex problems.',
        estimatedTime: '10-12 weeks',
        resources: []
      },
      {
        id: 'm5',
        title: 'ML Engineering',
        description: 'Deploy models to production, build ML pipelines, and monitor model performance.',
        estimatedTime: '6-8 weeks',
        resources: []
      }
    ],
    careerOutcomes: [
      'Data Scientist at tech companies',
      'Machine Learning Engineer',
      'AI Research Scientist',
      'Data Analyst with ML expertise'
    ]
  }
];

// Function to fetch roadmaps
export const getRoadmaps = (): Roadmap[] => {
  return roadmapsData;
};

// Get roadmap by ID
export const getRoadmapById = (id: string): Roadmap | undefined => {
  return roadmapsData.find(roadmap => roadmap.id === id);
};

// Filter difficulty
export const getRoadmapsByDifficulty = (difficulty: string): Roadmap[] => {
  return roadmapsData.filter(roadmap => roadmap.difficulty === difficulty);
};