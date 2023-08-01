package com.Project.MarriageHall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Project.MarriageHall.dao.FeedbackDao;
import com.Project.MarriageHall.entity.Feedback;

@Service
public class FeedbackServImpl implements FeedbackService {
	
	private FeedbackDao feedbackDao;
	
	@Autowired
	public FeedbackServImpl(FeedbackDao fbDao) {
		feedbackDao = fbDao;
	}

	@Override
	@Transactional
	public void fbAdd(Feedback feedback) {
		feedbackDao.feedbackAdd(feedback);
	}

	@Override
	@Transactional
	public Feedback fbById(int id) {
		return feedbackDao.feedbackById(id);
	}

	@Override
	@Transactional
	public Feedback fbUpdate(Feedback feedback) {
		return feedbackDao.feedbackUpdate(feedback);
	}

	@Override
	@Transactional
	public void fbDelete(int id) {
		feedbackDao.feedbackDelete(id);
	}

	@Override
	public List<Feedback> fbGetAll() {
		return feedbackDao.feedbackAll();
	}

}
