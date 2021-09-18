package com.joseluizjunior.bethaapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joseluizjunior.bethaapp.entity.Status;

public interface StatusRepository extends MongoRepository<Status, String>{
	List<Status> findByIsPersonalisado(Boolean b);
}
