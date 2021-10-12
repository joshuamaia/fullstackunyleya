package com.joshua.ecomerce.service;

import java.util.List;

public interface BaseService<T, ID> {

	T save(T t);
	
	void delete(ID id);
	
	List<T> findAll();
	
	T findById(ID id);
	
}
