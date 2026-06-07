package com.portal.controller;

import com.portal.dto.ScheduleRequest;
import com.portal.entity.Schedule;
import com.portal.service.ScheduleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedules")
@CrossOrigin(origins = "http://localhost:5173")
public class ScheduleController {

    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @PostMapping
    public Schedule addSchedule(
            @RequestBody ScheduleRequest request
    ) {
        return scheduleService.addSchedule(request);
    }

    @GetMapping
    public List<Schedule> getAllSchedules() {
        return scheduleService.getAllSchedules();
    }

    @GetMapping("/course/{courseId}")
    public List<Schedule> getSchedulesByCourse(
            @PathVariable Long courseId
    ) {
        return scheduleService.getSchedulesByCourse(courseId);
    }
}