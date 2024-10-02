//Cadenas y sus métodos.

let cadena = "cadena de prueba";
let cadena2 = " cadena 2";

//Concatena
cadena.concat(cadena2);

//Boolean si empieza con param
cadena.startsWith(cadena2);
//Boolean si termina con param
cadena.endsWith(cadena2);
//Boolean si incluye param
cadena.includes(cadena2);
//int de posición de param
cadena.indexOf("prueba");
//int de posición de ultima vez que sale param
cadena.lastIndexOf("prueba");

//Rellena hasta que haya 10 posiciones con "1" delante
cadena.padStart(10,"1");
//Rellena hasta que haya 10 posiciones con "1" atrás
cadena.padEnd(10,"1");
//Devuelve la cadena repetida 10 veces
cadena.repeat(10);

//Divide la cadena y corta por " " y te devuelve un array
cadena.split(" ");
//Devuelve cadena desde la posicion 0 hasta las 2
cadena.substring(0,2);
//Todo a minuscula
cadena.toLowerCase(cadena);
//Todo a mayúscula
cadena.toUpperCase(cadena);
//Lo pasa a String
cadena.toString();
//Quita los espacios de la cadena
cadena.trim();
cadena.trimStart();
cadena.trimEnd();

document.write(resultado);


//Arrays y sus métodos.