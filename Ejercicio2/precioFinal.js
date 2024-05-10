/**Ejercicio 2: Precio final, teniendo en cuenta el costo y el IVA.
Imagina que tienes una tienda y necesitas calcular el precio final de venta de tus productos, 
incluyendo el precio de costo y el Impuesto al Valor Agregado (IVA). Para ello, necesitas crear una 
función que reciba como parámetros el precio de costo del producto y el porcentaje de IVA, y que 
retorne el precio final redondeado a dos decimales */

//version 0.1 variables
console.log('***Version 0.1****');
const precioDeCostoProducto = 100;
const porcentajeIVA = 21;
const precio = 0;
const precioFinal = (precioDeCostoProducto, porcentajeIVA) => {
    if (precioDeCostoProducto == null || precioDeCostoProducto == undefined || typeof precioDeCostoProducto != 'number' || precioDeCostoProducto == 0) {
        return 'ERROR: se ingreso un costo de producto invalido!🚨'
    }
    if (porcentajeIVA == null || porcentajeIVA == undefined || typeof porcentajeIVA != 'number') {
        return 'ERROR: se ingreso un porcentaje de IVA invalido!🚨'
    }
    const iva = precioDeCostoProducto * (porcentajeIVA / 100);
    const precioMasIva = precioDeCostoProducto + iva;
    return `\nCosto del Producto: 💲${precioDeCostoProducto}\nIVA:💲${iva}\nPrecio Final: 💲${precioMasIva.toFixed(2)}💰`;
}
//pruebas de escritorio
console.log(precioFinal(precioDeCostoProducto, porcentajeIVA));
console.log('*******************************************');
console.log(precioFinal('234', porcentajeIVA));
console.log('*******************************************');
console.log(precioFinal(precio, porcentajeIVA));
console.log('*******************************************');
console.log(precioFinal(precioDeCostoProducto, 0));
//version 0.1.1 objeto producto
console.log('***Version 0.1.1***');
const producto = {
    id: 125,
    nombre: 'pantalla LG',
    precioDeCosto: 15456,
    porcentajeImpuesto: 21
}
// const { precioDeCosto, porcentajeImpuesto } = producto;
// console.log(precioDeCosto);
// console.log(porcentajeImpuesto);

const precioFinalObj = (objetoProducto) => {
    //verifico si el objeto esta vacío
    if (Object.keys(objetoProducto).length === 0) {
        return 'ERROR: se ingreso un objeto producto vacío!🚨';
    }
    //verifico que existan las propiedades en el objeto
    const tienePrecioDeCosto = "precioDeCosto" in objetoProducto;
    const tienePorcentajeDeImpuesto = "porcentajeImpuesto" in objetoProducto;
    if (!tienePrecioDeCosto) {
        return 'ERROR: el objeto producto no tiene el atributo precio de costo!🚨';
    }
    if (!tienePorcentajeDeImpuesto) {
        return 'ERROR: el objeto producto no tiene el atributo porcentaje de impuesto!🚨';
    }
    //desestructurando objeto
    const { precioDeCosto, porcentajeImpuesto } = objetoProducto;

    if (precioDeCosto == null || precioDeCosto == undefined || typeof precioDeCosto != 'number' || precioDeCosto == 0) {
        return 'ERROR: se ingreso un costo de producto invalido!🚨';
    }
    if (porcentajeImpuesto == null || porcentajeImpuesto == undefined || typeof porcentajeImpuesto != 'number') {
        return 'ERROR: se ingreso un porcentaje de impuesto invalido!🚨';
    }
    const iva = precioDeCosto * (porcentajeImpuesto / 100);
    const precioMasIva = precioDeCosto + iva;
    return `\nCosto del Producto: 💲${precioDeCosto.toFixed(2)}\nIVA:💲${iva.toFixed(2)}\nPrecio Final: 💲${precioMasIva.toFixed(2)}💰`;
}
const vacio = {
}
const productoIncompleto = {
    id: 345,
    nombre: 'limpiador'
}
const productoDatosError = {
    id: 345,
    nombre: 'limpiador',
    precioDeCosto: '234524',
    porcentajeImpuesto: 21
}
const productoDatosError2 = {
    id: 345,
    nombre: 'limpiador',
    precioDeCosto: 234524,
    porcentajeImpuesto: null
}
//pruebas de escritorio
console.log(precioFinalObj(producto));
console.log('*************');
console.log(precioFinalObj(vacio));
console.log('*************');
console.log(precioFinalObj(productoIncompleto));
console.log('*************');
console.log(precioFinalObj(productoDatosError));
console.log('*************');
console.log(precioFinalObj(productoDatosError2));