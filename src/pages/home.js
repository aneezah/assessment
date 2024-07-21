import '../style/home.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

  const Home = ({ addPokemonToTeam }) => {
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState('');

  const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    setPokemon(response.data);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
      setPokemon(response.data);
    } catch (error) {
      console.error('Pokemon not found');
    }
  };

 

  return (
    <div className='home'>
      <h1>Pokemon Web App User Stories</h1>
      <div className='homeBody'>
        <div className='leftHome'>
          <div className='randomPokeman'>
            <h3>Search Random Pokemon</h3>
            <button onClick={getRandomPokemon}>Random Pokemon</button>
          </div>
          <div className='searchPokeman'>
            <h3>Retrieve Pokemon By Name</h3>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        {pokemon && (
          <div className='rightHome'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            {<button onClick={() => addPokemonToTeam(pokemon)} b>Add to Team</button>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
