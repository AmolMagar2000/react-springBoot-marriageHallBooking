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

import com.Project.MarriageHall.entity.Feedback;
import com.Project.MarriageHall.service.FeedbackService;

@RestController
@RequestMapping("/api")
public class FbController {
	FeedbackService feedbackService;
	
	@Autowired
	public FbController(FeedbackService fbServ) {
		feedbackService = fbServ;
	}
	
	@PostMapping("/feedback")
	public Feedback addFeedback(@RequestBody Feedback fb) {
		fb.setId(0);
		feedbackService.fbAdd(fb);
		return fb;
	}
	
	@GetMapping("/feedback/{feedbackId}")
	public Feedback getFeedback(@PathVariable int feedbackId) {
		Feedback fb = feedbackService.fbById(feedbackId);
		if (fb == null) {
			throw new RuntimeException("Feedback Id not found");
		}
		return fb;
	}
	
	@PutMapping("/feedback")
	public Feedback updateFeedback(@RequestBody Feedback fb) {
		feedbackService.fbUpdate(fb);
		return fb;
	}
	
	@DeleteMapping("/feedback/{feedbackId}")
	public String deleteFeedback(@PathVariable int feedbackId) {
		Feedback feedback = feedbackService.fbById(feedbackId);
		feedbackService.fbDelete(feedbackId);
		return feedback.getName() + " is deleted.";
	}
	
	@GetMapping("/feedback")
	public List<Feedback> getFeedbackAll() {
		return feedbackService.fbGetAll();
	}
}
