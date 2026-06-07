package com.portal.service;

import com.portal.entity.CourseEnrollment;

import java.util.List;

public interface EnrollmentService {

    CourseEnrollment enrollStudent(Long studentId, Long courseId);

    List<CourseEnrollment> getStudentEnrollments(Long studentId);
}