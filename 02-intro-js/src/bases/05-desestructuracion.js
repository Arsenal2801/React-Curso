
// Desestructuracion de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron-Man',
    rango: 'soldado'
} 

const {nombre,edad,clave} = persona;
console.log(nombre, edad, clave);

const lol = ({clave, edad})=>{
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: -0.23,
            lng: -78.12
        }
    }
}

const avanger = lol(persona);
const {nombreClave,anios,latlng:{lat,lng}} = avanger;

console.log(nombreClave, anios);
console.log(lat,lng);
