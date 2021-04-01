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
    public Collection<Appointment> getTestObjects() {
        return testService.getTestObjects();
    }

    @PostMapping
    public Appointment postTestObject(@RequestBody Appointment testObject) {
        return testService.createTestObject(testObject);
    }
}
