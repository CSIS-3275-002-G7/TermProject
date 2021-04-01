package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class TestDAO {

    @Autowired
    private AppointmentRepository repository;


    public Collection<Appointment> getTestObjects() {
        return repository.findAll();
    }


    public Appointment createTestObject(Appointment testObject) {
        return repository.insert(testObject);
    }
}
