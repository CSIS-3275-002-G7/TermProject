package com.example.clinic;

import com.example.clinic.appointments.Appointment;
import com.example.clinic.appointments.AppointmentDAO;
import com.example.clinic.appointments.AppointmentService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Collection;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;

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
        verify(appointmentDAO).getAppointmentById(appointmentId);
    }

    @Test
    public void getAppointmentsShouldReturnAllAppointments() {
        Collection<Appointment> appointments = new ArrayList<>();
        appointments.add(new Appointment());
        given(appointmentDAO.getAppointments()).willReturn(appointments);
        Collection<Appointment> expected = appointmentService.getAppointments();

        assertEquals(expected, appointments);
        verify(appointmentDAO).getAppointments();
    }

    @Test
    public void updateAppointmentShouldUpdateAppointment() {
        // foundAppointment.setAvailable(appointment.isAvailable());
        // ^^ the method doesn't make sense. Setting the value of a getter as the value of a setter???
    }

    @Test
    public void createAppointmentShouldCreateAppointment() {
        Appointment appointment = new Appointment();
        Integer appointmentId = 1;
        appointment.setAppointmentId(appointmentId);
        when(appointmentDAO.createAppointment(appointment)).thenReturn(appointment);
        Appointment createdAppointment = appointmentService.createAppointment(appointment);

        assertThat(createdAppointment.getAppointmentId(), is(equalTo(appointment.getAppointmentId())));
        verify(appointmentDAO).createAppointment(appointment);
    }
}
