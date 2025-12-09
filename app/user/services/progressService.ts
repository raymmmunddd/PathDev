import { EnrolledRoadmap, RoadmapContent } from '../types/progress';

const enrolledRoadmapsData: EnrolledRoadmap[] = [
  {
    id: '1',
    title: 'Frontend Development',
    progress: 45,
    completedLessons: 5,
    totalLessons: 12,
    currentLesson: 'React Hooks',
    timeSpent: '24 hours'
  },
  {
    id: '2',
    title: 'Backend Development',
    progress: 20,
    completedLessons: 2,
    totalLessons: 10,
    currentLesson: 'Node.js Basics',
    timeSpent: '10 hours'
  }
];

const roadmapContentData: { [key: string]: RoadmapContent } = {
  '1': {
    id: '1',
    title: 'Frontend Development',
    description: 'Master modern web development with React and TypeScript',
    progress: 45,
    lesson: {
      id: 'lesson-1',
      title: 'Introduction to React Hooks',
      duration: '45 minutes',
      sections: [
        {
          title: 'What are React Hooks?',
          content: `React Hooks are functions that let you use state and other React features in functional components. Before Hooks, you had to use class components to manage state and lifecycle methods.

Hooks were introduced in React 16.8 to make it easier to reuse stateful logic between components and to simplify complex components. They allow you to organize the logic inside a component into reusable isolated units.`
        },
        {
          title: 'The useState Hook',
          content: `The useState Hook is the most commonly used Hook. It allows you to add state to functional components. When you call useState, it returns an array with two elements: the current state value and a function to update it.

Here's how it works: you pass the initial state as an argument to useState, and it returns the current state and an updater function. Every time you call the updater function, React re-renders the component with the new state value.`,
          codeExample: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
        },
        {
          title: 'The useEffect Hook',
          content: `The useEffect Hook lets you perform side effects in functional components. Side effects are operations like data fetching, subscriptions, or manually changing the DOM.

useEffect runs after every render by default, but you can control when it runs by passing a dependency array. If you pass an empty array, the effect only runs once after the initial render, similar to componentDidMount in class components.`,
          codeExample: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // This runs when userId changes
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]); // Dependency array
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}`
        }
      ],
      keyPoints: [
        'Hooks let you use state and lifecycle features in functional components',
        'useState manages component state and triggers re-renders when updated',
        'useEffect handles side effects like data fetching and subscriptions',
        'The dependency array controls when effects run',
        'Hooks must be called at the top level of your component'
      ]
    },
    quiz: {
      title: 'React Hooks Assessment',
      passingScore: 70,
      questions: [
        {
          question: 'What does the useState Hook return?',
          answers: [
            'A single state value',
            'An array with current state and updater function',
            'An object with state properties',
            'A function to update state'
          ],
          correctAnswer: 1
        },
        {
          question: 'When does useEffect run by default?',
          answers: [
            'Only once when component mounts',
            'Only when state changes',
            'After every render',
            'Before every render'
          ],
          correctAnswer: 2
        },
        {
          question: 'What happens when you pass an empty dependency array [] to useEffect?',
          answers: [
            'The effect runs after every render',
            'The effect never runs',
            'The effect runs only once after initial render',
            'The effect runs when any state changes'
          ],
          correctAnswer: 2
        },
        {
          question: 'Which statement about Hooks is correct?',
          answers: [
            'Hooks can be called inside loops and conditions',
            'Hooks can only be used in class components',
            'Hooks must be called at the top level of components',
            'Hooks are optional in React applications'
          ],
          correctAnswer: 2
        },
        {
          question: 'What is the main benefit of React Hooks?',
          answers: [
            'They make components load faster',
            'They allow reusing stateful logic without changing component hierarchy',
            'They are required for all React components',
            'They replace all class components automatically'
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  '2': {
    id: '2',
    title: 'Backend Development',
    description: 'Build robust server-side applications with Node.js',
    progress: 20,
    lesson: {
      id: 'lesson-2',
      title: 'Introduction to Node.js and Express',
      duration: '50 minutes',
      sections: [
        {
          title: 'What is Node.js?',
          content: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, outside of a web browser.

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. This architecture is perfect for building scalable network applications like APIs, real-time chat applications, and streaming services.`
        },
        {
          title: 'Setting Up Express',
          content: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building server-side applications.

Express provides methods to specify what function is called for a particular HTTP verb (GET, POST, PUT, DELETE, etc.) and URL pattern ("Route"), and methods to specify what template engine is used and where template files are located.`,
          codeExample: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
        },
        {
          title: 'Creating API Routes',
          content: `Routes define the endpoints of your application. Each route can have one or more handler functions, which are executed when the route is matched.

Routes are essential for organizing your API logic and handling different HTTP methods. You can create separate route files and import them into your main application for better code organization.`,
          codeExample: `app.get('/api/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Save user to database
  res.status(201).json({ message: 'User created', user: newUser });
});`
        }
      ],
      keyPoints: [
        'Node.js allows JavaScript to run on the server side',
        'Express is a minimal web framework for Node.js',
        'Routes define the endpoints and logic of your API',
        'Non-blocking I/O makes Node.js efficient for scalable applications',
        'Express middleware helps process requests before reaching routes'
      ]
    },
    quiz: {
      title: 'Node.js and Express Assessment',
      passingScore: 70,
      questions: [
        {
          question: 'What is Node.js?',
          answers: [
            'A JavaScript library for frontend development',
            'A JavaScript runtime for server-side development',
            'A database management system',
            'A CSS framework'
          ],
          correctAnswer: 1
        },
        {
          question: 'What is Express in Node.js?',
          answers: [
            'A database library',
            'A testing framework',
            'A web application framework',
            'A package manager'
          ],
          correctAnswer: 2
        },
        {
          question: 'Which HTTP method is used to retrieve data from a server?',
          answers: [
            'POST',
            'PUT',
            'DELETE',
            'GET'
          ],
          correctAnswer: 3
        },
        {
          question: 'What does non-blocking I/O mean in Node.js?',
          answers: [
            'Operations wait for previous operations to complete',
            'Operations can proceed without waiting for I/O to complete',
            'Only one operation can run at a time',
            'I/O operations are not allowed'
          ],
          correctAnswer: 1
        },
        {
          question: 'What is the purpose of app.listen() in Express?',
          answers: [
            'To create a new route',
            'To connect to a database',
            'To start the server and listen for requests on a port',
            'To handle errors'
          ],
          correctAnswer: 2
        }
      ]
    }
  }
};

// Function to get enrolled roadmaps
export const getEnrolledRoadmaps = (): EnrolledRoadmap[] => {
  return enrolledRoadmapsData;
};

// Function to get roadmap content by ID
export const getRoadmapContent = (roadmapId: string): RoadmapContent | null => {
  return roadmapContentData[roadmapId] || null;
};