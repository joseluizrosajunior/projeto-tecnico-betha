package com.joseluizjunior.bethaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.joseluizjunior.bethaapp.entity.Chamado;
import com.joseluizjunior.bethaapp.entity.Equipamento;
import com.joseluizjunior.bethaapp.repository.ChamadoRepository;
import com.joseluizjunior.bethaapp.repository.EquipamentoRepository;

@RestController
public class EquipamentoController {

	@Autowired
	EquipamentoRepository equipRep;
	
	@Autowired
	ChamadoRepository chamadoR;
	
	@RequestMapping(value="/api/equipamento", method=RequestMethod.GET)
	public List<Equipamento> listAll(){
		return this.equipRep.findAll();
	}
	
	@RequestMapping(value="/api/equipamento", method=RequestMethod.POST)
	public Equipamento saveEquipamento(@RequestBody Equipamento equipamento) {
		return this.equipRep.save(equipamento);
	}
	
	@RequestMapping(value="/api/equipamento/{id}", method=RequestMethod.GET)
	public Equipamento getById(@PathVariable("id") String id){
		return this.equipRep.findById(id).orElse(null);
	}
	
	@RequestMapping(value="/api/equipamento/{id}/sn", method=RequestMethod.GET)
	public Equipamento getBySN(@PathVariable("id") String id){
		return this.equipRep.findByNumeroSerie(id);
	}
	
	@RequestMapping(value="/api/equipamento/{id}", method=RequestMethod.DELETE)
	public void deleteEquip(@PathVariable("id") String id){
		Chamado resp = new Chamado();
		try {
			resp = this.chamadoR.findByEquipamentoId(id);
		} catch (Exception e) {
			System.out.println("Error: "+e);
		} 
		
		if (resp == null) {
			this.equipRep.deleteById(id);
		}
	}
	
}
