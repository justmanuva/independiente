package com.example.primary;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Primary //Indica que este bean es el primero que se inyecta
@Service
public class CustomerBServiceImpl implements CustomerService{
    @Override
    public String hello() {
        return "Hello from Customer B";
    }
}
