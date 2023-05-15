import { renderHook, act } from "@testing-library/react";
import { useCounter } from '../../src/hooks'

describe('Unit test in useCounter', () => {

    test('Return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });
    test('Counter value = 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100)
    });
    test('Testing increment function', () => {

        const { result } = renderHook(() => useCounter());
        act(
            () => {
                result.current.increment();
            }
        )
        expect(result.current.counter).toBe(11)
    })
    test('Testing decrement function', () => {

        const { result } = renderHook(() => useCounter());
        act(
            () => {
                result.current.decrement();
            }
        )
        expect(result.current.counter).toBe(9)
    })
    test('Testing reset function', () => {

        const { result } = renderHook(() => useCounter());
        act(
            () => {
                result.current.increment(2);
                result.current.reset();
            }
        )
        expect(result.current.counter).toBe(10)
    })
    
})