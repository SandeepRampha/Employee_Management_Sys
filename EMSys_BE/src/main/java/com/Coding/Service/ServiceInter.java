package com.Coding.Service;

import java.util.List;

import com.Coding.Entity.Employee;

public interface ServiceInter 
{
	public Employee Insert(Employee employee);
	
	public List<Employee> ViewAll();
	
	public Employee viewById(Long EmpId);
	
	public List<Employee> deleteById(Long EmpId);
	
	public Employee updateById(Long EmpId, Employee employee);
}
