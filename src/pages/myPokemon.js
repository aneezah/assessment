import '../style/myPokemon.css'
import React from 'react';
import { Link } from 'react-router-dom';

 const MyPokemon = ({ team, removePokemonFromTeam }) => {
  return (
    <div className='myPokemon'>
      <h1>Your Pokemon Team</h1>
       {team.length === 0 ? (
        <p>No Pokemon in your team.</p>
      ) : (
        <ul className=''>
          {team.map(pokemon => (
            <li className='list' key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              <button onClick={() => removePokemonFromTeam (pokemon)}>Remove</button>
            </li>
          ))}
        </ul>
      )} 
    </div>
  );
}

export default MyPokemon;
