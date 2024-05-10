/**Ejercicio 3: Calculadora básica.
Crea una función que capture interacción con teclado, para solicitar al usuario dos números y un 
operador matemático (+, -, *, /). La función debe validar que los números ingresados sean válidos 
(números) y el operador sea uno de los permitidos. Luego, debe realizar la operación matemática 
correspondiente y mostrar el resultado utilizando la función adecuada */
//variables
let numero1 = 0;
let numero2 = 0;
let valido;

//funciones
function sumar(n1, n2) {
    return n1 + n2;
}
function multiplicar(n1, n2) {
    return n1 * n2;
}
function dividir(n1, n2) {
    return n1 / n2;
}
function restar(n1, n2) {
    if (n1 < n2) {
        return 'Error:El minuendo es menor que el sustraendo!';
    }
    return n1 - n2;
}
function calculadora(n1, n2, operacion) {
    let resultado = 0;
    switch (operacion) {
        case '+':
            resultado = sumar(n1, n2);
            alert(`El Resultado de la suma es ${resultado}`);
            break;
        case '-':
            resultado = restar(n1, n2);

            typeof resultado === 'string' ? alert(resultado) : alert(`El Resultado de la resta es ${resultado}`);
            break;
        case '*':
            resultado = multiplicar(n1, n2);
            alert(`El Resultado de la multiplicación es ${resultado.toFixed(2)}`);
            break;
        case '/':
            resultado = dividir(n1, n2);
            alert(`El Resultado de la division es ${resultado.toFixed(2)}`);
            break;
        default:
            alert('Se ingreso una opción no valida!')
            break;
    }
}
const realizarNuevaOperacion = () => {
    if (confirm('¿Desea Realizar otra operación?')) {
        location.reload();
    } else {
        alert('Gracias por usar nuestro servicio!👋');
    }
}


//Main-> ejecución del programa
do {
    numero1 = prompt('Ingrese el 1° numero: 🔢');
    numero2 = prompt('Ingrese el 2° numero: 🔢');
    if (isNaN(numero1) || isNaN(numero2) || numero1 == '' || numero2 == '') {
        valido = true;
        alert('Alguno de los datos ingresados no es valido! 🚨\nIngrese números!🔢');
    } else {
        valido = false;
    }
    //si son validos los paso a números
    numero1 = Number(numero1);
    numero2 = Number(numero2);
} while (valido);

const opcion = prompt(`***Opciones de Operaciones***⚙\n1️⃣.Suma->ingrese:"+"\n2️⃣.Resta->ingrese:"-"\n3️⃣.Multiplicación->ingrese:"*" \n4️⃣.Division->ingrese:"/"\n Elija una opción : ✔`);
calculadora(numero1, numero2, opcion);

realizarNuevaOperacion();