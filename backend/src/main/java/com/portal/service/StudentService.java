package com.portal.service;

import com.portal.entity.User;

import java.util.List;

public interface StudentService {

    List<User> getAllStudents();

    List<User> searchStudents(String keyword);
}