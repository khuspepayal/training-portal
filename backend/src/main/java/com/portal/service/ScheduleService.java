package com.portal.service;

import com.portal.dto.ScheduleRequest;
import com.portal.entity.Schedule;

import java.util.List;

public interface ScheduleService {

    Schedule addSchedule(ScheduleRequest request);

    List<Schedule> getSchedulesByCourse(Long courseId);

    List<Schedule> getAllSchedules();
}