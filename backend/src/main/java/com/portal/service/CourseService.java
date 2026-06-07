package com.portal.service;

import com.portal.dto.CourseRequest;
import com.portal.entity.Course;

import java.util.List;

public interface CourseService {

    Course addCourse(CourseRequest request);

    List<Course> getAllCourses();

    Course getCourseById(Long id);
}