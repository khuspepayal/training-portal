package com.portal.serviceImpl;

import com.portal.dto.CourseRequest;
import com.portal.entity.Course;
import com.portal.repository.CourseRepository;
import com.portal.service.CourseService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    public CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public Course addCourse(CourseRequest request) {

        Course course = new Course();

        course.setCourseName(request.getCourseName());

        return courseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(Long id) {

        return courseRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Course Not Found"));
    }
}