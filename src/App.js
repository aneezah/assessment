import './App.css'
import  { useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import PokemonDetails from './pages/pokemonDetails';
import MyPokemon from './pages/myPokemon';


const App = () => {
  const [team, setTeam] = useState([]);
  
  const addPokemonToTeam = (pokemon) => {
    if (team.length < 6 && !team.some((p) => p.name === pokemon.name)) {
      const updatedTeam = [...team, pokemon];
      setTeam(updatedTeam);
    }
  };

  const removePokemonFromTeam = (pokemon) => {
    const updatedTeam = team.filter(p => p.name !== pokemon.name);
    setTeam(updatedTeam);
  };
  
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home addPokemonToTeam={addPokemonToTeam}/>}/>
          <Route path='/pokemon/:name'element ={<PokemonDetails team={team} addPokemonToTeam={addPokemonToTeam} removePokemonFromTeam={removePokemonFromTeam} />}/>
          <Route path='/my-pokeman' element={<MyPokemon team={team} removePokemonFromTeam={removePokemonFromTeam}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
