import Header from './Header';
import React, { useState } from 'react';
import AutoCard from './AutoCard';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <Header/>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>

      <AutoCard
        marca="Toyota"
        modelo="Corolla"
        anno={2021}
        color="Azul"
      />
      <AutoCard
        marca="Ford"
        modelo="Mustang"
        anno={2020}
        color="Rojo"
      />
    </div>
  );
}

export default App;
