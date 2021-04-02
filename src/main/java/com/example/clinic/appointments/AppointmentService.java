package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentDAO appointmentDAO;

    public Collection<Appointment> getAppointments() {
        return appointmentDAO.getAppointments();
    }


    public Appointment createAppointment(Appointment appointment) {
        return appointmentDAO.createAppointment(appointment);
    }
}
