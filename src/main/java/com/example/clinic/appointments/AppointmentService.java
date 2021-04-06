package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentDAO appointmentDAO;

    public Appointment getAppointmentById(Integer appointmentId) {
        return appointmentDAO.getAppointmentById(appointmentId);
    }

    public Appointment updateAppointment(Integer appointmentId, Appointment appointment) {
        return appointmentDAO.updateAppointment(appointmentId, appointment);
    }

    public Collection<Appointment> getAppointments() {
        return appointmentDAO.getAppointments();
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentDAO.createAppointment(appointment);
    }
}
