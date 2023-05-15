import { HeroeList } from "../components"


export const MarvelPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeInDown">Marvel Page</h1>
      <hr />

      <div className="card-columns">
        <HeroeList publisher="Marvel Comics" />
      </div>
    </>
  )
}
