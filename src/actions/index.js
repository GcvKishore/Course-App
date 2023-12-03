// src/actions/index.js
import { ENROLL_COURSE, MARK_COURSE_COMPLETED } from './types';

export const enrollCourse = (courseId) => ({
  type: ENROLL_COURSE,
  payload: courseId,
});

export const markCourseCompleted = (courseId) => ({
  type: MARK_COURSE_COMPLETED,
  payload: courseId,
});