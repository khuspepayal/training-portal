package com.portal.serviceImpl;

import com.portal.dto.ScheduleRequest;
import com.portal.entity.Course;
import com.portal.entity.Schedule;
import com.portal.repository.CourseRepository;
import com.portal.repository.ScheduleRepository;
import com.portal.service.ScheduleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    private final ScheduleRepository scheduleRepository;
    private final CourseRepository courseRepository;

    public ScheduleServiceImpl(
            ScheduleRepository scheduleRepository,
            CourseRepository courseRepository
    ) {
        this.scheduleRepository = scheduleRepository;
        this.courseRepository = courseRepository;
    }

    @Override
    public Schedule addSchedule(ScheduleRequest request) {

        List<Schedule> conflicts =
                scheduleRepository.findByTrainerNameAndBatchAndTimeSlot(
                        request.getTrainerName(),
                        request.getBatch(),
                        request.getTimeSlot()
                );

        if (!conflicts.isEmpty()) {
            throw new RuntimeException(
                    "Schedule conflict detected"
            );
        }

        Course course = courseRepository.findById(
                request.getCourseId()
        ).orElseThrow(() ->
                new RuntimeException("Course Not Found"));

        Schedule schedule = new Schedule();

        schedule.setCourse(course);
        schedule.setTrainerName(request.getTrainerName());
        schedule.setBatch(request.getBatch());
        schedule.setTimeSlot(request.getTimeSlot());

        return scheduleRepository.save(schedule);
    }

    @Override
    public List<Schedule> getSchedulesByCourse(Long courseId) {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() ->
                        new RuntimeException("Course Not Found"));

        return scheduleRepository.findByCourse(course);
    }

    @Override
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }
}