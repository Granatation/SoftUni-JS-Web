import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Products = () => {
    const [starship, setStarship] = useState({});
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${productId}`)
            .then(res => res.json())
            .then(result => {
                setStarship(result)
            })
    }, [productId]);

    const nextProductHandler = () => {
        navigate(`/products/${Number(productId) + 1}`)
    }

    return (
        <>
            <h2>Products Page</h2>

            <h3>Product {productId != ':productId' ? productId : 'default'} Specification</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
            </ul>

            <button onClick={nextProductHandler}>Next</button>
        </>
    );
}