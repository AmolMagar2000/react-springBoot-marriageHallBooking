package com.Project.MarriageHall.service;

import java.util.List;

import com.Project.MarriageHall.entity.Booking;

public interface BookingService {
	public List<Booking> findAll();
	
	public Booking findById(int theId);
	
	public void save(Booking theBooking);
	
	public void deleteById(int theId);
	
	public List<Booking> findByUser(String username);
}
