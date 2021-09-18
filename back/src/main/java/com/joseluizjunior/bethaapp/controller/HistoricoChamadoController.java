package com.joseluizjunior.bethaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.joseluizjunior.bethaapp.entity.HistoricoChamado;
import com.joseluizjunior.bethaapp.repository.HistoricoChamadoRepository;

@RestController
public class HistoricoChamadoController {
	
	@Autowired
	HistoricoChamadoRepository hcr;
	
	@RequestMapping(value="/api/historico", method=RequestMethod.POST)
	public HistoricoChamado saveHistorico(@RequestBody HistoricoChamado hc) {
		
		return this.hcr.save(hc);
	}
	
	@RequestMapping(value="/api/historico/{id}", method=RequestMethod.GET)
	public List<HistoricoChamado> listAll(@PathVariable("id") String id){
		return this.hcr.findByChamadoId(id);
	}

}
