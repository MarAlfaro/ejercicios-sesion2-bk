/*Dado un objeto que representa una lista de compras con elementos y cantidades,
 genera una lista legible para el usuario mostrando cada elemento y su cantidad. */

let listaCompras = {
    "Manzanas": 5,
    "Platanos": 3,
    "Elotes": 2,
    "Pan": 1
}

function generarListaCompras(listaCompras){
    let listaLegible = "Lista de compras: \n"

    for(let elemento in listaCompras){
        listaLegible += `${elemento} : ${listaCompras[elemento]} unidades \n`
    }

    return listaLegible
}

let listaLegible = generarListaCompras(listaCompras)
console.log(listaLegible)