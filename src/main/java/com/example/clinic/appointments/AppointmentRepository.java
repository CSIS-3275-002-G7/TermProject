package com.example.clinic.appointments;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestRepository extends MongoRepository<Appointment, Integer> {}