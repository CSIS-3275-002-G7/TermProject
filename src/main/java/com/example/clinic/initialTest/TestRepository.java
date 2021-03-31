package com.example.clinic.initialTest;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestRepository extends MongoRepository<TestClass, Integer> {}