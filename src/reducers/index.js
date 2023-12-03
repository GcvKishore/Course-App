// src/reducers/index.js
import { combineReducers } from 'redux';
import { ENROLL_COURSE, MARK_COURSE_COMPLETED } from '../actions/types';

const enrolledCoursesReducer = (state = [], action) => {
  switch (action.type) {
    case ENROLL_COURSE:
      return [...state, action.payload];
    case MARK_COURSE_COMPLETED:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  enrolledCourses: enrolledCoursesReducer,
});

export default rootReducer;