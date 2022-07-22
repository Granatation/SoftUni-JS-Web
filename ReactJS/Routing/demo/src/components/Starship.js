import { Routes, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, Route,} from "react-router-dom";

export const Starship = () => {
    const [starship, setStarship] = useState({});
    const { starshipId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}`)
            .then(res => res.json())
            .then(result => {
                setStarship(result)
            })
    }, [starshipId]);

    const nextProductHandler = () => {
        navigate(`/starships/${Number(starshipId) + 1}`)
    }

    return (
        <>
            <h2>Products Page</h2>

            <h3>Product {starshipId} Specification</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
            </ul>

            <h3>Movies</h3>

            <nav>
                <ul>
                    {starship.films.map((x, i) =>
                        <Link key={x} to={`/starships/${starshipId}/film/${i}`}>Film {i}</Link>
                    )}
                </ul>
            </nav>

            <section>
                <Routes>
                    <Route path={`/starships/${starshipId}/film/1`} element={<h3>Film 1</h3>} />
                    <Route path={`/starships/${starshipId}/film/2`} element={<h3>Film 2</h3>} />
                    <Route path={`/starships/${starshipId}/film/3`} element={<h3>Film 3</h3>} />
                </Routes>
            </section>

            <button onClick={nextProductHandler}>Next</button>
        </>
    );
}