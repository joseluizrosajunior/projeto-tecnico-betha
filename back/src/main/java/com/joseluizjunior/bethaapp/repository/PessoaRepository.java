package com.joseluizjunior.bethaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joseluizjunior.bethaapp.entity.Pessoa;

public interface PessoaRepository extends MongoRepository<Pessoa, String>{
	
	Pessoa findByCpf(String cpf);

}
