
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [,,p3] = personajes;

console .log(p3);

const returnArreglo= () => {
    return ['ABC', 123];
}

const[letras, numeros]= returnArreglo();

console.log(letras, numeros);

const estado = (nombre) => {
    return [nombre, function setNombre(){
        console.log(`Hola, soy ${nombre}`);
    }];
}

const [nombre, setNombre] = estado('goku');

console.log(nombre);
setNombre();
