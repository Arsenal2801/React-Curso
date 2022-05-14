import PrimeraApp from "../PrimeraApp";
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

describe('Pruebas de Componentes(PrimeraApp)', () => {
    // test('Muestra Hola, Soy Goku', () => { 
    //     const saludo = 'Hola, Soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />)
    //     expect(getByText(saludo)).toBeInTheDocument();
    //  })


    test('Muestra <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot();

    })

    test('Muestra en <PrimeraApp/> el subtitulo ', () => {

        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Hola, Soy Vegeta';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        )

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);

    })



})

