package com.example.clinic.appointments;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appointments")
public class TestClass {
    private Integer appointmentId;
    private String name;
    private String time;

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
