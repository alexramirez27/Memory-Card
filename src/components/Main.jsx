import { useState, useEffect } from 'react';
import Card from "./Card.jsx";
import "../styles/Main.css";

export default function Main() { 
    const pokemonNames = [
        'pikachu', 'bulbasaur', 'charmander', 'squirtle', 'weedle', 
        'jigglypuff', 'gloom', 'meowth', 'abra', 'golem',
        'grimer', 'haunter', 'onix', 'voltorb', 'horsea',
        'goldeen', 'ditto', 'eevee', 'kabuto', 'mewtwo'
    ];

    const [pokemons, setPokemons] = useState(pokemonNames);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedPokemons, setClickedPokemons] = useState(() => new Set());

    const shufflePokemons = () => {
        setPokemons(prev => {
            const pokemonsCopy = [...prev];

            for (let i = pokemonsCopy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pokemonsCopy[i], pokemonsCopy[j]] = [pokemonsCopy[j], pokemonsCopy[i]];
            }

            return pokemonsCopy;
        });
    };
    
    const cardClick = (pokemonName) => {
        shufflePokemons();

        if (clickedPokemons.has(pokemonName)) {
            setClickedPokemons(new Set());
            setScore(0);
        } else {
            setClickedPokemons(prev => new Set(prev).add(pokemonName));
            setScore(s => s + 1);
            if (score === bestScore) {
                setBestScore(b => b + 1);
            }
        }
    };

    return (
        <main>
            <div className="info-and-scores">
                <h3>Get points by clicking on an image but don't click any more than once!</h3>
                <div className="scores">
                    <h3>Score: {score}</h3>
                    <h3>Best Score: {bestScore}</h3>
                </div>
            </div>
            <div className="main-content">
                <div className="card-container">
                    {pokemons.map(pokemon => 
                        <Card 
                            key={pokemon} 
                            pokemonName={pokemon} 
                            handleClick={() => cardClick(pokemon)}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}