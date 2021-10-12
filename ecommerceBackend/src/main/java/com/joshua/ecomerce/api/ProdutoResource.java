package com.joshua.ecomerce.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joshua.ecomerce.domain.Produto;
import com.joshua.ecomerce.service.ProdutoService;

@RequestMapping(path = "produto")
@RestController
public class ProdutoResource {

	@Autowired
	ProdutoService service;

	@GetMapping( "/all" )
	public Iterable<Produto> get() {
		return service.findAll();
	}

	@PostMapping
	public Produto post(@RequestBody Produto body) {
		return service.save(body);
	}

	@PutMapping
	public Produto put(@RequestBody Produto body) {
		return service.save(body);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable String id) {
		service.delete(id);
	}
	
	@GetMapping("/{id}")
	public Produto get(@PathVariable String id) {
		return service.findById(id);
	}
	
}
