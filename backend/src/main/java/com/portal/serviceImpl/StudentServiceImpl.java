package com.portal.serviceImpl;

import com.portal.entity.Role;
import com.portal.entity.User;
import com.portal.repository.UserRepository;
import com.portal.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    private final UserRepository userRepository;

    public StudentServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllStudents() {

        return userRepository.findAll()
                .stream()
                .filter(user -> user.getRole() == Role.STUDENT)
                .collect(Collectors.toList());
    }

    @Override
    public List<User> searchStudents(String keyword) {

        return userRepository.findAll()
                .stream()
                .filter(user ->
                        user.getRole() == Role.STUDENT &&
                        user.getName().toLowerCase()
                                .contains(keyword.toLowerCase()))
                .collect(Collectors.toList());
    }
}