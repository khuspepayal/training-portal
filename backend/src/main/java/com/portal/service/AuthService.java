package com.portal.service;
import com.portal.dto.ForgotPasswordRequest;
import com.portal.dto.LoginRequest;
import com.portal.dto.RegisterRequest;
import com.portal.entity.User;

public interface AuthService {

    User register(RegisterRequest request);

    User login(LoginRequest request);

    String resetPassword(ForgotPasswordRequest request);
    
    
}