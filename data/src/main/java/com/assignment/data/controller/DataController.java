package com.assignment.data.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.assignment.data.model.Chart;
import com.assignment.data.service.DataService;

@RequestMapping("/data")
@CrossOrigin
@RestController
public class DataController {
	
	@Autowired
	DataService dataService;
	
	@GetMapping("/findBySector")	
	public List<Integer> findBySector(@RequestParam("sector")String Sector){
		return dataService.findBySector(Sector);
	}
	
	@GetMapping("/getChartData")
	public List<Chart> getChartData(){
		return dataService.getChartData();
	}
	
}
