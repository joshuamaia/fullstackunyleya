package com.joshua.ecomerce.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joshua.ecomerce.domain.Produto;

public interface ProdutoRepository extends MongoRepository<Produto, String>{

}
