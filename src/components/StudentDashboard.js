// StudentDashboard.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { markCourseCompleted } from '../actions';
import courses from '../courses';
import './StudentDashboard.css'; 
import { Link } from 'react-router-dom';

const getProgressBarColor = (progress) => {
  if (progress === 0) {
    return 'red';
  } else if (progress === 100) {
    return 'green';
  } else {
    return 'yellow';
  }
};

const StudentDashboard = ({ enrolledCourses, markCourseCompleted }) => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleMarkCompleted = (courseId) => {
    markCourseCompleted(courseId);
    setCompletedCourses([...completedCourses, courseId]);
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={process.env.PUBLIC_URL + course.thumbnail}
              alt={course.name}
              style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }}
            />
             <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h3>{course.name}</h3>
            </Link>
            <div className="course-details">
              <p>Instructor: {course.instructor}</p>
              <p>Due Date: {course.dueDate}</p>
              <div className="progress-bar-container">
                <div
                  className={`progress-bar ${getProgressBarColor(course.progress)}`}
                  style={{
                    width: `${course.progress}%`,
                  }}
                />
              </div>
              <p>
                Progress: <span className={getProgressBarColor(course.progress)}>{course.progress}%</span>
              </p>
              <button
                onClick={() => handleMarkCompleted(course.id)}
                disabled={course.progress !== 100 || completedCourses.includes(course.id)}
              >
                Mark as Completed
              </button>
              {completedCourses.includes(course.id) && <strong>Completed</strong>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    enrolledCourses: state.enrolledCourses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markCourseCompleted: (courseId) => dispatch(markCourseCompleted(courseId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);