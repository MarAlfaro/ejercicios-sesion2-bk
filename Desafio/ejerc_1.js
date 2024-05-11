class Bebe {
    
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }

    llorar(){
        console.log(`${this.nombre} de ${this.edad} está llorando`); 
    }

    dormir(){
        console.log(`${this.nombre} de ${this.edad} está durmiendo`); 
    }

    comer(){
        console.log(`${this.nombre} de ${this.edad} está comiendo`); 
    }
}

const bebe1 = new Bebe('ANTONIO', '3 MESES');
const bebe2 = new Bebe('SONIA', '5 MESES');
const bebe3 = new Bebe('JAVIER', '8 MESES');

console.log('------------------------------');
bebe1.llorar();
bebe1.dormir();
bebe1.comer();
console.log('------------------------------');
bebe2.llorar();
bebe2.dormir();
bebe2.comer();
console.log('------------------------------');
bebe3.llorar();
bebe3.dormir();
bebe3.comer();
  