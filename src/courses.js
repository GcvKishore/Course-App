const courses = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
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
  },
  {
    id: 2,
    name: 'Web Development Bootcamp',
    instructor: 'Jane Smith',
    description: 'Become a full-stack web developer in 12 weeks. Learn HTML, CSS, JavaScript, and more.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
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
  },
  {
    id: 3,
    name: 'Data Science Fundamentals',
    instructor: 'Dr. Amanda Rodriguez',
    description: 'Explore the world of data science. Learn statistical analysis, machine learning, and more.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
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
  },
];

export default courses;
