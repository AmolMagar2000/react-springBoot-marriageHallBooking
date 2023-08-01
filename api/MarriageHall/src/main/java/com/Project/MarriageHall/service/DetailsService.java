package com.Project.MarriageHall.service;

import java.util.List;

import com.Project.MarriageHall.entity.Details;

public interface DetailsService {
	public void dAdd(Details details);
	
	public Details dById(int id);
	
	public Details dUpdate(Details details);
	
	public void dDelete(int id);
	
	public List<Details> dGetAll();
}
