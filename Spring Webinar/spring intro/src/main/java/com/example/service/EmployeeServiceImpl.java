package com.example.service;

import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Override
    public String hello() {
        return "Hello World";
    }
}
