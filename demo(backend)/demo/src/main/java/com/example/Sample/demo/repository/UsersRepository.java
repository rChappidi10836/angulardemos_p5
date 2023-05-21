package com.example.Sample.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.Sample.demo.entity.users;

public interface UsersRepository extends CrudRepository<users, Integer> {

}
