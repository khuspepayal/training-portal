package com.portal.controller;

import com.portal.entity.User;
import com.portal.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<User> getAllStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/search")
    public List<User> searchStudents(
            @RequestParam String keyword
    ) {
        return studentService.searchStudents(keyword);
    }
}