package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class AppointmentDAO {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment updateAppointment(Integer appointmentId, Appointment appointment) {
        Appointment foundAppointment = getAppointmentById(appointmentId);
        if (foundAppointment.getName() == null) return appointment;

        foundAppointment.setAvailable(appointment.isAvailable());
        appointmentRepository.save(foundAppointment);
        return foundAppointment;
    }

    public Appointment getAppointmentById(Integer appointmentId) {
        return appointmentRepository.findById(appointmentId).orElse(new Appointment());
    }

    public Collection<Appointment> getAppointments() {
        return appointmentRepository.findAll();
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.insert(appointment);
    }
}
