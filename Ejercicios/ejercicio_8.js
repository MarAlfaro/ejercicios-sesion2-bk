/**Crea una función que valide si un objeto tiene todas las propiedades requeridas,
 como nombre, dirección y teléfono. */

function validarObjeto(objeto){
    const propiedades = ['nombre', 'direccion', 'telefono']
    for(let propiedad of propiedades){
        if (objeto.hasOwnProperty(propiedad)) {
            let mjs = "Objeto Aprobado"
            return mjs;
        }else{
            let mjs = "Objeto no Aprobado"
            return mjs;
        }
    }
    
}

let cliente = {nombre:"William", direccion: "San Miguel", telefono: 78222727}
console.log(validarObjeto(cliente))