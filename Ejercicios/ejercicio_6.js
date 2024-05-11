/*Crea una función que reciba un arreglo de objetos
 con propiedades como nombre, edad y género, y busque un objeto 
 específico por nombre.*/

let personas = [
    {nombre: "Sergio", edad: 33, genero: "Masculino"},
    {nombre: "Martha", edad: 35, genero: "Femenino"},
    {nombre: "Josue", edad: 50, genero: "Masculino"},
    {nombre: "Sonia", edad: 25, genero: "Femenino"},
];

function buscarPorNombre(arrayPersona, nombre){
    return arrayPersona.find(objeto => objeto.nombre === nombre);
 // do something
};

let personaBuscada = buscarPorNombre(personas, "Martha");
console.log(personaBuscada);