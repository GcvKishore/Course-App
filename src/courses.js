const courses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: require('./images/ReactNative.png'), 
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      },
      {
        week: 3,
        topic: 'State Management in React Native',
        content: 'Understanding and implementing state management techniques.',
      },
      {
        week: 4,
        topic: 'Navigation in React Native',
        content: 'Navigating between screens and managing app navigation.',
      },
      {
        week: 5,
        topic: 'Data Fetching and API Integration',
        content: 'Fetching data from an API and integrating it into your React Native app.',
      },
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
      {
        id: 103,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
      },
      {
        id: 104,
        name: 'Diana Miller',
        email: 'diana@example.com',
      },
    ],
    dueDate: '2023-12-31', 
    progress: 30,
  },
  {
    id: 2,
    name: 'Web Development Bootcamp',
    instructor: 'Jane Smith',
    description: 'Become a full-stack web developer in 12 weeks. Learn HTML, CSS, JavaScript, and more.',
    enrollmentStatus: 'Open',
    thumbnail: require('./images/WebDevelopmentBootcamp.jpeg'), // Update the path as needed
    duration: '12 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'In-Person',
    prerequisites: ['No prerequisites. Suitable for beginners.'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to HTML',
        content: 'Learn the basics of HTML and create your first webpage.',
      },
      {
        week: 2,
        topic: 'Styling with CSS',
        content: 'Explore CSS for webpage styling and layout.',
      },
      {
        week: 3,
        topic: 'JavaScript Fundamentals',
        content: 'Introduction to JavaScript programming.',
      },
      {
        week: 4,
        topic: 'Responsive Design with Bootstrap',
        content: 'Create responsive and mobile-friendly web pages using Bootstrap.',
      },
      {
        week: 5,
        topic: 'Server-Side Development with Node.js',
        content: 'Introduction to server-side development using Node.js.',
      },
    ],
    students: [
      {
        id: 201,
        name: 'Eva Turner',
        email: 'eva@example.com',
      },
      {
        id: 202,
        name: 'Frank Adams',
        email: 'frank@example.com',
      },
      {
        id: 203,
        name: 'Grace White',
        email: 'grace@example.com',
      },
      {
        id: 204,
        name: 'Harry Brown',
        email: 'harry@example.com',
      },
    ],
    dueDate: '2023-12-05', 
    progress: 100,
  },
  {
    id: 3,
    name: 'Data Science Fundamentals',
    instructor: 'Dr. Amanda Rodriguez',
    description: 'Explore the world of data science. Learn statistical analysis, machine learning, and more.',
    enrollmentStatus: 'Open',
    thumbnail: require('./images/DS.jpeg'), // Update the path as needed
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic knowledge of mathematics and statistics'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'Overview of data science, applications, and tools.',
      },
      {
        week: 2,
        topic: 'Statistical Analysis with Python',
        content: 'Learn statistical analysis using Python programming language.',
      },
      {
        week: 3,
        topic: 'Machine Learning Basics',
        content: 'Introduction to machine learning concepts and algorithms.',
      },
      {
        week: 4,
        topic: 'Data Visualization with Matplotlib',
        content: 'Create visualizations to understand and communicate data insights.',
      },
      {
        week: 5,
        topic: 'Big Data and Hadoop',
        content: 'Explore big data processing using Hadoop framework.',
      },
    ],
    students: [
      {
        id: 301,
        name: 'Isaac Turner',
        email: 'isaac@example.com',
      },
      {
        id: 302,
        name: 'Jasmine Lee',
        email: 'jasmine@example.com',
      },
      {
        id: 303,
        name: 'Kevin Patel',
        email: 'kevin@example.com',
      },
      {
        id: 304,
        name: 'Laura Garcia',
        email: 'laura@example.com',
      },
    ],
    dueDate: '2023-12-31', 
    progress: 0,
  },
  {
    id: 4,
    name: 'Node.js Masterclass',
    instructor: 'Alex Johnson',
    description: 'Master the art of server-side development with Node.js. Learn to build scalable and efficient web applications.',
    enrollmentStatus: 'Open',
    thumbnail: require('./images/nodejs.png'), // Update the path as needed
    duration: '10 weeks',
    schedule: 'Wednesdays and Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Understanding of web development concepts'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Node.js',
        content: 'Overview of Node.js, setting up the Node.js environment.',
      },
      {
        week: 2,
        topic: 'Express.js Framework',
        content: 'Building web applications with the Express.js framework.',
      },
      {
        week: 3,
        topic: 'Working with APIs',
        content: 'Creating and consuming APIs using Node.js.',
      },
      {
        week: 4,
        topic: 'Database Integration with MongoDB',
        content: 'Connecting and interacting with MongoDB for database management.',
      },
      {
        week: 5,
        topic: 'Authentication and Authorization',
        content: 'Implementing user authentication and authorization in Node.js applications.',
      },
    ],
    students: [
      {
        id: 401,
        name: 'Michael Thompson',
        email: 'michael@example.com',
      },
      {
        id: 402,
        name: 'Natalie Brown',
        email: 'natalie@example.com',
      },
      {
        id: 403,
        name: 'Oliver Turner',
        email: 'oliver@example.com',
      },
      {
        id: 404,
        name: 'Pamela Davis',
        email: 'pamela@example.com',
      },
    ],
    dueDate: '2023-12-25', 
    progress: 40,
  },
];

export default courses;