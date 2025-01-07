package com.openwebinars.ioc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class App02 {

	public static void main(String[] args) {

		// Con FileSystemXmlApplicationContext podemos acceder al .xml de fuera de nuestra ruta
		ApplicationContext appContext = new FileSystemXmlApplicationContext("beans02.xml");
		
		
		((FileSystemXmlApplicationContext) appContext).close();

	}

}
