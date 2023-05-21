package com.example.Sample.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Sample.demo.entity.meds;



public interface MedsRepository extends CrudRepository<meds, Integer> {

}
