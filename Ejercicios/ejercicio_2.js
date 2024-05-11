/*Define un objeto que represente un producto con propiedades 
como nombre, precio y cantidad. Luego, calcula el costo total multiplicando el 
precio por la cantidad para varios productos y sumando los resultados.*/

let productoA = {
    nombre: "Camisa",
    precio: 25,
    cantidad: 5
};

let productoB = {
    nombre: "Jeans",
    precio: 40,
    cantidad: 3
};

let costoTotalProductoA = productoA.precio * productoA.cantidad;
let costoTotalProductoB = productoB.precio * productoB.cantidad;

let costoTotal = costoTotalProductoA + costoTotalProductoB;
console.log(costoTotalProductoA);
console.log(costoTotalProductoB);
console.log("total $" + costoTotal);

