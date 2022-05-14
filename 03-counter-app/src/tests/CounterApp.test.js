
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Testing React component <CounterApp/>', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('<CounterApp/> is displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('the value of <CounterApp/> defaults to 100', () => {
        const value = '100';

        wrapper = shallow(<CounterApp value={value} />);

        const textoH2 = wrapper.find('h2').text();

        expect(textoH2).toBe(value)

    })

    test('onHandleAdd test', () => {

        wrapper.find('button').at('0').simulate('click');

        const textoH2 = wrapper.find('h2').text().trim();

        expect(textoH2).toBe('11')

    })

    test('onHandleSubstract test', () => {

        wrapper.find('button').at('2').simulate('click');

        const textoH2 = wrapper.find('h2').text().trim();

        expect(textoH2).toBe('9')

    })

    test('onHandleReset test', () => {

        const initialValue = '10';

        wrapper = shallow(<CounterApp />);

        wrapper.find('button').at('0').simulate('click');

        wrapper.find('button').at('1').simulate('click');

        const textoH2 = wrapper.find('h2').text().trim();

        expect(textoH2).toBe(initialValue)

    })


})

