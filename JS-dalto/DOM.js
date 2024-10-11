/**
 * DOM: Document Object Model
 * 
 * 	Nodo: Cualquier etiqueta del HTML ej: <p> o <body>
 * 
 * 	- Document: Nodo document es el raíz, de él derivan otros nodos
 * 	- Element: Etiquetas HTML
 * 	- Text: El texto de dentro de un nodo ej: <p>Hola</p>
 * 	- Comentarios y otros: Los comentarios también son un tipo de nodo
 */ 

//FUNCIONES DE DOM

//Selección de ELEMENTOS

// Seleccionar elemento por ID
// porId = document.getElementById("parrafo");
// document.write(porId);
// //Selecciona por tipo de elementos
// porTag = document.getElementsByTagName("p");
// document.write(porTag);
// //Selecciona en query como le indiquemos (clase/ID...)
// porClaseQuery = document.querySelector(".parrafo");
// porIdQuery = document.querySelector("#rancio");
// //Selecciona todos los nodos de la indicación, ya que se hace un array
// porClaseQuery = document.querySelectorAll(".parrafo");
// document.write(porClaseQuery[1])

//Definir, Obtener y Elminiar Valores

// const rangoEtario = document.querySelector(".rangoEtario");

// //Cambia un atributo (en el param1 pon param2)
// rangoEtario.setAttribute("type","range");
// //Obtiene contenido del atributo
// document.write(rangoEtario.getAttribute("type"));
// //Borrar el valor del atributo
// document.write(rangoEtario.removeAttribute("type"));

//Atributos comunes de HTML

// const titulo = document.querySelector(".titulo");
// //contentEditable para cambiar el contenido.
// titulo.setAttribute("contentEditable","true");
// //Cambiar la dirección de la escritura (LeftToRight (lft), RightToLeft (rtl))
// titulo.setAttribute("dir","ltr");
// //Ocultar/desocultar elemento
// // titulo.setAttribute("hidden","false");
// //Para poder hacer focus a un elemento
// titulo.setAttribute("tabindex","0");
// //Cambia el title (nombre que sale al pasar el raton por encima de un elemento)
// titulo.setAttribute("title","jajajaja xd");

//Seleccionar nombre de clase por atributos

const input = document.querySelector(".input-normal");
// document.write(input.className)
// //Seleccionar valor del nodo
// document.write(input.value);
// //Cambiar tipo por atributo
// input.type = "color";
//Solo vale el archivo indicado para el input "file"
// input.accept = "image/png";
//Cambiar el minlength
input.minLength = 4;
//Modifica el placeholder
input.placeholder = "a que no me podes escribir";
//Modifica required
input.required = " ";

const titulo = document.querySelector(".titulo");

titulo.style.color = "red"