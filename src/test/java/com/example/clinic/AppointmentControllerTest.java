package com.example.clinic;

import com.example.clinic.appointments.Appointment;
import com.example.clinic.appointments.AppointmentController;
import com.example.clinic.appointments.AppointmentNotFoundException;
import com.example.clinic.appointments.AppointmentService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.web.util.NestedServletException;

import java.util.Arrays;
import java.util.Collection;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@RunWith(SpringRunner.class)
@WebMvcTest(AppointmentController.class)
public class AppointmentControllerTest {

    private static Appointment appointment = new Appointment();

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AppointmentService appointmentService;

    @Before
    public void initAppointment() {
        Integer appointmentId = 1;
        appointment.setAppointmentId(appointmentId);
    }

    @Test
    public void getAllAppointmentsWhenGetAppointmentsMethod() throws Exception {
        Collection<Appointment> allAppointments = Arrays.asList(appointment);
        given(appointmentService.getAppointments()).willReturn(allAppointments);

        mockMvc.perform(get("/appointments").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].appointmentId", is(appointment.getAppointmentId())));
    }

    @Test
    public void getAppointmentWhenGetAppointmentByIdMethod() throws Exception {
        given(appointmentService.getAppointmentById(appointment.getAppointmentId()))
        .willReturn(appointment);

        mockMvc.perform(get("/appointments/" + appointment.getAppointmentId().toString())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("appointmentId", is(appointment.getAppointmentId())));
    }

    @Test
    public void throwExceptionWhenAppointmentDoesNotExist() throws Exception {
        Mockito.doThrow(new AppointmentNotFoundException(appointment.getAppointmentId()))
                .when(appointmentService).getAppointmentById(appointment.getAppointmentId());

        assertThatThrownBy(() -> mockMvc.perform(get("/appointments/" +
                appointment.getAppointmentId().toString()).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())).hasCause(new AppointmentNotFoundException(
                        appointment.getAppointmentId()));
    }
}

