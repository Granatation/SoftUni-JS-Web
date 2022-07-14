import { useEffect, useState } from "react";

export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        fetch(`https://swapi.dev/api/people`)
        .then(res => res.json())
        .then(characters => {
            setCharacters(characters.results)
        });
    },[]);

    return (
        <ul>
            {!characters.length && <li>Loading...</li>}
            {characters.map(x=>(
                <li key={x.name}>{x.name}</li>
            ))}
        </ul>
    );

}