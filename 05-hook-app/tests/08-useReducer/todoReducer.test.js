
import { toDoReducer } from '../../src/08-useReducer/todoReducer';

describe('testing todoReducer', () => { 
    const initialState = [{
        id: 1,
        desc: 'Aprender React',
        done: false
    }];
    test('should return default state', () => {
        const newState = toDoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })
    test('should add a new todo', () => {
        const action = {
            type: '[TODO] Add To Do',
            payload: {
                id: 2,
                desc: 'Aprender Mongo',
                done: false
            }
        }
        const newState = toDoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })
    test('should remove a todo', () => {
        const action = {
            type: '[TODO] Remove To Do',
            payload: 1
        }
        const newState = toDoReducer(initialState, action);
        expect(newState.length).toBe(0);
    })
    test('should toggle a todo', () => {
        const action = {
            type: '[TODO] Toggle To Do',
            payload: 1
        }
        const newState = toDoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    })
 })