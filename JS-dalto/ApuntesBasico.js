//MAPA
let pc = {
	nombre: "DaltoPC",
	procesador: "Intel Core I7",
	ram: "16GB",
	espacio: "1TB"
}

document.write(pc["ram"] + "<br>");

for (let i = 0; i < 6; i++){
	document.write(i + "<br>")
}

document.write("<br>");
let animales = ["gato", "perro", "tiranosaurio rex"];

//for in: devuelve la posicion en la que se encuentra
for (animal in animales){
	document.write(animal + "<br>");
}
document.write("<br>");

//for of: devuelve el elemento del array
for (animal of animales){
	document.write(animal + "<br>");
}


array1 = ["María","Josefa","Roberta"];
array2 = ["Pedro","Marcelo",array1];

//Label: nombro al "for" para diferenciarlo del otro
forGrande:
for (let array in array2){
	if (array == 2){
		for (let array of array1){
			document.write(array + "<br>");
			break forGrande;
		}
	} else {
		document.write(array2[array] + "<br>");
	}
}

document.write("<br>");

//Funciones
function suma(num1,num2){
	let res = num1 + num2;
	return res;
}

let resultado = suma(20,25);
document.write(resultado + "<br>");

document.write("<br>");

//Distintas formas de crearlas
const saludar1 = function(nombre){
	let frase = `¡Hola ${nombre}! ¿Como estas?`;
	document.write(frase);
}
saludar1("pedro");

//Funciones flecha
const saludar2 = (nombre)=>{
	let frase = `¡Hola ${nombre}! ¿Como estas?`;
	document.write(frase);
}
saludar2("pedro");

//Si tengo solo 1 param y 1 linea de codigo:
const saludar3 = nombre => document.write(nombre);
saludar3("Manuel");