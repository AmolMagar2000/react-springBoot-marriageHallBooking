package com.Project.MarriageHall.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.Project.MarriageHall.dao.DetailsDao;
import com.Project.MarriageHall.entity.Details;

@Service
public class DetailsServImpl implements DetailsService {
	
	private DetailsDao detailsDao;
	
	@Autowired
	public DetailsServImpl(DetailsDao dDao) {
		detailsDao = dDao;
	}

	@Override
	@Transactional
	public void dAdd(Details details) {
		detailsDao.detailsAdd(details);
	}

	@Override
	@Transactional
	public Details dById(int id) {
		return detailsDao.detailsById(id);
	}

	@Override
	@Transactional
	public Details dUpdate(Details details) {
		return detailsDao.detailsUpdate(details);
	}

	@Override
	@Transactional
	public void dDelete(int id) {
		detailsDao.detailsDelete(id);
	}

	@Override
	@Transactional
	public List<Details> dGetAll() {
		return detailsDao.detailsAll();
	}

}
