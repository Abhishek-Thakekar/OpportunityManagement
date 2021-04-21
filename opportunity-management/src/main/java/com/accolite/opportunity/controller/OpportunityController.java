package com.accolite.opportunity.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.opportunity.exception.ResourceNotFoundException;
import com.accolite.opportunity.model.Opportunity;
import com.accolite.opportunity.repository.OpportunityRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/opportunity/")
public class OpportunityController {
	@Autowired
	private OpportunityRepository opportunityRepository;
	
	
	// get all opportunities
	@GetMapping("/opportunities")
	public List<Opportunity> getAllOpportunities(){
//		System.out.println("hii getting opportunities");
		return opportunityRepository.findAll();
	}
	
//	get your opportunities by email
	@GetMapping("/opportunities/email/{mail}")
	public List<Opportunity> getMyOpportunities(@PathVariable String mail){
		return opportunityRepository.findByEmail(mail);		
	}
	
	// get opportunity by id rest api
		@GetMapping("/opportunities/id/{id}")
		public ResponseEntity<Opportunity> getOpportunityById(@PathVariable Long id) {
//			System.out.println("findById working");
			Opportunity opportunity = opportunityRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Opportunity not exist with id :" + id));
			return ResponseEntity.ok(opportunity);
		}
	
	// create Opportunity
		@PostMapping("/opportunities")
		public Opportunity createOpportunity(@RequestBody Opportunity opportunity) {
			return opportunityRepository.save(opportunity);
		}
		
		// update Opportunity rest api
		
		@PutMapping("/opportunities/{id}")
		public ResponseEntity<Opportunity> updateOpportunity(@PathVariable Long id, @RequestBody Opportunity opportunityDetails){
			Opportunity opportunity = opportunityRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Opportunity not exist with id :" + id));
			
			opportunity.setTitle(opportunityDetails.getTitle());
			opportunity.setDescription(opportunityDetails.getDescription());
			opportunity.setSkills(opportunityDetails.getSkills());
			opportunity.setLocation(opportunityDetails.getLocation());
			opportunity.setVacancy(opportunityDetails.getVacancy());
			
			Opportunity updatedOpportunity = opportunityRepository.save(opportunity);
			return ResponseEntity.ok(updatedOpportunity);
		}
		
		// delete Opportunity rest api
		@DeleteMapping("/opportunities/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteOpportunity(@PathVariable Long id){
			Opportunity opportunity = opportunityRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Opportunity not exist with id :" + id));
			
			opportunityRepository.delete(opportunity);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		
	
}
