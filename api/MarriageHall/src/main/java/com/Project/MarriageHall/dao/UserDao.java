package com.Project.MarriageHall.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Project.MarriageHall.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, String> {

}
