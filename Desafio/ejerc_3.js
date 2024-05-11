const persona = {
    nombre: 'Juan',
    peso: 75,
    altura: 1.8,
};

let imc = persona.peso/(persona.altura*persona.altura)

console.log(`El indice de masa corporal de ${persona.nombre} es: ${imc}`);
   