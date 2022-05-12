
import { getHeroeById, getHeroebyOwner } from '07-imp-exp';

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        console.log(heroe);
        reject(heroe);
    }, 2000)
});

promesa.then((heroe) => { 
    console.log(`El heroe elgido es:`, heroe) 
})
.catch(error => console.warn(error));
*/

const getHeroebyIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if ( heroe !== undefined){
                resolve(heroe);
            }else{
                reject(`No existe un heroe con el id ${id}`);
            }
        }, 2000);
    });
}

getHeroebyIdAsync(3)
    .then(console.log)
    .catch(error => console.warn(error));
