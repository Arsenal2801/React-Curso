
import { getHeroByName } from '../helpers'
import { HeroeCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroByName(q)

  const { searchText, onInputChange } = useForm(
    {
      searchText: ''
    }
  )
  const onHandleSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }
  return (
    <>
      <h1 className='animate__animated animate__fadeInDown'>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5 animate__animated animate__fadeInLeft">
          <h4>Search Form</h4>
          <hr />
          <form aria-label='form'  onSubmit={onHandleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7 animate__animated animate__fadeInRight">
          <h4>Results</h4>
          <hr />

          {
            (q === '') 
            ? (<div className="alert alert-info">Search a hero</div>)
            : (heroes.length === 0) && (<div aria-label='alert-danger' className="alert alert-danger">There is no a hero with <b>{q}</b></div>)
          }
          {
              heroes.map(heroe => (
                <HeroeCard key={heroe.id} {...heroe} />
              ))
          }

        </div>
      </div>
    </>
  )
}
