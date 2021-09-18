package com.joseluizjunior.bethaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joseluizjunior.bethaapp.entity.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{
	Usuario findByEmail(String email);
	
}
