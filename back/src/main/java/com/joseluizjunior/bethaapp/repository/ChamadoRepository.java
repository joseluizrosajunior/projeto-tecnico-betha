package com.joseluizjunior.bethaapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joseluizjunior.bethaapp.entity.Chamado;
import com.joseluizjunior.bethaapp.entity.HistoricoChamado;
import com.joseluizjunior.bethaapp.entity.Usuario;

public interface ChamadoRepository extends MongoRepository<Chamado, String>{

	List<Chamado> findByResponsavel(Usuario user);
	
	Chamado findByEquipamentoId(String id);
	
	List<Chamado> findByResponsavelIdAndStatusId(String responsavelId, String StatusId);
	
	List<Chamado> findByResponsavelId(String responsavelId);
	
	List<Chamado> findByStatusId(String statusId);
	
	
}
