

const nombre = 'isac';
const apellido = 'Perez';

//const nCompleto = nombre + ' ' + apellido;

const nCompleto =`Hola Mundo, mi nombre es ${nombre} ${apellido}`;

console.log(nCompleto);


function getSaludo(nombre) {

    return `Hola Mundo, mi nombre es ${nombre}`;

}

console.log(`Este es un texto: ${getSaludo(nombre)}`);