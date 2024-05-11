/** Toma dos arreglos de objetos que representen listas de estudiantes y profesores,
  y crea una nueva lista combinada con todos los miembros de la comunidad educativa */

let estudiante = [
  {nombre: "Grecia", edad: 20},
  {nombre: "Luis", edad: 22},
  {nombre: "Anderson", edad: 21}
]

let profesores = [
  {nombre: "Juan", Materia: "Matemáticas"},
  {nombre: "Medardo", Materia: "Lenguaje"},
  {nombre: "Antonio", Materia: "Ciencias"}
]

function combinarObjetos(a,b){
  let comunidadEducativa = [...a, ...b]
  return comunidadEducativa;
}

let comunidad = combinarObjetos(estudiante, profesores);
console.log(comunidad)