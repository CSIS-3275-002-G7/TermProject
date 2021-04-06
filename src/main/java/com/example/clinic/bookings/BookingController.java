package com.example.clinic.bookings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @GetMapping("/{appointmentId}")
    public Booking getBookingByAppointmentId(@PathVariable("appointmentId") Integer appointmentId) {
        return bookingService.getBookingByAppointmentId(appointmentId);
    }

    @GetMapping
    public Collection<Booking> getBookings() {
        return bookingService.getBookings();
    }

    @PostMapping
    public Booking postBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @DeleteMapping("/{appointmentId}")
    public Booking deleteBooking(@PathVariable("appointmentId") Integer appointmentId) {
        return bookingService.deleteBooking(appointmentId);
    }
}
