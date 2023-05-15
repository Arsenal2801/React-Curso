import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('PublicRoute', () => {

  test('should render component if not authenticated', () => {
    const contextValue = {
      logged: false,
    }
    render(
      <AuthContext.Provider value={contextValue} >
        <PublicRoute>
          <h1>
            This is a public route
          </h1>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText('This is a public route')).toBeTruthy()
  })
  test('should be redirect if authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'test',
        id: 123,
      }
    }
    render(
      <AuthContext.Provider value={contextValue} >
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>
                  This is a public route
                </h1>
              </PublicRoute>
            } />
            <Route path="marvel" element={<h1>Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Marvel')).toBeTruthy()
  })
})
