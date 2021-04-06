package com.example.clinic;

import com.example.clinic.appointments.Appointment;
import com.example.clinic.appointments.AppointmentDAO;
import com.example.clinic.appointments.AppointmentService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatcher;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(MockitoJUnitRunner.class)
public class AppointmentServiceTest {

    @Mock
    private AppointmentDAO appointmentDAO;

    @InjectMocks
    private AppointmentService appointmentService;

    @Test
    public void getAppointmentByIdShouldReturnAppointment() {
        Appointment expectedAppointment = new Appointment();
        Integer appointmentId = 1;
        expectedAppointment.setAppointmentId(appointmentId);
        given(appointmentDAO.getAppointmentById(appointmentId)).willReturn(expectedAppointment);
        Appointment resultAppointment = appointmentService.getAppointmentById(appointmentId);

        assertEquals(resultAppointment.getAppointmentId(), expectedAppointment.getAppointmentId());
    }

    @
}
