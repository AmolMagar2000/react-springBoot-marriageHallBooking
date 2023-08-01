package com.Project.MarriageHall.dao;

import java.util.List;

import com.Project.MarriageHall.entity.Booking;

public interface BookingDao {
	public List<Booking> findAll();
	
	public List<Booking> findbyUser(String username);
	
	public Booking findById(int theId);
	
	public void save(Booking theBooking);
	
	public void deleteById(int theId);
}
