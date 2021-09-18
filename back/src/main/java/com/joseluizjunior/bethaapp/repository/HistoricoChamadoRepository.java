package com.joseluizjunior.bethaapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joseluizjunior.bethaapp.entity.HistoricoChamado;

public interface HistoricoChamadoRepository extends MongoRepository<HistoricoChamado, String>{

	List<HistoricoChamado> findByChamadoId(String id);
	
	
}
