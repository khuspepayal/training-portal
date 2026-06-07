package com.portal.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "schedules")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String trainerName;

    @Enumerated(EnumType.STRING)
    private Batch batch;

    @Enumerated(EnumType.STRING)
    private TimeSlot timeSlot;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public Schedule() {
    }

    public Schedule(Long id,
                    String trainerName,
                    Batch batch,
                    TimeSlot timeSlot,
                    Course course) {
        this.id = id;
        this.trainerName = trainerName;
        this.batch = batch;
        this.timeSlot = timeSlot;
        this.course = course;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}