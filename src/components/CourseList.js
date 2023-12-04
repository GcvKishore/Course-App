import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import courses from '../courses';
import { Link } from 'react-router-dom';
import './CourseList.css';

const CourseList = ({ history }) => {
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  console.log('Course List - enrolledCourses:', enrolledCourses);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );
<br/>
  return (
    <div className="CourseList">
      <h1>Edu Tech Hub</h1>
      <Link to="/dashboard">
        <button className="dashboard-button">Dashboard</button>
      </Link>
      <input
        type="text"
        placeholder="Search by course or instructor..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br/>
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h3>{course.name}</h3>
            </Link>
            <p className="info">Instructor: {course.instructor}</p>
            <p className="info">Status: {course.enrollmentStatus}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;