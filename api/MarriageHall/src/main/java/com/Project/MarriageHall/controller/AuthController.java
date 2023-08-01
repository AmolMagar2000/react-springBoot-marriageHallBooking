package com.Project.MarriageHall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MarriageHall.entity.JwtResponse;
import com.Project.MarriageHall.entity.User;
import com.Project.MarriageHall.service.UserService;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }
    
    @GetMapping("/forAdmin")
    @PreAuthorize("hasRole('Admin')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping("/forUser")
    @PreAuthorize("hasRole('User')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
    
    @PutMapping("/updateUser")
    @PreAuthorize("hasRole('User')")
    public JwtResponse updateUser(@RequestBody @Valid User user) {
        User u = userService.updateUser(user);
        return new JwtResponse(user, "");
    }

}
