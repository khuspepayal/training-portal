package com.portal.dto;

import com.portal.entity.Batch;
import com.portal.entity.TimeSlot;

public class ScheduleRequest {

    private Long courseId;
    private String trainerName;
    private Batch batch;
    private TimeSlot timeSlot;

    public ScheduleRequest() {
    }

    public ScheduleRequest(Long courseId,
                           String trainerName,
                           Batch batch,
                           TimeSlot time) {
        this.courseId = courseId;
        this.trainerName = trainerName;
        this.batch = batch;
        this.timeSlot = time;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getTrainerName() {
        return trainerName;
    }

    public void setTrainerName(String trainerName) {
        this.trainerName = trainerName;
    }

    public Batch getBatch() {
        return batch;
    }

    public void setBatch(Batch batch) {
        this.batch = batch;
    }

    public TimeSlot getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(TimeSlot timeSlot) {
        this.timeSlot = timeSlot;
    }
}