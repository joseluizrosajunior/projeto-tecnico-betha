package com.joseluizjunior.bethaapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.joseluizjunior.bethaapp.entity.Chamado;
import com.joseluizjunior.bethaapp.entity.Pessoa;
import com.joseluizjunior.bethaapp.entity.Usuario;
import com.joseluizjunior.bethaapp.repository.ChamadoRepository;
import com.joseluizjunior.bethaapp.repository.PessoaRepository;
import com.joseluizjunior.bethaapp.repository.UsuarioRepository;

@RestController
public class ChamadoController {

	@Autowired
	ChamadoRepository chamadoR;
	UsuarioRepository userR;
	PessoaRepository pessoaR;

	@RequestMapping(value="/api/chamado", method=RequestMethod.POST)
	public Chamado saveChamado(@RequestBody Chamado chamado) {
		System.out.println(chamado);
		return this.chamadoR.save(chamado);
	}
	
	@RequestMapping(value="/api/chamado", method=RequestMethod.GET)
	public List<Chamado> listAll(){
		return this.chamadoR.findAll();
	}
	
	@RequestMapping(value="/api/chamado/{status}/{responsavel}", method=RequestMethod.GET)
	public List<Chamado> listAllByTecByStatus(@PathVariable("status") String status, @PathVariable("responsavel") String responsavel){
		System.out.println(status);
		System.out.println(responsavel);
		if (status.intern() == "all") {

			System.out.println("IF 01");
			if (responsavel.intern() == "all") {
				//localizartodos
				return this.chamadoR.findAll();
			}else {
				//localizar somente por tec
				return this.chamadoR.findByResponsavelId(responsavel);
			}
		}else {
			System.out.println("IF 02");
			if (responsavel.intern() == "all") {
				//localizar somente por status
				return this.chamadoR.findByStatusId(status);
			}else {
				//localizar por tec e status
				return this.chamadoR.findByResponsavelIdAndStatusId(responsavel, status);
			}
		}

	}
	
	@RequestMapping(value="/api/chamado/tec/{id}", method=RequestMethod.GET)
	public List<Chamado> chamadosPorTecnico(@PathVariable("id") String id){
		List<Chamado> listaVazia = new ArrayList<Chamado>();
		try {
			Usuario user = this.userR.findById(id).orElse(null);
			return this.chamadoR.findByResponsavel(user);
		} catch (Exception e) {
			return listaVazia;
		}
	}
	
	
	@RequestMapping(value="/api/chamado/{id}", method=RequestMethod.GET)
	public Chamado getById(@PathVariable("id") String id){
		return this.chamadoR.findById(id).orElse(null);
	}
	
	
	@RequestMapping(value="/api/chamado/{id}", method=RequestMethod.DELETE)
	public void deleteChamado(@PathVariable("id") String id){
		this.chamadoR.deleteById(id);
	}
	
}
