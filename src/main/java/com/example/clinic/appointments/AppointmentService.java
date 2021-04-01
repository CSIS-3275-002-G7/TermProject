package com.example.clinic.appointments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class TestService {
    @Autowired
    private AppointmentDAO testDAO;

    public Collection<Appointment> getTestObjects() {
        return testDAO.getTestObjects();
    }


    public Appointment createTestObject(Appointment testObject) {
        return testDAO.createTestObject(testObject);
    }
}
