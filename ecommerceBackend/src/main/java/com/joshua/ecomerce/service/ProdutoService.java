package com.joshua.ecomerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joshua.ecomerce.domain.Produto;
import com.joshua.ecomerce.repository.ProdutoRepository;

@Service
public class ProdutoService implements BaseService<Produto, String> {
	
	@Autowired
	ProdutoRepository produtoRepository;

	@Override
	public Produto save(Produto t) {
		return produtoRepository.save(t);
	}

	@Override
	public void delete(String id) {
		produtoRepository.deleteById(id);		
	}

	@Override
	public List<Produto> findAll() {
		return produtoRepository.findAll();
	}

	@Override
	public Produto findById(String id) {
		return produtoRepository.findById(id).orElseThrow();
	}

}
