import { useState, useEffect } from 'react'
import blueprintLogo from './assets/blueprint.png'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
  }, [])

  return (
    <>
      <h1><u>Getting Started in React</u></h1>

      <div>
        <a href="https://sitblueprint.com" target="_blank">
          <img src={blueprintLogo} className="logo" alt="Blueprint logo" />
        </a>
      </div>


      <section>
        <h2>Counter Example!</h2>
        {/* This is how you make a one-line comment in JSX */}
        <button className="counter" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        { count > 5 ? <p>Count is greater than 5!</p> : null }
      </section>
      
      <section>
        <h2>API Example!</h2>
        {/* Calling Pokimon API and displaying the first 20 pokimon from the call */}
        <div className="card-section">
          {pokemons.map(pokemon => {
            return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
          })}
        </div>
      </section>
      
    </>
  )
}

export default App
