package com.example.dreamday.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dreamday.Model.Users;
import java.util.Optional;
public interface UserRepo extends JpaRepository<Users, Integer> {
    Optional<Users> findByEmail(String username);
    
}