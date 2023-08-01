package com.Project.MarriageHall.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.Project.MarriageHall.entity.Details;


@Repository
public class DetailsDaoImpl implements DetailsDao {
	private EntityManager entityManager;
	
	@Autowired
	public DetailsDaoImpl(EntityManager eManager) {
		entityManager = eManager;
	}

	@Override
	public void detailsAdd(Details details) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(details);
	}

	@Override
	public Details detailsById(int id) {
		Session s = entityManager.unwrap(Session.class);
		Details details = s.get(Details.class, id);
		return details;
	}

	@Override
	public Details detailsUpdate(Details details) {
		Session s = entityManager.unwrap(Session.class);
		s.saveOrUpdate(details);
		return details;
	}

	@Override
	public void detailsDelete(int id) {
		Session s = entityManager.unwrap(Session.class);
		Query q = s.createQuery("delete from Details where id = :did");
		q.setParameter("did", id);
		q.executeUpdate();
	}

	@Override
	public List<Details> detailsAll() {
		Session s = entityManager.unwrap(Session.class);
		Query<Details> q = s.createQuery("from Details", Details.class);
		List<Details> d = q.getResultList();
		return d;
	}
}