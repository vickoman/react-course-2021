import React from 'react'
import InjectHtml from './components/InjectHtml'
import "./styles.css";


const anotherProperties = { peleasNocturnas: 300,  fuerza:100 };

const App = () => {
  return (
    <div className="App">
      <InjectHtml />
    </div>
  );
}

export default App;
