import '../style/details.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

  const PokemonDetails = ({team, addPokemonToTeam, removePokemonFromTeam}) => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
 
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemon();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className='details'>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <button onClick={() => addPokemonToTeam(pokemon)} disabled={team.find(p => p.name === pokemon.name)}>
        Add to Team
      </button>
      <button onClick={() => removePokemonFromTeam(pokemon)} disabled={!team.find(p => p.name === pokemon.name)}>
        Remove from Team
      </button>
    </div>
  );
}

export default PokemonDetails;
