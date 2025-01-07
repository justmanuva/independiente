package com.openwebinars.beans;

public class Saludator {

    private String mensaje;

    /*public Saludator (String str) {
        this.mensaje = str;
    }*/

    public String saludo() {
        return (mensaje == null) ? "Hola Mundo!!!" : mensaje;
    }

    public void setMensaje(String mensaje) {
    }
}
