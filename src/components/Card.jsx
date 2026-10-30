import { useState, useEffect } from 'react';
import "../styles/Card.css";

export default function Card({ pokemonName = 'pikachu', handleClick }) {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
                
                if (!response.ok) {
                    throw new Error('Could not fetch resource.');
                }

                const data = await response.json();
                const pokemonSprite = data.sprites.front_default;
                setImgSrc(pokemonSprite);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [pokemonName]);

    return (
        <button className="card" data-card-index="0" onClick={handleClick}>
            <img src={imgSrc} alt={pokemonName} />
            <h3>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h3>
        </button>
    );
}