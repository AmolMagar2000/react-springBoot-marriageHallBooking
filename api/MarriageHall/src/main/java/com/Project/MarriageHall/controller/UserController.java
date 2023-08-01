package com.Project.MarriageHall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MarriageHall.entity.User;
import com.Project.MarriageHall.service.UserService;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Autowired
    private UserService userService;

    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping("/register")
    public User registerNewUser(@RequestBody @Valid User user) {
        return userService.registerNewUser(user);
    }

    
}
