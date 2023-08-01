package com.Project.MarriageHall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MarriageHall.entity.Booking;
import com.Project.MarriageHall.service.BookingService;


@RestController
@RequestMapping("/auth")
public class BookingController {
	private BookingService bookingService;
	
	@Autowired
	public BookingController(BookingService theBookingService) {
		bookingService = theBookingService;
	}
	
	

	@GetMapping("/bookings")
	@PreAuthorize("hasRole('User')")
	public List<Booking> allBookings() {
		return bookingService.findAll();
	}

	@GetMapping("/bookings/{username}")
	@PreAuthorize("hasRole('User')")
	public List<Booking> BookingsByUser(@PathVariable String username) {
		return bookingService.findByUser(username);
	}
	
	@GetMapping("/booking/{bookingId}")
	@PreAuthorize("hasRole('User')")
	public Booking getBooking(@PathVariable int bookingId) {
		
		Booking booking = bookingService.findById(bookingId);
		
		if (booking == null) {
			throw new RuntimeException("Booking id not found - " + bookingId);
		}
		
		return booking;
	}
	
	
	@PostMapping("/bookings")
	@PreAuthorize("hasRole('User')")
	public Booking addBooking(@RequestBody Booking theBooking) {
		
		theBooking.setId(0);
		
		bookingService.save(theBooking);
		
		return theBooking;
	}
		
		
	@PutMapping("/bookings")
	@PreAuthorize("hasRole('User')")
	public Booking updateBooking(@RequestBody Booking theBooking) {
		
		bookingService.save(theBooking);
		
		return theBooking;
	}
		
		
		
	@DeleteMapping("/booking/{bookingId}")
	@PreAuthorize("hasRole('User')")
	public String deleteBooking(@PathVariable int bookingId) {
		
		Booking tempBooking = bookingService.findById(bookingId);
		
		if (tempBooking == null) {
			throw new RuntimeException("Booking id not found - " + bookingId);
		}
		
		bookingService.deleteById(bookingId);
		
		return "Deleted booking id - " + bookingId;
	}
}
