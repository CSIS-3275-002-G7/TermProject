package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService testService;

    @GetMapping
    public Collection<Appointment> getAppointments() {
        return testService.getAppointments();
    }

    @PostMapping
    public Appointment postAppointment(@RequestBody Appointment appointment) {
        return testService.createAppointment(appointment);
    }
}
