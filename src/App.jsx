import blueprintLogo from './assets/blueprint.png'
import './App.css'

function App() {
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

      </section>
      
      <section>
        <h2>API Example!</h2>
        {/* Calling Pokimon API and displaying the first 20 pokimon from the call */}
        
      </section>
      
    </>
  )
}

export default App
