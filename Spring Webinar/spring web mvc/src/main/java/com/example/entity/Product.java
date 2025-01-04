package com.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products") /* Digo que esta clase será la tabla "products" */
public class Product {

//    Realmente es cómo un objeto normal en java con su constructor getters y setter y toString

    /* Todas las clases a ingresar a base de datos van a tener una primary key */
    @Id /* Identifica ID */
    @GeneratedValue(strategy = GenerationType.IDENTITY) /* Genera id autoincrementable */
    private Long id;

    private String title;

    private Double price;

    private Integer quantity;

    public Product() {
    }

    public Product(Long id, String title, Double price, Integer quantity) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                '}';
    }
}
