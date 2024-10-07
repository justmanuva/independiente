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

//Seleccionar elemento por ID
porId = document.getElementById("parrafo");
document.write(porId);
//Selecciona por tipo de elementos
porTag = document.getElementsByTagName("p");
document.write(porTag);