package com.example.repository;

import com.example.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository /* Para declarar repositorio que hereda de JpaRepository*/
public interface ProductRepository extends JpaRepository<Product, Long> {

}
