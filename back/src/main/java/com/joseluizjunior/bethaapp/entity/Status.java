package com.joseluizjunior.bethaapp.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Status {

	@Id
	private String id;
	
	private String nome;
	
	private String descricao;
	
	private boolean isPersonalisado;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public boolean isPersonalisado() {
		return isPersonalisado;
	}

	public void setPersonalisado(boolean isPersonalisado) {
		this.isPersonalisado = isPersonalisado;
	}
	
	
	
	
}
