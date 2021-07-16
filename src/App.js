import React from 'react'
import PropsValidation from './components/PropsValidation'
import "./styles.css";


const anotherProperties = { peleasNocturnas: 300,  fuerza:100 };

const App = () => {
  return (
    <div className="App">
      <PropsValidation />
    </div>
  );
}

export default App;
