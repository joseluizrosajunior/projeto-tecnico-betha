package com.joseluizjunior.bethaapp.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Chamado {

	@Id
	private String id;
	
	
	@DBRef
	private Equipamento equipamento;
	
	@DBRef
	private Pessoa cliente;
	
	@DBRef
	private Usuario responsavel;
	
	private String defeito;
	
	private String solucao;
	
	private Date dataChamado;
	
	@DBRef
	private Status status;
	
	private Date dataEncerramento;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Equipamento getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(Equipamento equipamento) {
		this.equipamento = equipamento;
	}

	public Pessoa getCliente() {
		return cliente;
	}

	public void setCliente(Pessoa cliente) {
		this.cliente = cliente;
	}

	public Usuario getResponsavel() {
		return responsavel;
	}

	public void setResponsavel(Usuario responsavel) {
		this.responsavel = responsavel;
	}

	public String getDefeito() {
		return defeito;
	}

	public void setDefeito(String defeito) {
		this.defeito = defeito;
	}

	public String getSolucao() {
		return solucao;
	}

	public void setSolucao(String solucao) {
		this.solucao = solucao;
	}

	public Date getDataChamado() {
		return dataChamado;
	}

	public void setDataChamado(Date dataChamado) {
		this.dataChamado = dataChamado;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Date getDataEncerramento() {
		return dataEncerramento;
	}

	public void setDataEncerramento(Date dataEncerramento) {
		this.dataEncerramento = dataEncerramento;
	}

	
	
}
