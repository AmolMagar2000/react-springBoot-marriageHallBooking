package com.Project.MarriageHall.service;

import java.util.List;

import com.Project.MarriageHall.entity.Feedback;

public interface FeedbackService {
public void fbAdd(Feedback feedback);
	
	public Feedback fbById(int id);
	
	public Feedback fbUpdate(Feedback feedback);
	
	public void fbDelete(int id);
	
	public List<Feedback> fbGetAll();
}
