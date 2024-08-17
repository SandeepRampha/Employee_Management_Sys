package com.Coding.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.Coding.Entity.Employee;
import com.Coding.Repo.Dao;
@org.springframework.stereotype.Service
public class Service implements ServiceInter
{
	
	@Autowired
	private Dao dao;
	public Service(Dao dao) {
		super();
		this.dao = dao;
	}
	public Dao getDao() {
		return dao;
	}
	public void setDao(Dao dao) {
		this.dao = dao;
	}

	@Override
	public Employee Insert(Employee employee) {
		return dao.save(employee);
	}

	@Override
	public List<Employee> ViewAll() {
		return (List<Employee>) dao.findAll();
	}

	@Override
	public Employee viewById(Long EmpId) {
		Optional<Employee> opt =dao.findById(EmpId);
		Employee emp = null;
		if(opt.isEmpty())
		return emp;
		else
			return emp=opt.get();
	}

//	@Override
//	public String deleteById(Long EmpId) {
//		Employee emp= viewById(EmpId);
//		if(emp == null)
//			return "Employee Does Not Exist";
//		else {
//			dao.deleteById(EmpId);
//			return "Employee "+EmpId+ " Deleted Successfully!!!";
//		}
//	}
	@Override
	public List<Employee> deleteById(Long EmpId) {
//		Employee emp= viewById(EmpId);
		dao.deleteById(EmpId);
		return (List<Employee>) dao.findAll();
	}
	@Override
	public Employee updateById(Long EmpId, Employee employee) {
		Employee emp = viewById(EmpId);
		if (emp != null) {
            if (employee.getEmpName() != null) {
                emp.setEmpName(employee.getEmpName());
            }
            if (employee.getEmail() != null) {
                emp.setEmail(employee.getEmail());
            }
            if (employee.getMobile() != null) {
                emp.setMobile(employee.getMobile());
            }
            if (employee.getLocation() != null) {
                emp.setLocation(employee.getLocation());
            }
            if(employee.getDateOfJoining()!=null) {
            	emp.setDateOfJoining(employee.getDateOfJoining());
            }
            return dao.save(emp);
		}
		else
		return emp;
	}

}
