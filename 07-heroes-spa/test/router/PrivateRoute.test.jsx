import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PrivateRoute } from "../../src/router/PrivateRoute"


describe('PrivateRoute testing', () => {

  test('should render component if authenticated', () => {
    Storage.prototype.setItem = jest.fn()
    const contextValue = {
      logged: true,
      user: {
        name: 'test',
        id: 123,
      }
    }
    render(
      <AuthContext.Provider value={contextValue} >
        <MemoryRouter>
          <PrivateRoute>
            <h1>
              This is a private route
            </h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('This is a private route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
  })
  
})