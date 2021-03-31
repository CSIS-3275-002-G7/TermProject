package com.example.clinic.initialTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class TestDAO {

    @Autowired
    private TestRepository repository;


    public Collection<TestClass> getTestObjects() {
        return repository.findAll();
    }


    public TestClass createTestObject(TestClass testObject) {
        return repository.insert(testObject);
    }
}
