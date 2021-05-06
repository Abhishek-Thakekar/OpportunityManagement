package com.accolite.opportunity;


import com.accolite.models.*;
import com.accolite.opportunity.controller.*;
import com.accolite.opportunity.model.*;
import com.accolite.opportunity.repository.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;

import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


import java.nio.charset.Charset;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = {OpportunityController.class})
class BackendApplicationTests {

	OpportunityModel testModelMethod = new OpportunityModel();

    AuditModel auditTest = new AuditModel();
    
    ManagerModel managerTest = new ManagerModel();

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    private OpportunityRepository opportunityRepository;

    @MockBean
    private AuditRepository auditRepository;


    public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8")
    );
    List<Opportunity> opportunityList = new ArrayList<>();
    Opportunity op1, op2;
    List<Audit> auditList = new ArrayList<>();

    @Before
    public void setup(){
        short vacant = 7;

        op1 = new Opportunity();
        op1.setOpid(1L);
        op1.setMname("Abhishek Thakekar");
        op1.setMemail("Abhishek.Thakekar@accolitedigital.com");
        op1.setSkills("Java");
        op1.setVacancy(vacant);
        op1.setTitle("Java Developer");
        op1.setDescription("Should be early learner");
        op1.setLocation("Mumbai");
        op1.setStartDate(new Date());
        op1.setEndDate(new Date());

        op2 = new Opportunity();
        op2.setOpid(2L);
        op2.setMname("Sohail Bepari");
        op1.setMemail("Sohail.Bepari@accolitedigital.com");
        op2.setSkills("Angular");
        op2.setVacancy(vacant);
        op2.setTitle("Angular Developer");
        op1.setDescription("Should be early learner in angular");
        op2.setLocation("Hyderabad");
        op2.setStartDate(new Date());
        op2.setEndDate(new Date());
        opportunityList.add(op1);
        opportunityList.add(op2);
    }

    @Test
    void testModel(){
	    testModelMethod.title();
	    testModelMethod.description();
	    testModelMethod.startDate();
	    testModelMethod.endDate();
	    testModelMethod.vacancy();
	    testModelMethod.manager();
	    testModelMethod.startDate();
	    testModelMethod.skills();
	    testModelMethod.location();
	    testModelMethod.Id();

	    //audit

	    auditTest.title();
	    auditTest.description();
	    auditTest.startDate();
	    auditTest.endDate();
	    auditTest.endDate();
	    auditTest.vacancy();
	    auditTest.version();
	    auditTest.manager();
	    auditTest.startDate();
	    auditTest.skills();
	    auditTest.location();
	    auditTest.Id();
	    
	   //manager
	    managerTest.Id();
	    managerTest.manager();
	    managerTest.managerMail();
	    managerTest.profile();
    }

    //test controller getallopportunities
    @Test
    public void testGetAllOpportunities() throws Exception {
        Mockito.when(opportunityRepository.findAll()).thenReturn(opportunityList);
        mockMvc.perform(get("/api/opportunity/opportunities/")).andExpect(status().isOk());
    }

    //test auditcontroller
    @Test
    public void testGetAudits() throws Exception {
        Mockito.when(auditRepository.findAll()).thenReturn(auditList);
        mockMvc.perform(get("/api/opportunity/opportunities/audits")).andExpect(status().isNotFound());
    }

    @Test
    public void testAddOpportunity() throws Exception {
        short vacant = 7;
        op1 = new Opportunity();
        op1.setOpid(1L);
        op1.setMname("Abhishek Thakekar");
        op1.setMemail("Abhishek.Thakekar@accolitedigital.com");
        op1.setSkills("Java");
        op1.setVacancy(vacant);
        op1.setTitle("Java Developer");
        op1.setDescription("Should be early learner");
        op1.setLocation("Mumbai");
        op1.setStartDate(new Date());
        op1.setEndDate(new Date());
        String json = objectMapper.writeValueAsString(op1);
        Mockito.when(opportunityRepository.save(op1)).thenReturn(op1);
        mockMvc.perform(post("/api/opportunity/opportunities").contentType(MediaType.APPLICATION_JSON).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }

    @Test
    public void testupdateOpportunity() throws Exception {
    	short vacant = 7;
        op1 = new Opportunity();
        op1.setOpid(1L);
        op1.setMname("Abhishek Thakekar");
        op1.setMemail("Abhishek.Thakekar@accolitedigital.com");
        op1.setSkills("Java");
        op1.setVacancy(vacant);
        op1.setTitle("Java Developer");
        op1.setDescription("Should be early learner");
        op1.setLocation("Mumbai");
        op1.setStartDate(new Date());
        op1.setEndDate(new Date());
        String json = objectMapper.writeValueAsString(op1);
        Mockito.when(opportunityRepository.save(op1)).thenReturn(op1);
        mockMvc.perform(put("/api/opportunity/opportunities/{id}", 1L).contentType(MediaType.APPLICATION_JSON).content(json).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }


    @Test
    public void testGetMyOpportunities() throws Exception {
        Mockito.when(opportunityRepository.findByEmail("Abhishek.Thakekar@accolitedigital.com")).thenReturn(opportunityList);
        mockMvc.perform(get("/api/opportunity/opportunities/email/Abhishek.Thakekar@accolitedigital.com")).andExpect(status().isOk());
    }
    
    
  


}
