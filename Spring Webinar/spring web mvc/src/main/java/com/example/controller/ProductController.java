package com.example.controller;

import org.springframework.ui.Model;
import com.example.entity.Product;
import com.example.repository.ProductRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/products") /* Indico que el controllador va a escuchar a "/products" */
public class ProductController {

    private ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    /*
    GET http://localhost:8081/products
    */
    @GetMapping /* Con esto cuando entremos a la URL de arriba accederemos a este método */
    public String findAll(Model model) { /* El model es objeto que nos da Spring */

        List<Product> products = this.repository.findAll();

        /* Rellenamos el model con datos (normalmente de BD) */
        model.addAttribute("product", products);
        return "product-list";
    }
}
