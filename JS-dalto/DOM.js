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

// const input = document.querySelector(".input-normal");
// document.write(input.className)
// //Seleccionar valor del nodo
// document.write(input.value);
// //Cambiar tipo por atributo
// input.type = "color";
//Solo vale el archivo indicado para el input "file"
// input.accept = "image/png";
//Cambiar el minlength
// input.minLength = 4;
//Modifica el placeholder
// input.placeholder = "a que no me podes escribir";
//Modifica required
// input.required = " ";

// const titulo = document.querySelector(".titulo");

//Editar propiedades CSS
// titulo.style.padding = "30px";
// titulo.style.backgroundColor = "#48e";

//Agrega/borra una clase
// titulo.classList.add("grande");
// titulo.classList.remove("grande");

// //Muestra la primera clase de nuestro elemento
// titulo.classList.item(0);

// //Boolean si la contiene
// titulo.classList.contains("grande");

// //Si la tiene LA QUITA, si no LA AÑADE
// titulo.classList.toggle("grande");
// //La agrega pase lo que pase
// titulo.classList.toggle("grande", true);

// //Reeplaza "grande" por "chico"
// titulo.classList.replace("grande", "chico");

//Nos devuelve el texto html (pero NO las etiquetas de formato del texto)
// titulo.textContent;
// // Solo lo devuelve si es VISIBLE
// titulo.innerText;
// // Lo muestra con el formato
// titulo.innerHTML;
// // Muestra los datos de toda la etiqueta
// titulo.outerHTML;

const contenedor = document.querySelector(".contenedor");

//Crea item, en MAYUSCULA con createElement
// const item = document.createElement("LI");

//Crea un nodo objeto
// const textDelItem = document.createTextNode("Este es un item de la lista");

//Introducir un elemento dentro de otro
// item.appendChild(textDelItem);

const fragmento = document.createDocumentFragment();

//Manera muy optimizada de añadir recursos en bucle (utilizando FRAGMENT)
for (let i = 0; i < 20; i++) {
	const item = document.createElement("LI");
	item.innerHTML = "Este es un item de la lista";
	fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);