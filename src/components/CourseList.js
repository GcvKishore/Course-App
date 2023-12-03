import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enrollCourse } from '../actions';
import courses from '../courses';
import { Link } from 'react-router-dom';
import './CourseList.css';

const CourseList = ({ history }) => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  console.log('Course List - enrolledCourses:', enrolledCourses);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEnrollClick = (courseId) => {
    dispatch(enrollCourse(courseId));
  };

  return (
    <div className="CourseList">
      <h1>Edu Tech Hub</h1>
      <input
        type="text"
        placeholder="Search by course or instructor..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              <h3>{course.name}</h3>
            </Link>
            <p className="info">Instructor: {course.instructor}</p>
            <p className="info">Status: {course.enrollmentStatus}</p>
            <p className="info">Description: {course.description}</p>
            <p className="info">Duration: {course.duration}</p>
            <p className="info">Schedule: {course.schedule}</p>
            <p className="info">Location: {course.location}</p>
            <p className="info">Pre-requisites: {course.prerequisites.join(', ')}</p>

            {/* Display Syllabus */}
            <p className="info">Syllabus:</p>
            <ul>
              {course.syllabus.map((week) => (
                <li key={week.week}>
                  Week {week.week}: {week.topic} - {week.content}
                </li>
              ))}
            </ul>

            {/* Display Enrolled Students */}
            <p className="info">Enrolled Students:</p>
            <ul>
              {course.students.map((student) => (
                <li key={student.id}>
                  {student.name} - {student.email}
                </li>
              ))}
            </ul>

            {enrolledCourses.includes(course.id) ? (
              <p className="text-success">Enrolled</p>
            ) : (
              <button className="btn btn-primary" onClick={() => handleEnrollClick(course.id)}>
                Enroll
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;