import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroePage = () => {

    const { id } = useParams();
    const heroe = useMemo(() => getHeroById(id), [id]);
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1, { replace: false });
    }

    if (!heroe) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5 animate__animated animate__backInLeft">
            <div className="col-4">
                <img
                    src={`/heroes/${id}.jpg`}
                    alt={heroe.superhero}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{heroe.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {heroe.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {heroe.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {heroe.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{heroe.characters}</p>
                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
