import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un ojeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('getUserActive debe retornar un ojeto', () => {
        const nombre = 'Fernando';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest);
    })

})
