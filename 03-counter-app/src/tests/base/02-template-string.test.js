
import'@testing-library/jest-dom';

import getSaludo from '../../base/02-template-string'

describe('Pruebas en 02-template-string',()=>{
    test('Retorna Hola Fernando', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre)
     })

     test('Retorna Hola Carlos', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos')
     })

})