import pokeLoad from './assets/pokemon.svg';
import nintendo from './assets/nintendo.svg';
import './StyleSheet.css';
import './App.css';
import React, { useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import { useForm } from 'react-hook-form';
// import LinkedIn from './assets/linkedin.svg';
// import GitHub from './assets/signo-de-github.svg';
// import Portfolio from './assets/portfolio.svg';

// function Footer() {
//   return (
//     <footer>
//       <span>App created by Matías Herrera, visit:</span>
//       <div>
//         <a href={'https://www.linkedin.com/in/matías-facundo-herrera-5830b7200/'} target="_blank" rel="noreferrer"><img src={LinkedIn} alt="linkedin" /></a>
//         <a href={'https://github.com/mati7122'} target="_blank" rel="noreferrer"><img src={GitHub} alt="github" /></a>
//         <a href={'https://portfolio-psi-kohl-25.vercel.app'} target="_blank" rel="noreferrer"><img src={Portfolio} alt="portfolio" /></a>
//       </div>
//     </footer>
//   );
// }

function Screen(props) {
  return (
    <div className="pokedex__screen-content">
      <img id="pokemonIMG" src={props.pokemon} alt="pokemon" />
      <span style={{ margin: 0 }}>{props.name} {'#' + props.id}</span>
    </div>
  );
}

// function Buttons(props) {
//   return (
//     <div className="buttonsChange">
//       <button onClick={() => props.front}>A</button>
//       <button onClick={() => props.back}>B</button>
//     </div>
//   );
// }

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
    <>
      <div className="App">
        <div className="pokedex">
          <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png'} alt="pokemonTitle" />

          <h4>Search Pokemons by her ID or name</h4>

          <div className="pokedex__container">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("pokemon")} type="text" placeholder="Name or Pokemon number"/>
              </form>

              <div className="pokedex__screen-border">
                <div className="pokedex__screen">
                  {!state && <img id="pokeLoad" src={pokeLoad} alt="load" />}

                  {state &&
                    <>
                      <Screen pokemon={pokemon} name={state.name.toUpperCase()} id={state.id} />
                    </>
                  }
                </div>
              </div>
              <img style={{ width: 70, margin: 0, padding: 0 }} src={nintendo} alt="logo" />
            </div>

            <div className="buttonsChange">
              <button onClick={() => setPoke(state.sprites.front_default)}>A</button>
              <button onClick={() => setPoke(state.sprites.back_default)}>B</button>
            </div>

          </div>
          
        </div>

      </div>
    </>
  );
}

export default App;
