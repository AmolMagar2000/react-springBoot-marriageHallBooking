package com.Project.MarriageHall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MarriageHall.entity.JwtRequest;
import com.Project.MarriageHall.entity.JwtResponse;
import com.Project.MarriageHall.service.JwtService;

@RestController
@CrossOrigin
@RequestMapping("/api/jwt")
public class JwtController {
	@Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }
}
