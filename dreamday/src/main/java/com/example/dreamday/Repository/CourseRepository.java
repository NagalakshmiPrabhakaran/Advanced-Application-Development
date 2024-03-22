package com.example.dreamday.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dreamday.Model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Optional<Course> findByName(String name);
}