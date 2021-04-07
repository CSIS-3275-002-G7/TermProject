package com.example.clinic.appointments;

public class AppointmentNotFoundException extends RuntimeException {
    public AppointmentNotFoundException(Integer id) {
        super("No appointment with id " + id + " found.");
    }
}
