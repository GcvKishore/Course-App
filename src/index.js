import React from 'react';
import { createRoot } from 'react-dom/client';  // Update the import statement
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
      
    </Router>
  </Provider>
);

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);