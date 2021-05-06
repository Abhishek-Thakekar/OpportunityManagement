package com.accolite.models;
import com.accolite.opportunity.model.Manager;

import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.Test;



public class ManagerModel {
	Manager manager = new Manager();

   

    @Test
    public void Id(){
        manager.setId((long)101);
        Long id = manager.getId();
        Assertions.assertEquals(101, id);
    }
    
    @Test
    public void manager(){
        manager.setName("Abhishek Thakekar");
        String name = manager.getName();
        Assertions.assertEquals("Abhishek Thakekar", name);
    }
    
    @Test
    public void managerMail(){
        manager.setEmail("Abhishek.Thakekar@accolitedigitial.com");
        String email = manager.getEmail();
        Assertions.assertEquals("Abhishek.Thakekar@accolitedigitial.com", email);
    }


    @Test
    public void profile(){
        manager.setProfile_img("Java, Angular");
        String skills = manager.getProfile_img();
        Assertions.assertEquals("Java, Angular", skills);
    }


}
