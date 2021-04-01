package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class AppointmentDAO {

    @Autowired
    private AppointmentRepository appointmentRepository;


    public Collection<Appointment> getAppointments() {
        return appointmentRepository.findAll();
    }


    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.insert(appointment);
    }
}
