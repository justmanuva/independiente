package com.openwebinars;

import com.openwebinars.beans.EmailService;
import com.openwebinars.beans.IEmailService;
import com.openwebinars.beans.Saludator;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    public static void main(String[] args) {

        //Para detectar el archivo XML no necesariamente en el mismo directorio
        //ApplicationContext appContext = new FileSystemXmlApplicationContext("beans02.xml");
        ApplicationContext appContext = new ClassPathXmlApplicationContext("beans.xml");

        IEmailService emailService1 = appContext.getBean("IEmailService", IEmailService.class);
        emailService1.setDestinatarioPorDefecto("luismi@openwebinars.net")

        //Para detectar el archivo XML
        //((FileSystemXmlApplicationContext) appContext).close();
        ((ClassPathXmlApplicationContext) appContext).close();

    }

}
