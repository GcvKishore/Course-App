// src/components/CourseDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { enrollCourse } from '../actions';
import courses from '../courses';
import './CourseDetails.css'; // Import your CSS file

const CourseDetails = () => {
  const { id } = useParams();
  const courseId = parseInt(id, 10);
  const course = courses.find((c) => c.id === courseId);
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();

  if (!course) {
    return <div className="course-not-found">Course not found</div>;
  }

  const isEnrolled = enrolledCourses.includes(courseId);

  return (
    <div className="course-details">
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      {isEnrolled ? (
        <p className="enrolled-status">Enrolled</p>
      ) : (
        <button className="enroll-button" onClick={() => dispatch(enrollCourse(course.id))}>
          Enroll
        </button>
      )}
      {/* Add other details and features */}
    </div>
  );
};

export default CourseDetails;