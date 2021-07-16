import React from 'react'
import Conditional from './components/Conditional'
import "./styles.css";


const anotherProperties = { peleasNocturnas: 300,  fuerza:100 };

const App = () => {
  return (
    <div className="App">
      <Conditional />
    </div>
  );
}

export default App;
