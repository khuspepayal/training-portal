package com.portal.repository;


import com.portal.entity.Course;
import com.portal.entity.CourseEnrollment;
import com.portal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseEnrollmentRepository extends JpaRepository<CourseEnrollment, Long> {

    List<CourseEnrollment> findByStudent(User student);

    boolean existsByStudentAndCourse(
            User student,
            Course course
    );
}
