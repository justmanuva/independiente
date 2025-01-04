package com.example;

import com.example.controller.EmployeeController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.example","com.example2"}) /* Para que escanee las beans de esos 2 paquetes (no solo del que ya estamos) */
public class App {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(App.class, args);

        var employeeController = context.getBean(EmployeeController.class);
        System.out.println(employeeController.helloFromEmployeeService());
        System.out.println(employeeController.helloFromCustomerService());
    }

}
