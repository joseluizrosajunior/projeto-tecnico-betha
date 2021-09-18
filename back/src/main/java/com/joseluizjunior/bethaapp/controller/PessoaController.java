package com.joseluizjunior.bethaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.joseluizjunior.bethaapp.entity.Pessoa;
import com.joseluizjunior.bethaapp.repository.PessoaRepository;

@RestController
public class PessoaController {

	@Autowired
	PessoaRepository pr;
	
	@RequestMapping(value="/api/pessoa", method=RequestMethod.GET)
	public List<Pessoa> listPessoa(){
		return this.pr.findAll();
	}
	
	@RequestMapping(value="/api/pessoa", method=RequestMethod.POST)
	public Pessoa savePessoa(@RequestBody Pessoa pessoa) {
		return this.pr.save(pessoa);
	}
	
	@RequestMapping(value="/api/pessoa/{id}", method=RequestMethod.GET)
	public Pessoa getById(@PathVariable("id") String id){
		return this.pr.findById(id).orElse(null);
	}
	
	@RequestMapping(value="/api/pessoa/{id}/cpf", method=RequestMethod.GET)
	public Pessoa getByCpf(@PathVariable("id") String id){
		return this.pr.findByCpf(id);
	}
	
	@RequestMapping(value="/api/pessoa/{id}", method=RequestMethod.DELETE)
	public void deleteStatus(@PathVariable("id") String id){
		this.pr.deleteById(id);
	}
	
}
