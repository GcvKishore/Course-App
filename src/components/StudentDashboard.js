// StudentDashboard.js
import React from 'react';
import { connect } from 'react-redux';
import { markCourseCompleted } from '../actions'; // Update with your actual action creator
import courses from '../courses';
const StudentDashboard = ({ enrolledCourses, markCourseCompleted }) => {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <div>
          <div key={courses.id}>
            <img src={courses.thumbnail} alt={courses.name} style={{ width: '100px', height: '100px' }} />
            <h3>{courses.name}</h3>
            <p>Instructor: {courses.instructor}</p>
            <p>Due Date: {courses.dueDate}</p>
            <p>Progress: {courses.progress}%</p>
            <button onClick={() => markCourseCompleted(courses.id)}>Mark as Completed</button>

            <div key={courses.id}>
            <img src={courses.thumbnail} alt={courses.name} style={{ width: '100px', height: '100px' }} />
            <h3>{courses.name}</h3>
            <p>Instructor: {courses.instructor}</p>
            <p>Due Date: {courses.dueDate}</p>
            <p>Progress: {courses.progress}%</p>
            <button onClick={() => markCourseCompleted(courses.id)}>Mark as Completed</button>
          </div>
          </div>
      </div>
      <br/>
      <div>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('enrolledCourses in mapStateToProps:', state.enrolledCourses);
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