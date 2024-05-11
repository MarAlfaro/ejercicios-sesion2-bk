//Constructor de objetos

function Persona(nombre, edad, esEstudiante) {
    this.nombre = nombre;
    this.edad = edad;
    this.esEstudiante = esEstudiante;
   }
   const persona1 = new Persona('Juan', 30, true);
   console.log(persona1.nombre);
   