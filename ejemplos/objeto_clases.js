//objeto en clases
class Animal {
    constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    }
    sonido() {
    console.log('Haciendo sonidos...');
    }
   }
   const perro = new Animal('Odi', 'Perro');
   console.log(perro.nombre); 
   perro.sonido();
   