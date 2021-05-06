package com.accolite.models;

import com.accolite.opportunity.model.Audit;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;


public class AuditModel {
    //@Autowired
    Audit opportunity = new Audit();


    @Test
    public void title(){
        opportunity.setTitle("Software Engineer");
        String title = opportunity.getTitle();
        Assertions.assertEquals("Software Engineer", title);
    }

    @Test
    public void Id(){
        opportunity.setOpid((long)101);
        Long id = opportunity.getOpid();
        Assertions.assertEquals(101, id);
    }

    @Test
    public void skills(){
        opportunity.setSkills("Java, Angular");
        String skills = opportunity.getSkills();
        Assertions.assertEquals("Java, Angular", skills);
    }



    @Test
    public void startDate(){
        SimpleDateFormat ft =
                new SimpleDateFormat("yyyy.MM.dd");
        Date date = new Date();
        String date_str = ft.format(date).toString();
        opportunity.setStartDate(date);
        String date_response = ft.format(opportunity.getStartDate()).toString();
        Assertions.assertEquals(date_str, date_response);
    }

    @Test
    public void endDate(){
        SimpleDateFormat ft =
                new SimpleDateFormat("yyyy.MM.dd");
        Date date = new Date();
        String date_str = ft.format(date).toString();
        opportunity.setEndDate(date);
        String date_response = ft.format(opportunity.getEndDate()).toString();
        Assertions.assertEquals(date_str, date_response);
    }
    
    @Test
    public void updateDate(){
        SimpleDateFormat ft =
                new SimpleDateFormat("yyyy.MM.dd");
        Date date = new Date();
        String date_str = ft.format(date).toString();
        opportunity.setUpdateDate(date);
        String date_response = ft.format(opportunity.getUpdateDate()).toString();
        Assertions.assertEquals(date_str, date_response);
    }

    @Test
    public void manager(){
        opportunity.setMname("Abhishek Thakekar");
        String name = opportunity.getMname();
        Assertions.assertEquals("Abhishek Thakekar", name);
    }
    
    @Test
    public void managerMail(){
        opportunity.setMemail("Abhishek.Thakekar@accolitedigitial.com");
        String email = opportunity.getMemail();
        Assertions.assertEquals("Abhishek.Thakekar@accolitedigitial.com", email);
    }

    @Test
    public void description(){
        opportunity.setDescription("Proficient with Java, Angular");
        String skills = opportunity.getDescription();
        Assertions.assertEquals("Proficient with Java, Angular", skills);
    }

    @Test
    public void location(){
        opportunity.setLocation("Mumbai");
        String location = opportunity.getLocation();
        Assertions.assertEquals("Mumbai", location);
    }
    
    @Test
    public void vacancy(){
        opportunity.setVacancy(7);
        int vacant = opportunity.getVacancy();
        Assertions.assertEquals(7, vacant);
    }
    
    @Test
    public void version(){
        opportunity.setVersion(7);
        int ver = opportunity.getVersion();
        Assertions.assertEquals(7, ver);
    }


}

