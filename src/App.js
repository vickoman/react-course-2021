import React from 'react'
import PropsValidation from './components/PropsValidation'
import "./styles.css";

const products = [
  {
    id: 1,
    name: "Camisa Unicornio",
    colors: ['#467367', '#05fd88', '#a706ee'],
    price: 10.99
  },
  {
    id: 2,
    name: "Jean",
    colors: ['#467367', '#a706ee', '#05fd88'],
    price: 20.99
  }
];

const App = () => {
  return (
    <div className="App">
      <h3>Render List</h3>
      <div>
        { products.map(product => (
            <div>
              $ { product.price } - { product.name }
              <div>
                { product.colors.map(color => (
                    <span
                      style={{
                        width: '13px',
                        height: '13px',
                        borderRadius: '0.1em',
                        border: '1px solid gray',
                        display: 'inline-block',
                        margin: '0.1em',
                        background: color
                      }}></span>
                  )) }
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
