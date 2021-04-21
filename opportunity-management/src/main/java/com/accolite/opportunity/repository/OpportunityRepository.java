package com.accolite.opportunity.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.accolite.opportunity.model.Opportunity;

import java.util.List;

@Repository
public interface OpportunityRepository extends JpaRepository<Opportunity, Long>{
	@Query("select o from Opportunity o where o.memail=:email")
	public List<Opportunity> findByEmail(@Param("email") String memail);
}


