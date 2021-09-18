package com.joseluizjunior.bethaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.joseluizjunior.bethaapp.entity.Status;
import com.joseluizjunior.bethaapp.repository.StatusRepository;

@RestController
public class StatusController {

	@Autowired
	StatusRepository statusRep;
	
	
	@RequestMapping(value="/api/status", method=RequestMethod.GET)
	public List<Status> listAll(){
		return this.statusRep.findAll();
	}
	
	@RequestMapping(value="/api/status/p/true", method=RequestMethod.GET)
	public List<Status> listAllPers(){
		return this.statusRep.findByIsPersonalisado(true);
	}
	
	@RequestMapping(value="/api/status", method=RequestMethod.POST)
	public Status saveStatus(@RequestBody Status status) {
		if(status.getId() !="5c5f565a7a02d21c580e0939" && status.getId() !="5c5f58597a02d21c580e093a" &&
		        status.getId() !="5c5f5b527a02d21ce4d2cb8d" &&
		        status.getId() !="5c6349277a02d21314f84164" ) {
			return null;
		}
		return this.statusRep.save(status);
	}
	
	@RequestMapping(value="/api/status/init", method=RequestMethod.GET)
	public void saveInitStatus() {
		
		Status stn = new Status();
				
		stn.setId("5c5f58597a02d21c580e093a");
		stn.setDescricao("Chamado finalizado");
		stn.setNome("Finalizado");
		stn.setPersonalisado(false);
		this.statusRep.findById(stn.getId()).orElse(this.statusRep.save(stn));
		
		stn.setId("5c5f565a7a02d21c580e0939");
		stn.setDescricao("Aguardando peças");
		stn.setNome("Aguardando peças");
		stn.setPersonalisado(true);
		this.statusRep.findById(stn.getId()).orElse(this.statusRep.save(stn));
		
		stn.setId("5c5f5b527a02d21ce4d2cb8d");
		stn.setDescricao("Em execução pelo técnico");
		stn.setNome("Execução");
		stn.setPersonalisado(true);
		this.statusRep.findById(stn.getId()).orElse(this.statusRep.save(stn));
		
		stn.setId("5c6349277a02d21314f84164");
		stn.setDescricao("Chamado em aberto");
		stn.setNome("Aberto");
		stn.setPersonalisado(false);
		this.statusRep.findById(stn.getId()).orElse(this.statusRep.save(stn));
	}
	
	@RequestMapping(value="/api/status/{id}", method=RequestMethod.GET)
	public Status getById(@PathVariable("id") String id){
		return this.statusRep.findById(id).orElse(null);
	}
	
	@RequestMapping(value="/api/status/{id}", method=RequestMethod.DELETE)
	public void deleteStatus(@PathVariable("id") String id){
		this.statusRep.deleteById(id);
	}
	
}
