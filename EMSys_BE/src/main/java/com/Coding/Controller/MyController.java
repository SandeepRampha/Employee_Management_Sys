package com.Coding.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Coding.Entity.Employee;
import com.Coding.Service.ServiceInter;

//@CrossOrigin("http://localhost:4321")
@CrossOrigin

@RestController
public class MyController 
{
	
	@Autowired
	private ServiceInter service;

	public MyController(ServiceInter service) {
		super();
		this.service = service;
	}
	@PostMapping("/insert")
	public Employee ins(@RequestBody Employee employee) {
		return service.Insert(employee);
	}
	
	@GetMapping("/ViewAll")
	public List<Employee> viewAll(){
		return service.ViewAll();
	}

	@GetMapping("/ViewById/{EmpId}")
	public Employee viewById(@PathVariable Long EmpId) {
		return service.viewById(EmpId);
	}
	
	@DeleteMapping("/DeleteById/{EmpId}")
	public List<Employee> deleteById(@PathVariable Long EmpId) {
		return service.deleteById(EmpId);	
	}
	
	@PatchMapping("/UpdateById/{EmpId}")
	public Employee updateById(@PathVariable Long EmpId, @RequestBody Employee employee){
		return service.updateById(EmpId, employee);
	}
	
	
	

}
