package com.Project.MarriageHall.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

import com.Project.MarriageHall.entity.Booking;

@Repository
public class BookingDaoImpl implements BookingDao {
	
	private EntityManager entityManager;
				
	@Autowired
	public BookingDaoImpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	public List<Booking> findAll() {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Booking> theQuery =
				currentSession.createQuery("from Booking", Booking.class);
		
		List<Booking> bookings = theQuery.getResultList();
				
		return bookings;

	}

	@Override
	public Booking findById(int theId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Booking booking =
				currentSession.get(Booking.class, theId);
		
		return booking;
	}

	@Override
	public void save(Booking theBooking) {
		Session currentSession = entityManager.unwrap(Session.class);
				
		currentSession.saveOrUpdate(theBooking);
		
	}

	@Override
	public void deleteById(int theId) {
		Session currentSession = entityManager.unwrap(Session.class);
						
	
		Query theQuery = 
				currentSession.createQuery(
						"delete from Booking where id=:bookingId");
		theQuery.setParameter("bookingId", theId);
		
		theQuery.executeUpdate();

	}

	@Override
	public List<Booking> findbyUser(String username) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		
		Query<Booking> theQuery = 
				currentSession.createQuery(
						"from Booking where userName=:userName", Booking.class);
		theQuery.setParameter("userName", username);
		
		List<Booking> bookings = theQuery.getResultList();
		
		return bookings;
	}

}
