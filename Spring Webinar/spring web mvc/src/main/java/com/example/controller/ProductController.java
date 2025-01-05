package com.example.controller;

import org.springframework.ui.Model;
import com.example.entity.Product;
import com.example.repository.ProductRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/products") /* Indico que el controlador va a escuchar a "/products" */
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
        model.addAttribute("products", products);
        return "product-list";
    }

    /*
    GET http://localhost:8081/products/new
    */
    @GetMapping("/new") /* GET del nuevo producto*/
    public String getForm(Model model) {
        model.addAttribute("products", new Product());
        return "product-form";
    }

    /*
    POST http://localhost:8081/products
    */
    @PostMapping/* Todo esto es el método "POST", almaceno el producto cuando lo inserte el usuario */
    public String save(@ModelAttribute("product") Product product) {
        this.repository.save(product);
        return "redirect:/products";
    }

    /*
    GET http://localhost:8081/products/{id}/view
    */

    /*
    GET http://localhost:8081/products/{id}/edit
    */

    /*
    GET http://localhost:8081/products{id}/delete
    */

    /*
    GET http://localhost:8081/products/delete/all
    */


}
