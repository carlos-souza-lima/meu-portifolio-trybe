import './App.css';
import CriaLista from './CriaLista';
import pokemons from './data';

function App() {
  return (
    <CriaLista data={ pokemons } />
  );
}

export default App;
