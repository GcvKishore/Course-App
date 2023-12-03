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
  ];
  
  export default courses;  