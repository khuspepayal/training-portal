package com.portal.serviceImpl;

import com.portal.entity.Course;
import com.portal.entity.CourseEnrollment;
import com.portal.entity.User;
import com.portal.repository.CourseEnrollmentRepository;
import com.portal.repository.CourseRepository;
import com.portal.repository.UserRepository;
import com.portal.service.EnrollmentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    private final CourseEnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;

    public EnrollmentServiceImpl(
            CourseEnrollmentRepository enrollmentRepository,
            UserRepository userRepository,
            CourseRepository courseRepository) {

        this.enrollmentRepository = enrollmentRepository;
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }

    @Override
    public CourseEnrollment enrollStudent(Long studentId, Long courseId) {

        User student = userRepository.findById(studentId)
                .orElseThrow(() ->
                        new RuntimeException("Student Not Found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new RuntimeException("Course Not Found"));
        if (
        	    enrollmentRepository
        	    .existsByStudentAndCourse(
        	            student,
        	            course
        	    )
        	) {
        	    throw new RuntimeException(
        	            "Already Enrolled"
        	    );
        	}

        CourseEnrollment enrollment = new CourseEnrollment();

        enrollment.setStudent(student);
        enrollment.setCourse(course);

        return enrollmentRepository.save(enrollment);
    }

    @Override
    public List<CourseEnrollment> getStudentEnrollments(Long studentId) {

        User student = userRepository.findById(studentId)
                .orElseThrow(() ->
                        new RuntimeException("Student Not Found"));

        return enrollmentRepository.findByStudent(student);
    }
}