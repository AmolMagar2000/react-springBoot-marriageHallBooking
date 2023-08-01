package com.Project.MarriageHall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Project.MarriageHall.dao.BookingDao;
import com.Project.MarriageHall.entity.Booking;

@Service
public class BookingServiceImpl implements BookingService {
	private BookingDao bookingDao;
	
	@Autowired
	public BookingServiceImpl(BookingDao theBookingDao) {
		bookingDao = theBookingDao;
	}

	@Override
	@Transactional
	public List<Booking> findAll() {
		return bookingDao.findAll();
	}

	@Override
	@Transactional
	public Booking findById(int theId) {
		return bookingDao.findById(theId);
	}

	@Override
	@Transactional
	public void save(Booking theBooking) {
		bookingDao.save(theBooking);
		
	}

	@Override
	@Transactional
	public void deleteById(int theId) {
		bookingDao.deleteById(theId);
		
	}

	@Override
	public List<Booking> findByUser(String username) {
		return bookingDao.findbyUser(username);
	}
	
	
}
