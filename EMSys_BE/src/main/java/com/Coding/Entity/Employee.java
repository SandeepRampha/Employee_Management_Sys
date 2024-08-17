package com.Coding.Entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long EmpId;
	String EmpName;
	Long Mobile;
	String Email;
	String Location;
	Date dateOfJoining;
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Long getEmpId() {
		return EmpId;
	}
	public void setEmpId(Long empId) {
		EmpId = empId;
	}
	public String getEmpName() {
		return EmpName;
	}
	public void setEmpName(String empName) {
		EmpName = empName;
	}
	public Long getMobile() {
		return Mobile;
	}
	public void setMobile(Long mobile) {
		Mobile = mobile;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	
	public Date getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	
	public Employee(Long empId, String empName, Long mobile, String email, String location, Date dateOfJoining) {
		super();
		EmpId = empId;
		EmpName = empName;
		Mobile = mobile;
		Email = email;
		Location = location;
		this.dateOfJoining = dateOfJoining;
	}

	
}
