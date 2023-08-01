package com.Project.MarriageHall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.MarriageHall.entity.Role;
import com.Project.MarriageHall.service.RoleService;

@RestController
@RequestMapping("/api/role")
public class RoleController {
	@Autowired
    private RoleService roleService;

    @PostMapping("/create")
    public Role createNewRole(@RequestBody Role role) {
        return roleService.createNewRole(role);
    }
}
