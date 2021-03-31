package com.example.clinic.initialTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private TestService testService;

    @GetMapping
    public Collection<TestClass> getTestObjects() {
        return testService.getTestObjects();
    }

    @PostMapping
    public TestClass postTestObject(@RequestBody TestClass testObject) {
        return testService.createTestObject(testObject);
    }
}
