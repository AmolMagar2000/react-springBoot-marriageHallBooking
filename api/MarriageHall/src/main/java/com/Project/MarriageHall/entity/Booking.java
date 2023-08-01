package com.Project.MarriageHall.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="booking")
public class Booking {
	// define fields
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="id")
		private int id;
		
		@Column(name="user_name")
		private String userName;
		
		@Column(name="hall_name")
		private String hallName;
		
		@Column(name="date")
		private String date;

		@Column(name="location")
		private String location;
		
		
		public Booking() {
					
		}


		public Booking(String userName, String hallName, String date, String location) {
			this.userName = userName;
			this.hallName = hallName;
			this.date = date;
			this.location = location;
		}


		public int getId() {
			return id;
		}


		public void setId(int id) {
			this.id = id;
		}


		public String getUserName() {
			return userName;
		}


		public void setUserName(String userName) {
			this.userName = userName;
		}


		public String getHallName() {
			return hallName;
		}


		public void setHallName(String hallName) {
			this.hallName = hallName;
		}


		public String getDate() {
			return date;
		}


		public void setDate(String date) {
			this.date = date;
		}


		public String getLocation() {
			return location;
		}


		public void setLocation(String location) {
			this.location = location;
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
}
