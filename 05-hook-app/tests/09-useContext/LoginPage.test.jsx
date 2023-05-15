import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { Login } from "../../src/09-useContext/Login"

describe ('testing <LoginPage/>', () => {

    test('should show the component with any user', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <Login />
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
    })

    test('should call the function setUser',()=>{
        const user = {id:1, name:'Juan',email:'xd@xd.com'}
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <Login />
            </UserContext.Provider>
        )
        const buttonElement = screen.getByRole('button');
            fireEvent.click(buttonElement);
        expect(setUserMock).toBeCalledWith({id:1, name:'Juan',email:'xd@xd.com'});
    })

})