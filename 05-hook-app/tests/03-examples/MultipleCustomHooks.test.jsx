import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils"
import {MultipleCustomHooks} from "../../src/03-examples"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";


jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('Testiing <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    const mockReset = jest.fn();
        useCounter.mockReturnValue({
            counter:1,
            increment:mockIncrement,
            decrement:mockDecrement,
            reset:mockReset
        })
        beforeEach(()=>{
            jest.clearAllMocks();
        })

    test('Should show correctly', () => {
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        })
        render(<MultipleCustomHooks />)
        expect(screen.getByText('Loading...'));
        const nxtBtn = screen.getByRole('button', {name: 'Next Quote'});
        expect(nxtBtn.disabled).toBeTruthy;
    })

    test('Should be show a quote', () => {
        useFetch.mockReturnValue({
            data:[{author:"Test",quote:"test"}],
            isLoading:false,
            hasError:null
        })
        render(<MultipleCustomHooks />)
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.getByText('test')).toBeTruthy();
        const nxtBtn = screen.getByRole('button', {name: 'Next Quote'});
        expect(nxtBtn.disabled).toBeFalsy;
    })
    test('should be call the increment function', () => { 
        useFetch.mockReturnValue({
            data:[{author:"Test",quote:"test"}],
            isLoading:false,
            hasError:null
        })
        render(<MultipleCustomHooks />)
        const nxtBtn = screen.getByRole('button', {name: 'Next Quote'});
        fireEvent.click(nxtBtn);
        expect(mockIncrement).toBeCalled();
     })
     test('should be call the decrement function', () => { 
        useFetch.mockReturnValue({
            data:[{author:"Test",quote:"test"}],
            isLoading:false,
            hasError:null
        })
        render(<MultipleCustomHooks />)
        const prvBtn = screen.getByRole('button', {name: 'Previous Quote'});
        fireEvent.click(prvBtn);
        expect(mockDecrement).toBeCalled();
     })
     test('should be call the reset function', () => { 
        useFetch.mockReturnValue({
            data:[{author:"Test",quote:"test"}],
            isLoading:false,
            hasError:null
        })
        render(<MultipleCustomHooks />)
        const rstBtn = screen.getByRole('button', {name: 'Reset Quote'});
        fireEvent.click(rstBtn);
        expect(mockReset).toBeCalled();
     })

})