import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar /> {}
      <h2>Tarea Coder House React</h2> {}
      <ItemListContainer greeting="¡Bienvenidos!" /> {}
    </div>
  );
}

export default App;