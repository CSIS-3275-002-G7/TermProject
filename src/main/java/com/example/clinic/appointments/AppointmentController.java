package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PutMapping("/{appointmentId}")
    public Appointment updateAppointment(@PathVariable("appointmentId") Integer appointmentId, @RequestBody Appointment appointment) {
        return appointmentService.updateAppointment(appointmentId, appointment);
    }

    @GetMapping("/{appointmentId}")
    public Appointment getAppointmentById(@PathVariable("appointmentId") Integer appointmentId) {
        return appointmentService.getAppointmentById(appointmentId);
    }

    @GetMapping
    public Collection<Appointment> getAppointments() {
        return appointmentService.getAppointments();
    }

//    @PostMapping
//    public Appointment postAppointment(@RequestBody Appointment appointment) {
//        return appointmentService.createAppointment(appointment);
//    }
}
