import './StyleSheet.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import { useForm } from 'react-hook-form';

function App() {

  const [state, setState] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const fetch = async () => {
      const resp = await P.getPokemonByName(data.pokemon);
      setState(resp);
      console.log(resp);
    }

    fetch();
  };

  const P = new Pokedex();

  // useEffect(async () => {

  //   const fetch = async () => {
  //     const resp = await P.getPokemonByName(25);
  //     setState(resp);
  //   }

  //   fetch();

  // }, [])

  return (
    <div className="App">

      <h1>POKEMON</h1>

      <h2>Search Pokemon by her ID or name</h2>

      <div className="pokedex__container">
        {/* <div id="circle"></div> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input id="text" {...register("pokemon")} type="text" />
          <input id="search" type="submit" value="search"/>
        </form>

        <div className="pokedex__screen-border">
          <div className="pokedex__screen">
            {!state && <span>nada que ve</span>}
            {state &&
              <>
                <div className="pokedex__screen-content">
                  
                  <div>
                    <img src={state.sprites.front_default} />
                    <img src={state.sprites.back_default} />
                  </div>
                  <span>{state.name.toUpperCase()} {'#' + state.id}</span>
                  {/* <span>HEIGHT {state.height}</span>
                  <span>WEIGHT {state.weight}</span>
                  <>{state.abilities.map(i => <span>{i.ability.name}</span>)}</> */}
                  {/* <span>Type: {state.types.map(i => i.type.name)}</span> */}
                  {/* <> */}
                  <h3>Type: {state.types.map(i => i.type.name + ' ')}</h3>  
                  {/* </> */}
                </div>
              </>
            }
          </div>
        </div>

      </div>
      {/* {JSON.stringify(state)} */}

    </div>
  );
}

export default App;
