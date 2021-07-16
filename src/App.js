import React from 'react'
import Cat from './components/Cat'
import "./styles.css";

// Data
const data = [
  { name: "Apple", price: 2.5 },
  { name: "Orange", price: 3.5 },
  { name: "Banana", price: 1.5 },
  { name: "Melon", price: 5.5 },
];

const anotherProperties = { peleasNocturnas: 300,  fuerza:100 };

const App = () => {
  return (
    <div className="App">
      {/* <FruitCard name="Apple" price={2.5} />
      <FruitCard name="Orange" price={3.5} />
      <FruitCard name="Banana" price={1.5} />
      <FruitCard name="Melon" price={5.5} /> */}
      <Cat name="Mishifu" age="2" raza="angora" {...anotherProperties}  />
    </div>
  );
}

export default App;
