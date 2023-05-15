
const initialState = [
    {
        id: 1,
        todo: 'Recolectar piedra del alma',
        done: false,
    }
];


const toDoReducer = (state = initialState, action={}) => {
    
    if (action.type === '[TODO] add a new to do') {
        return [...state, action.payload]
    }

    
    
    return state;
}


let toDos = toDoReducer();

console.log(toDos)

const newToDo = {
    id: 2,
    todo: 'Comer',
    done: false,
}

const addToDoAction = {
    type: '[TODO] add a new to do',
    payload: newToDo,
}

toDos = toDoReducer(initialState, addToDoAction);

// toDos.push({
//     id: 2,
//     todo: 'Comer',
//     done: false,
// })

console.log(toDos)
