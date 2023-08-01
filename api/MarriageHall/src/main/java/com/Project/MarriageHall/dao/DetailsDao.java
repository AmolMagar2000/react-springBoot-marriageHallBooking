package com.Project.MarriageHall.dao;

import java.util.List;

import com.Project.MarriageHall.entity.Details;

public interface DetailsDao {
	public void detailsAdd(Details details);
	
	public Details detailsById(int id);
	
	public Details detailsUpdate(Details details);
	
	public void detailsDelete(int id);
	
	public List<Details> detailsAll();
}
