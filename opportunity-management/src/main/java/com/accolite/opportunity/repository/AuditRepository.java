package com.accolite.opportunity.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.accolite.opportunity.model.Audit;


@Repository
public interface AuditRepository extends JpaRepository<Audit, Long> {
	@Query("select a from Audit a where a.opid=:opid")
	public List<Audit> findByOpId(@Param("opid") Long opid);
}




 


