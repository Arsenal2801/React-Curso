import { renderHook, act } from "@testing-library/react";
import { useForm } from '../../src/hooks'


describe('Testing useForm', () => {
    const initialForm = {
        name: 'Fernando',
        email: 'algo@algo.com',
    }
    test('Return defaul values', () => {
        const { result } = renderHook(() => useForm(initialForm))
        expect(result.current.formState).toEqual(initialForm)
    })
    test('Change name', () => {
        const {result} = renderHook(() => useForm(initialForm));
        act(
            () => {
                result.current.onInputChange({
                    target: {
                        name: 'name',
                        value: 'Juan'
                    }
                })
            }
        )
        expect(result.current.formState.name).toEqual('Juan')
        expect(result.current.name).toEqual('Juan')
    })
    test('Reseting form', () => { 
        const {result} = renderHook(() => useForm(initialForm));
        act(
            () => {
                result.current.onInputChange({
                    target: {
                        name: 'name',
                        value: 'Juan'
                    }
                })
                result.current.onResetForm()
            }
        )

        expect(result.current.formState).toEqual(initialForm)

     })
})