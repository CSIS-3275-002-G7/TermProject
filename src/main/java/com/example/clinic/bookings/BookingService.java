package com.example.clinic.bookings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class BookingService {
    @Autowired
    private BookingDAO bookingDAO;

    public Booking createBooking(Booking booking) {
        return bookingDAO.createBooking(booking);
    }

    public Collection<Booking> getBookings() {
        return bookingDAO.getBookings();
    }

    public Booking getBookingByAppointmentId(Integer appointmentId) {
        return bookingDAO.getBookingByAppointmentId(appointmentId);
    }

    public Booking deleteBooking(Integer appointmentId) {
        return bookingDAO.deleteBooking(appointmentId);
    }
}
