package com.example.config;

import com.example.primary.CustomerAServiceImpl;
import com.example.primary.CustomerService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource("classpath:beans.xml")
public class BeansConfig {

    /*
    - Para configurar clases de frameworks externos
    - También te ahorras poner "@Primary" y "@Component" en las otras clases
     */
    @Bean
    public CustomerService customerService() {
        return new CustomerAServiceImpl();
    }

}
