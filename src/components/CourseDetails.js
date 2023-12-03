// src/components/CourseDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse } from '../actions'; // Make sure the path is correct
import courses from '../courses';

// ... (rest of the code)


const CourseDetails = ({ match }) => {
  const courseId = parseInt(match.params.id, 10);
  const course = courses.find((c) => c.id === courseId);
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();

  if (!course) {
    return <div>Course not found</div>;
  }

  const isEnrolled = enrolledCourses.includes(courseId);

  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      {isEnrolled ? (
        <p>Enrolled</p>
      ) : (
        <button onClick={() => dispatch(enrollCourse(course.id))}>Enroll</button>
      )}
      {/* Add other details and features */}
    </div>
  );
};

export default CourseDetails;