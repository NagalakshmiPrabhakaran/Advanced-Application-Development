package com.example.dreamday.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.dreamday.Dto.CourseUpdateRequest;
import com.example.dreamday.Model.Course;
import com.example.dreamday.Repository.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    // newCourse
    public Course createCourse(@NonNull Course course) {
        return courseRepository.save(course);
    }

    // getCourse
    public Optional<Course> getCourseByName(String courseName) {
        return courseRepository.findByName(courseName);
    }

    // getCourses
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // updateCourse
    public Course updateCourse(@NonNull String courseName, CourseUpdateRequest courseUpdateRequest) {
        return courseRepository.findByName(courseName)
                .map(existingCourse -> {
                    existingCourse.setDuration(courseUpdateRequest.getDuration());
                    existingCourse.setPrice(courseUpdateRequest.getPrice());
                    return courseRepository.save(existingCourse);
                })
                .orElseThrow(() -> new RuntimeException("Course not found: " + courseName));
    }

    // deleteUser
    public void removeCourse(@NonNull Long courseId) {
        courseRepository.deleteById(courseId);
    }
}
