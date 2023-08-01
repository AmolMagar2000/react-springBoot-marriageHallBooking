package com.Project.MarriageHall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MarriageHall.entity.Details;
import com.Project.MarriageHall.service.DetailsService;

@RestController
@RequestMapping("/api")
public class DdController {
	DetailsService detailsService;
	
	@Autowired
	public DdController(DetailsService dServ) {
		detailsService = dServ;
	}
	
	@PostMapping("/details")
	public Details addDetails(@RequestBody Details d) {
		d.setId(0);
		detailsService.dAdd(d);
		return d;
	}
	
	@GetMapping("/details/{detailsId}")
	public Details getFeedback(@PathVariable int detailsId) {
		Details d = detailsService.dById(detailsId);
		if (d == null) {
			throw new RuntimeException("Details Id not found");
		}
		return d;
	}
	
	@PutMapping("/details")
	public Details updateDetails(@RequestBody Details d) {
		detailsService.dUpdate(d);
		return d;
	}
	
	@DeleteMapping("/details/{detailsId}")
	public String deleteDetails(@PathVariable int detailsId) {
		Details details = detailsService.dById(detailsId);
		detailsService.dDelete(detailsId);
		return details.getName() + " is deleted.";
	}
	
	@GetMapping("/details")
	public List<Details> getDetailsAll() {
		return detailsService.dGetAll();
	}
}