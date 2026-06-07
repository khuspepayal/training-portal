package com.portal.repository;

import com.portal.entity.Batch;
import com.portal.entity.Course;
import com.portal.entity.Schedule;
import com.portal.entity.TimeSlot;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    List<Schedule> findByCourse(Course course);
    
    List<Schedule> findByTrainerNameAndBatchAndTimeSlot(
            String trainerName,
            Batch batch,
            TimeSlot timeSlot
    );
}
