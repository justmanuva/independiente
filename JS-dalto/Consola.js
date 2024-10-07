// FUNCIONES DE REGISTRO

//Si es falso te sale error
console.assert(5 < 4);
//Limpia la consola
console.clear;
//Te imprime un error
console.error("Che capo , qué hiciste?")
//Mensaje informativo
console.info("Che muy bien tu trabajo eh, pero eso ya no se usa mas");
//Muestra un mensaje
console.log("Hola mundo");
//Inserta array/objeto y lo muestra como tabla
console.table([5,2,2,3,1,3]);
//Error advertencia
console.warn("che capo, venis bien, pero cuidado porque...");
//Muestra información de forma distinta (util para arrays)
console.dir([5,1,2,3,4,5,6,7]);


//FUNCIONES DE CONTEO

//Cuenta las veces que use lo indicado
console.count();
console.countReset(); //Resetea el conteo


//FUNCIONES DE AGRUPACIÓN

//Crea un grupo de código en la consola
console.group("Frutas");
console.groupEnd(); //Se elimina el grupo
console.groupCollapsed(); //console.group pero lo muestra cerrado


//FUNCIONES DE TEMPORIZACIÓN

//Empieza un temporizador
console.time();
console.timeLog(); //Muestra el tiempo del temporizador creado
console.timeEnd(); //Termina el temporizador

//Modificar estilo del texto
console.log("%crancio", "color:red;background:black;padding:20px 100px;border: 3px solid blue;");
