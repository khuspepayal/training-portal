package com.portal.serviceImpl;

import com.portal.dto.ForgotPasswordRequest;
import com.portal.dto.LoginRequest;
import com.portal.dto.RegisterRequest;
import com.portal.entity.Role;
import com.portal.entity.User;
import com.portal.repository.UserRepository;
import com.portal.service.AuthService;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;

    public AuthServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        user.setRole(Role.valueOf(
                request.getRole().toUpperCase()
        ));

        return userRepository.save(user);
    }

    @Override
    public User login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid Email"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        if (!user.getRole().name()
                .equalsIgnoreCase(request.getRole())) {

            throw new RuntimeException("Invalid Role");
        }

        return user;
    }

    @Override
    public String resetPassword(ForgotPasswordRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        user.setPassword(request.getNewPassword());

        userRepository.save(user);

        return "Password Updated Successfully";
    }
    
    
}