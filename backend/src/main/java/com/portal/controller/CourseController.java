package com.portal.controller;

import com.portal.dto.CourseRequest;
import com.portal.entity.Course;
import com.portal.service.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:5173")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping
    public Course addCourse(
            @RequestBody CourseRequest request
    ) {
        return courseService.addCourse(request);
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Course getCourseById(
            @PathVariable Long id
    ) {
        return courseService.getCourseById(id);
    }
}