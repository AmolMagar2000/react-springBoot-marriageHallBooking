package com.Project.MarriageHall.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.MarriageHall.dao.RoleDao;
import com.Project.MarriageHall.entity.Role;

@Service
public class RoleService {
	@Autowired
    private RoleDao roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
