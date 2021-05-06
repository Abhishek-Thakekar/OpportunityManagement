package com.accolite.opportunity.controller;


import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.opportunity.exception.ResourceNotFoundException;
import com.accolite.opportunity.model.Manager;
import com.accolite.opportunity.repository.ManagerRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/manager/")
public class ManagerController {
	
	@Autowired
	private ManagerRepository managerRepository;
	
	// get all managers
	@GetMapping("/managers")
	public List<Manager> getAllManagers(){
//		System.out.println("hii");
		return managerRepository.findAll();
	}		
	
	// create manager rest api
	@PostMapping("/managers")
	public Manager createManager(@RequestBody Manager manager) {
		Manager m = managerRepository.findByEmail(manager.getEmail());
		if(m==null) {
			System.out.println("saving manager "+ manager);
			return managerRepository.save(manager);
		}
		return manager;

	}


}
