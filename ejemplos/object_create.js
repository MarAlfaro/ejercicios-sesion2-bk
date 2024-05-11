//Object.create.

const persona = {
    nombre: '',
    edad: 0,
    esEstudiante: false
   };
   const persona1 = Object.create(persona);
   persona1.nombre = 'Felix';
   persona1.edad = 30;
   console.log(persona1.nombre); 
   console.log(persona1.edad);