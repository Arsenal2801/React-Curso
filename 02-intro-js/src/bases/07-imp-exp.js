
import  heroes, {owners}  from "./data/heroes.js";

//console.log(heroes);
//console.log(owners);


export const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

/*for (let index = 0; index <= heroes.length; index++) {
    console.log(getHeroeById(index));
}*/

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner) ;

//console.log(getHeroesByOwner('Marvel'))