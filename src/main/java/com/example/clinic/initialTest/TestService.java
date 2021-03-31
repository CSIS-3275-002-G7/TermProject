package com.example.clinic.initialTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class TestService {
    @Autowired
    private TestDAO testDAO;

    public Collection<TestClass> getTestObjects() {
        return testDAO.getTestObjects();
    }


    public TestClass createTestObject(TestClass testObject) {
        return testDAO.createTestObject(testObject);
    }
}
