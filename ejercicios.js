/* Crea una página HTML con un párrafo que tenga un ID. Escribe un script de JavaScript que utilice getElementById para seleccionar el párrafo y cambiar su contenido a "¡Hola, mundo!". */

/* const elementoSaludo = document.getElementById('saludo');
elementoSaludo.textContent = '¡Hola, mundo!'; */

/* Crea una página HTML con una lista no ordenada (ul) que contenga varios elementos de lista (li). Algunos de estos elementos deben tener una clase llamada "destacado". Escribe un script de JavaScript que utilice getElementsByClassName para seleccionar todos los elementos con la clase "destacado" y cambiar su estilo (por ejemplo, cambiar el color de fondo a amarillo). */

/* const elementosDestacados = document.getElementsByClassName('destacado');

for (let i = 0; i < elementosDestacados.length; i++) {
    elementosDestacados[i].style = "background-color: yellow;";
} */

/* Escribe un script de JavaScript que utilice getElementsByTagName para contar cuántos elementos de un tipo específico (por ejemplo, p, div, li) hay en la página y muestre el resultado en la consola. */

/* const parrafos = document.getElementsByTagName('p');
console.log('Hay', parrafos.length, 'párrafos.');

const elementosLista = document.getElementsByTagName('li');
console.log('Hay', elementosLista.length, 'elementos de lista.'); */

/* Crea una página HTML con varios elementos de diferentes tipos (por ejemplo, párrafos, encabezados, listas). Escribe un script de JavaScript que utilice querySelector para seleccionar un elemento específico y modificar sus estilos. A continuación, utiliza querySelectorAll para seleccionar un grupo de elementos y modificar sus estilos (por ejemplo, cambiar el tamaño de fuente o el color de fondo). */

const encabezado = document.querySelector('#encabezado-principal');
encabezado.style = 'font-style: italic;';

const elementosListaOrdenada = document.querySelectorAll('ol > li');
for (let i = 0; i < elementosListaOrdenada.length; i++) {
    elementosListaOrdenada[i].style = "background-color: green;";
}