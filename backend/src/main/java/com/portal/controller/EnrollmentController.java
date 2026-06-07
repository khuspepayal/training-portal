package com.portal.controller;

import com.portal.entity.CourseEnrollment;
import com.portal.service.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
@CrossOrigin(origins = "http://localhost:5173")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    public EnrollmentController(
            EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @PostMapping("/{studentId}/{courseId}")
    public CourseEnrollment enrollStudent(
            @PathVariable Long studentId,
            @PathVariable Long courseId) {

        return enrollmentService.enrollStudent(
                studentId,
                courseId
        );
    }

    @GetMapping("/{studentId}")
    public List<CourseEnrollment> getStudentEnrollments(
            @PathVariable Long studentId) {

        return enrollmentService
                .getStudentEnrollments(studentId);
    }
}