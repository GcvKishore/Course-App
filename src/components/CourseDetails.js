import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { enrollCourse } from '../actions';
import courses from '../courses';
import './CourseDetails.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';


const CourseDetails = () => {
  const { id } = useParams();
  const courseId = parseInt(id, 10);
  const course = courses.find((c) => c.id === courseId);
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const dispatch = useDispatch();
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  if (!course) {
    return <div className="course-not-found">Course not found</div>;
  }

  const isEnrolled = enrolledCourses.includes(courseId);

  const handleSyllabusToggle = () => {
    setIsSyllabusOpen(!isSyllabusOpen);
  };

  return (
    <div className="course-details">
        <Link to="/dashboard">
        <button className="dashboard-button">Dashboard</button>
      </Link>
      <Link to="/">
        <p className="breadcrumb">Active Course List</p>
      </Link>
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      <div className="accordion" id="syllabusAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="syllabusHeading">
            <button
              className={`accordion-button ${isSyllabusOpen ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#syllabusCollapse"
              aria-expanded={isSyllabusOpen ? 'true' : 'false'}
              aria-controls="syllabusCollapse"
              onClick={handleSyllabusToggle}
            >
              <strong>Syllabus:</strong>
            </button>
          </h2>
          <div
            id="syllabusCollapse"
            className={`accordion-collapse collapse ${isSyllabusOpen ? 'show' : ''}`}
            aria-labelledby="syllabusHeading"
            data-bs-parent="#syllabusAccordion"
          >
            <div className="accordion-body">
              <ul>
                {course.syllabus.map((week) => (
                  <li key={week.week}>
                    Week {week.week}: {week.topic} - {week.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br/>
      {isEnrolled ? (
        <p className="enrolled-status">Enrolled</p>
      ) : (
        <button className="enroll-button" onClick={() => dispatch(enrollCourse(course.id))}>
          Enroll
        </button>
      )}
    </div>
  );
};

export default CourseDetails;