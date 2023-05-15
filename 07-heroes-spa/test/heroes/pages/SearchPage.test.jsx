import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
// import { SearchPage } from "../../../src/heroes/pages/SearchPage"


describe('Testing SearchPage', () => {

  test('should show with default elements', () => {
    // const { container } = render(
    //   <MemoryRouter >
    //     <SearchPage />
    //   </MemoryRouter>
    // )
    // screen.debug()
    // expect(container).toMatchSnapshot()
  })

  test('should show with Batman and the input with the value of the query string', () => {

    // render(
    //   <MemoryRouter initialEntries={['/search?q=batman']}>
    //     <SearchPage />
    //   </MemoryRouter>
    // )

    // const input = screen.getByRole('textbox')
    // expect(input.value).toHaveValue('batman')
    
    // const img = screen.getByRole('img')
    // expect(img.src).toContain('7assets/heroes/dc-batman.jpg')

    // const alert = screen.getByLabelText('alert-danger')
    // expect(alert.style.display).toBe('none')

  })

  test('should show an error if the hero does not exist', () => {

    // render(
    //   <MemoryRouter initialEntries={['/search?q=batman123']}>
    //     <SearchPage />
    //   </MemoryRouter>
    // )
    // const alert = screen.getByLabelText('alert-danger')
    // expect(alert.style.display).toBe('')

  })

  test('should navigate to the new query', () => {
    // const history = {
    //   push: jest.fn()
    // }
    // render(
    //   <MemoryRouter initialEntries={['/search?q=batman123']}>
    //     <SearchPage history={history} />
    //   </MemoryRouter>
    // )

    // const input = screen.getByRole('textbox')
    // const form = screen.getByRole('form')
    // fireEvent.change(input, { target: { name: 'searchText', value: 'batman' } })
    // fireEvent.submit(form)
    // expect(history.push).toHaveBeenCalledWith('?q=batman')
  })

})
