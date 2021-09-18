package com.joseluizjunior.bethaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.joseluizjunior.bethaapp.entity.Usuario;
import com.joseluizjunior.bethaapp.repository.UsuarioRepository;

@RestController
public class UsuarioController {
	
	@Autowired
	UsuarioRepository userRepository;
	
	@RequestMapping(value="/api/usuario", method=RequestMethod.GET)
	public List<Usuario> listAll(){
		return this.userRepository.findAll();
	}
	
	@RequestMapping(value="/api/usuario/init", method=RequestMethod.GET)
	public void saveInitUser() {
		Usuario user = new Usuario();
		
		user.setId("5c6348857a02d21314f84163");
		user.setNome("Atendente");
		user.setSenha("123456");
		user.setFuncao(0);
		user.setEmail("atendente@betha.com.br");
		this.userRepository.findById(user.getId()).orElse(this.userRepository.save(user));
		
		user.setNome("Técnico");
		user.setSenha("123456");
		user.setFuncao(1);
		user.setId("5c5fa1197a02d21d1c985e97");
		user.setEmail("tecnico@betha.com.br");
		this.userRepository.findById(user.getId()).orElse(this.userRepository.save(user));
		
		
		
	}
	
	@RequestMapping(value="/api/usuario", method=RequestMethod.POST)
	public Usuario saveStatus(@RequestBody Usuario usuario) {
		return this.userRepository.save(usuario);
	}
	
	@RequestMapping(value="/api/usuario/{id}", method=RequestMethod.GET)
	public Usuario getById(@PathVariable("id") String id){
		return this.userRepository.findById(id).orElse(null);
	}
	
	@RequestMapping(value="/api/usuario/{id}/email", method=RequestMethod.GET)
	public Usuario getByEmail(@PathVariable("id") String id){
		return this.userRepository.findByEmail(id);
	}
	
	@RequestMapping(value="/api/usuario/{id}", method=RequestMethod.DELETE)
	public void deleteStatus(@PathVariable("id") String id){
		this.userRepository.deleteById(id);
	}

}
