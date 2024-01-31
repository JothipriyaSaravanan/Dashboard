package com.assignment.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.assignment.data.model.Data;

@Repository
public interface DataRepository extends JpaRepository<Data, Integer> {
	
	@Query(value = "select * from names.mytable where sector = :sec", nativeQuery  = true)
	List<Data> getDataBySector(@Param("sec") String sector);
	
}
