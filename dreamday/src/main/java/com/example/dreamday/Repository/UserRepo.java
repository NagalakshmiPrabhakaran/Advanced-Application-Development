package com.example.dreamday.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dreamday.Model.Users;

public interface UserRepo extends JpaRepository<Users, Long> {
    
}