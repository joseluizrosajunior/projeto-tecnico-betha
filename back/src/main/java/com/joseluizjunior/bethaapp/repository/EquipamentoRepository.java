package com.joseluizjunior.bethaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joseluizjunior.bethaapp.entity.Equipamento;

public interface EquipamentoRepository extends MongoRepository<Equipamento, String>{
	
	Equipamento findByNumeroSerie(String id);
	

}
