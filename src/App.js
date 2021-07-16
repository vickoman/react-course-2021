import React from 'react'
import BoxEvent from './components/BoxEvent'
import InputEvent from './components/InputEvent';
import FatherSon from './components/FatherSon';
import "./styles.css";


const anotherProperties = { peleasNocturnas: 300,  fuerza:100 };

const App = () => {
  return (
    <div className="App">
      {/* <BoxEvent />
      <InputEvent /> */}
      <FatherSon />
    </div>
  );
}

export default App;
