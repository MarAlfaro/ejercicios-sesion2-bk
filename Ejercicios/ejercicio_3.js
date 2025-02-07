/*Toma un arreglo de objetos que representen personas
 con propiedades como nombre, edad y ciudad, y filtra las personas mayores de 30 años que viven en una ciudad específica.*/

let personas = [
    {nombre: "Sergio", edad: 33, ciudad: "San Salvador"},
    {nombre: "Martha", edad: 35, ciudad: "San Salvador"},
    {nombre: "Marleni", edad: 50, ciudad: "Santa Tecla"},
    {nombre: "Sonia", edad: 25, ciudad: "San Miguel"},
];

function filtrarPersonas(personaObjeto, ciudad){
    return personaObjeto.filter(persona => persona.edad > 30 && persona.ciudad === ciudad);
}

let personasFiltradas = filtrarPersonas(personas, "Santa Tecla");
console.log(personasFiltradas);