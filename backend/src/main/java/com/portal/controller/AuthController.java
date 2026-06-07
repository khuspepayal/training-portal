package com.portal.controller;

import com.portal.dto.ForgotPasswordRequest;
import com.portal.dto.LoginRequest;
import com.portal.dto.RegisterRequest;
import com.portal.entity.User;
import com.portal.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public User register(
            @RequestBody RegisterRequest request
    ) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public User login(
            @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }

    @PutMapping("/forgot-password")
    public String forgotPassword(
            @RequestBody ForgotPasswordRequest request
    ) {
        return authService.resetPassword(request);
    }
}