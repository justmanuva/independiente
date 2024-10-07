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


//Arrays y sus métodos.

let numeros = ["pedro", "maría", "jorge"];

//Elimina último cajon y lo muestra
let resultado = numeros.pop();
//Elimina primer cajón y lo muestra
resultado = numeros.shift();
//Añade juancito al array
resultado = numeros.push("juancito");
//Ordena el array al revés
resultado = numeros.reverse();
//Agrega al principo
numeros.unshift(0,1,2);
//Ordena el array alfabéticamente
numeros.sort();
//A partir de la posicion 1, borra 3 elementos y añade "roberto"
numeros.splice(1,3,"roberto");
//Pasa el array a cadena de texto, con param nos separa cada elemto con lo ingresado
resultado = numeros.join("<br>elemento: ");
// document.write("elemento: "+resultado)
//Devuelve el array de la posicion 0 a la 2 sin contar el 2
// resultado = numeros.slice(0,2);


let numeros2 = ["abecedario", "manzana", "pedro", "dedo", "bobo", "pedro"];

//Utiliza la función flecha como bucle para que en cada vuelta se haga lo indicado
resultado = numeros2.filter(numero => numero.length > 5);
document.write(resultado);

