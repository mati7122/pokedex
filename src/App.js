import pokeLoad from './assets/pokemon.svg';
import nintendo from './assets/nintendo.svg';
// import pokeBall from './assets/pokeball.svg';
import './StyleSheet.css';
import './App.css';
import React, { useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import { useForm } from 'react-hook-form';

function App() {

  const [state, setState] = useState();
  const [pokemon, setPoke] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const fetch = async () => {
      const resp = await P.getPokemonByName(data.pokemon);
      setState(resp);
      setPoke(resp.sprites.front_default);
      console.log(resp);
    }

    fetch();
  };

  const P = new Pokedex();

  return (
    <div className="App">

      {/* <h1>POKEMON</h1> */}
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png'} alt="pokemonTitle"/>

      <h2>Search Pokemons by her ID or name</h2>

      <div className="pokedex__container">
        {/* <div id="circle"></div> */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input id="text" {...register("pokemon")} type="text" />
          {/* <input id="search" type="submit" value="search"/> */}
          {/* <button id="search" type="submit">
            <img src={pokeBall} alt="button" />
          </button> */}
        </form>

        <div className="pokedex__screen-border">
          <div className="pokedex__screen">
            {!state && <img id="pokeLoad" src={pokeLoad} alt="load" />}

            {state &&
              <>
                <div className="pokedex__screen-content">

                  <div>
                    {/* <img src={state.sprites.front_default} alt="front"/> */}
                    <img id="pokemonIMG" src={pokemon} alt="pokemon" />
                    {/* <img id="backPoke" src={state.sprites.back_default} alt="back"/> */}
                  </div>
                  <span style={{ margin: 0 }}>{state.name.toUpperCase()} {'#' + state.id}</span>
                  {/* <h3>Type: {state.types.map(i => i.type.name + ' ')}</h3> */}
                </div>
              </>
            }
          </div>
        </div>
        <img style={{ width: 60, margin: 0, padding: 0 }} src={nintendo} alt="logo" />
        </div>
        <div className="buttonsChange">
          <button onClick={() => {setPoke(state.sprites.front_default)}}>A</button>
          <button onClick={() => setPoke(state.sprites.back_default)}>B</button>
        </div>

      </div>

    </div>
  );
}

export default App;
