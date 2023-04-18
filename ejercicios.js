// 1. Crea un Array con al menos 5 elementos (pueden ser números, cadenas de texto, booleanos, etc.). Luego, utiliza un bucle para recorrer e imprimir cada elemento del Array en la consola.

/* const nombres = ["Juan", "Jose", "María", "Sandra", "Luisa"];

for (let arrayPosition = 0; arrayPosition < nombres.length; arrayPosition++) {
    console.log("Accediendo al elemento en la posición: ", arrayPosition);
    const elementoActual = nombres[arrayPosition];
    console.log(elementoActual);
} */

// 2. Crea un Array que contenga 10 números. Escribe un programa que sume todos los números en el Array y muestre el resultado en la consola. Utiliza un bucle para recorrer el Array y realizar la suma.

/* const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let suma = 0;
console.log('Array de numeros:', numeros);
console.log('Suma:', suma);

for (let arrayPosition = 0; arrayPosition < numeros.length; arrayPosition++) {
    console.log('Posición actual:', arrayPosition);
    console.log('Elemento que vamos a sumar:', numeros[arrayPosition]);

    console.log('Suma a realizar:', suma, '+', numeros[arrayPosition], '=', suma + numeros[arrayPosition]);

    suma += numeros[arrayPosition];
} */

// 3. Crea un Array bidimensional (un Array que contiene otros Arrays) con 3 filas y 3 columnas, es decir, un total de 9 elementos en forma de matriz 3x3. Llena la matriz con números enteros y luego utiliza bucles anidados for para recorrer e imprimir los elementos de la matriz.

/* const arrayBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arrayBidimensional);

for (let punteroFila = 0; punteroFila < arrayBidimensional.length; punteroFila++) {
    const filaActual = arrayBidimensional[punteroFila];

    console.log('Accediendo a la fila:', punteroFila);
    console.log('Fila:', filaActual);

    for (let punteroColumna = 0; punteroColumna < filaActual.length; punteroColumna++) {
        console.log('Accediendo a la columna:', punteroColumna);
        const valor = filaActual[punteroColumna];
        console.log('Elemento actual', valor);
    }
} */


// Traza de ejemplo de una ejecución de .map

/* function porDos(numero) {
    return numero * 2;
}

const numerosPorDos = [1, 2, 3].map(porDos); */

/*
    Elemento: 1
    porDos(1) -> 2
   [2]

   Elemento: 2
   porDos(2) -> 4
  [2, 4]

  Elemento: 3
  porDos(3) -> 6
  [2, 4, 6]
*/


// Escribe una función que encuentre el número mayor y menor en un Array de números.

/* function encontrarMayorYMenor(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let puntero = 0; puntero < numeros.length; puntero++) {
        const numeroActual = numeros[puntero];

        if (numeroActual > mayor) {
            mayor = numeroActual;
        }

        if (numeroActual < menor) {
            menor = numeroActual;
        }
    }

    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}

encontrarMayorYMenor([20, 5, 10, 55, 2]); */


// 2. Crea una función que elimine los elementos duplicados de un Array

/* function eliminarDuplicados(array) {
    const nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        const elementoActual = array[i];

        if (!nuevoArray.includes(elementoActual)) {
            nuevoArray.push(elementoActual);
        }
    }

    return nuevoArray;
}

console.log(eliminarDuplicados([1, 2, 3, 2, 4, 1, 2, 5]));
console.log(eliminarDuplicados(["hola", "adios", "hola", "gracias"]));
console.log(eliminarDuplicados(["hola", "adios", 2, 10, "hola", "gracias", 2, 8]));
 */


// 1. Dado el siguiente array de números, extrae un subarray con los elementos: 30, 40, 50.

/* const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const subarray = numbers.slice(2, 5);
console.log(subarray); */


// 2. Dado el siguiente array de nombres, elimina los elementos "Bob" y "Charlie" y devuelve el subarray eliminado.

/* const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const eliminados = names.splice(1, 2);

console.log('Elementos eliminados', eliminados);
console.log('Resultado final', names); */

// 3. Dado el siguiente array de letras, reemplaza los elementos "d" y "e" por las letras "X" y "Y”.

/* const letters = ["a", "b", "c", "d", "e", "f", "g"];
const eliminados = letters.splice(3, 2, "X", "Y");

console.log('Elementos eliminados', eliminados);
console.log('Resultado final', letters); */

// 4. Dado el siguiente array de números, copia los elementos  1 y 2 en la posición 3 del array usando el método .copyWithin.

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.copyWithin(3, 0, 2);

console.log('Resultado final', numbers); */

// 5. Dado el siguiente array de palabras, reemplaza las palabras "banana", "cherry" y "date" con la palabra "OK".

/* const words = ["apple", "banana", "cherry", "date", "fig", "grape"];
words.fill("OK", 1, 4);

console.log('Resultado final', words); */

// 6. Dado el siguiente array de números, inserta el subarray [4, 5, 6] entre las posiciones 2 y 3 sin modificar el array original.

/* const numbers = [1, 2, 3, 7, 8, 9];

const inicio = numbers.slice(0, 3); // 1, 2, 3
const fin = numbers.slice(3, 6); // 7, 8, 9

const resultado = inicio.concat(4, 5, 6).concat(fin); // 1, 2, 3, 4, 5, 6, 7, 8, 9
console.log('Resultado final', resultado);
console.log(numbers); */
