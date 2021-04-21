package com.accolite.opportunity.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.accolite.opportunity.model.Manager;

@Repository
public interface ManagerRepository extends JpaRepository<Manager, Long>{
	@Query("select m from Manager m where m.email=:email")
	public Manager findByEmail(@Param("email") String memail);

}
