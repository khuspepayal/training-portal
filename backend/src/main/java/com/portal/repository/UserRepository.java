package com.portal.repository;

import com.portal.entity.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);

    List<User> findByRole(Enum<?> role);

    List<User> findByNameContainingIgnoreCase(String keyword);
}