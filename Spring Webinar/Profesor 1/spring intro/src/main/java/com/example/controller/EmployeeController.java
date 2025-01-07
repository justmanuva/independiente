package com.example.controller;

import com.example.primary.CustomerService;
import com.example.service.EmployeeService;
import com.example2.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller // Para declarar un bean básicamente
public class EmployeeController {

//    @Autowired
    private EmployeeService employeeService;

//    @Autowired
    private CustomerService customerService;

//    @Autowired
    private HelloService helloService;

    /* Otra opción es @Qualifier("CustomerBServiceImpl"); */

    /* Para ahorrarte @Autowired en cada objeto se utiliza el constructor e inserta automáticamente los beans */
    public EmployeeController(EmployeeService employeeService, CustomerService customerService, HelloService helloService) {
        this.employeeService = employeeService;
        this.customerService = customerService;
        this.helloService = helloService;
    }

    public String helloFromEmployeeService() {
        return this.employeeService.hello();
    }

    public String helloFromCustomerService() {
        return this.customerService.hello();
    }
}
