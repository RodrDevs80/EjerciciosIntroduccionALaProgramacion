/**Ejercicio 1: Calcular el promedio de un array de números
Crea una función que tome como argumento un array de números y devuelva el promedio de 
todos los elementos del array. La función debe validar que el array no esté vacío y, en caso de 
estarlo, mostrar un mensaje de error. */

const numeros = [43, 12, 78, 65, 9, 56, 34, 8, 1, 2, 93, 7, 4, 53, 21, 62, 89, 37, 100, 58, 47, 19, 30];
const numeros2 = [];
const numeros3 = [43, 12, 78, '34', 9, 56, 34, 8, 1, 2, 93, 7, 4, 53, 21, 62, 89, 37, 100, 58, 47, 19, 30];
const numeros4 = ['uno', 'dos', 'casa', 1, 6, 8];

const calcularPromedio = (arregloDeNumeros) => {
    if (arregloDeNumeros.length == 0) {
        return 'ERROR: el arreglo de números esta vacío ❌📭'
    }
    for (let i = 0; i < arregloDeNumeros.length; i++) {
        if (typeof arregloDeNumeros[i] != 'number') {
            return 'ERROR: el arreglo tiene algún elemento que no es un numero ❌📭'
        }
    }

    const suma = arregloDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return (suma / arregloDeNumeros.length).toFixed(2);
}
console.log('****************************');
const resultado = calcularPromedio(numeros);
console.log(resultado);
console.log('****************************');
const resultado2 = calcularPromedio(numeros2);
console.log(resultado2);
console.log('****************************');
const resultado3 = calcularPromedio(numeros3);
console.log(resultado3);
console.log('****************************');
const resultado4 = calcularPromedio(numeros4);
console.log(resultado4);