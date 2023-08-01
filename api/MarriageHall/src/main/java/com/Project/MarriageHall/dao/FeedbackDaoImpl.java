package com.Project.MarriageHall.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Project.MarriageHall.entity.Feedback;

@Repository
public class FeedbackDaoImpl implements FeedbackDao {
	private EntityManager entityManager;
	
	@Autowired
	public FeedbackDaoImpl(EntityManager eManager) {
		entityManager = eManager;
	}

	@Override
	public void feedbackAdd(Feedback feedback) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(feedback);
	}

	@Override
	public Feedback feedbackById(int id) {
		Session s = entityManager.unwrap(Session.class);
		Feedback feedback = s.get(Feedback.class, id);
		return feedback;
	}

	@Override
	public Feedback feedbackUpdate(Feedback feedback) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(feedback);
		return feedback;
	}

	@Override
	public void feedbackDelete(int id) {
		Session s = entityManager.unwrap(Session.class);
		Query q = s.createQuery("delete from Feedback where id = :fbid");
		q.setParameter("fbid", id);
		q.executeUpdate();
	}

	@Override
	public List<Feedback> feedbackAll() {
		Session s = entityManager.unwrap(Session.class);
		Query<Feedback> q = s.createQuery("from Feedback", Feedback.class);
		List<Feedback> fb = q.getResultList();
		return fb;
	}
}
