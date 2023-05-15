import { /*fireEvent,*/ render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { Navbar } from "../../../src/ui/components/Navbar"

// const useNavigateMock = jest.fn();

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => useNavigateMock
// }));

describe('Testing Navbar component', () => {

  const contextValue = {
    logged: true,
    user: {
      id: 123,
      name: 'Fernando'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks())

  //? First test
  test('should show the user´s name', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={contextValue} >
          <Navbar />
        </AuthContext.Provider >
      </MemoryRouter>
    )
    expect(screen.getByText('Fernando')).toBeTruthy()
  })

  //? Second test
  // test('should logout and navigate to login when the button has been pressed', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <AuthContext.Provider value={contextValue} >
  //         <Navbar />
  //       </AuthContext.Provider >
  //     </MemoryRouter>
  //   )
  //   const logoutBtn = screen.getByRole('button')
  //   fireEvent.click(logoutBtn)
  //   expect(contextValue.logout).toHaveBeenCalled()
  //   expect(useNavigateMock).toHaveBeenCalledWith('/login')
  // })
})
