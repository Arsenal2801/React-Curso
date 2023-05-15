import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
// import { AppRouter } from "../../src/router/AppRouter"

describe('AppRouter testing', () => {

  test('should render login if not authenticated', () => {
    // const contextValue = {
    //   logged: false,
    // }
    // render(
    //   <MemoryRouter initialEntries = {['/']}>
    //     <AuthContext.Provider value = {contextValue} >
    //       <AppRouter />
    //     </AuthContext.Provider >
    //   </MemoryRouter>
    // )
    // expect(screen.getAllByText('Login').length).toBe(2)
  })

  test('should render marvel if authenticated', () => {
    // const contextValue = {
    //   logged: true,
    //     user: {
    //       id: 123,
    //       name: 'Fernando'
    //     }
    // }
    // render(
    //   <MemoryRouter initialEntries = {['/login']}>
    //     <AuthContext.Provider value = {contextValue} >
    //       <AppRouter />
    //     </AuthContext.Provider >
    //   </MemoryRouter>
    // )
    // expect(screen.getAllByText('Marvel').length).toBeGreaterThan(1)
  })


})