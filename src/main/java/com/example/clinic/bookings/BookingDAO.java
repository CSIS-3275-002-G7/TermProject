package com.example.clinic.bookings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class BookingDAO {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking createBooking(Booking booking) {
        return bookingRepository.insert(booking);
    }

    public Collection<Booking> getBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingByAppointmentId(Integer appointmentId) {
        return bookingRepository.findById(appointmentId).orElse(new Booking());
    }

    public Booking deleteBooking(Integer appointmentId) {
        Booking foundBooking = getBookingByAppointmentId(appointmentId);
        if (foundBooking.getPatientName() != null) bookingRepository.deleteById(appointmentId);
        return foundBooking;
    }
}
