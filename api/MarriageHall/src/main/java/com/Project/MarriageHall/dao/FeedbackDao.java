package com.Project.MarriageHall.dao;

import java.util.List;

import com.Project.MarriageHall.entity.Feedback;

public interface FeedbackDao {
	public void feedbackAdd(Feedback feedback);
	
	public Feedback feedbackById(int id);
	
	public Feedback feedbackUpdate(Feedback feedback);
	
	public void feedbackDelete(int id);
	
	public List<Feedback> feedbackAll();
}
