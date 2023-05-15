const { render, screen } = require("@testing-library/react")
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp"

describe('testing <MainApp/>', () => {

   test('should show the component <HomePage/>', () => {
      render(
         <MemoryRouter>
            <MainApp />
         </MemoryRouter>
      )

      expect(screen.getByText('HomePage')).toBeTruthy()
      //   screen.debug()
   })

   test('should show the component <Login/>', () => {
      render(
         <MemoryRouter initialEntries={['/login']}>
            <MainApp />
         </MemoryRouter>
      )
      expect(screen.getByText('LoginPage')).toBeTruthy()
      screen.debug()
   })


})