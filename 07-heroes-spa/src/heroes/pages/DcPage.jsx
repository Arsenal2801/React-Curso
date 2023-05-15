
import { HeroeList } from "../components"

export const DcPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeInDown">DC Page</h1>
      <hr />

      <div className="card-columns">
        <HeroeList publisher="DC Comics" />
      </div>
    </>
  )
}
