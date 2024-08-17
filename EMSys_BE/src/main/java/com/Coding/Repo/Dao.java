package com.Coding.Repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Coding.Entity.Employee;
@Repository
public interface Dao extends CrudRepository<Employee, Long>
{

}
