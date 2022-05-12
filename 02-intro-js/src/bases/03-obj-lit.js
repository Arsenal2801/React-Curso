
const persona ={
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    direccion: {
        ciudad: 'Bogota',
        pais: 'Colombia',
        codigoPostal: '11111',
        calle: 'Calle 1',
        numero: '123',
        piso: '1',
        departamento: 'A',
        telefono: '123456789',
    }
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Juan2';


console.log(persona2);


