import React from 'react'
import "./styles.css";

// Data
const data = [
  { name: "Apple", price: 2.5 },
  { name: "Orange", price: 3.5 },
  { name: "Banana", price: 1.5 },
  { name: "Melon", price: 5.5 },
];

/**
 * @class FruitCard
 * @extends React.Component
 * @property {string} name
 * @property {number} price
 **/
class FruitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0
    };

    this.agregar = this.agregar.bind(this);
    this.restart = this.restart.bind(this);
  }

  agregar() {
    this.setState({cantidad: this.state.cantidad + 1});
  }

  restart() {
    this.setState({cantidad: this.state.cantidad - 1});
  }

  render() {
    const { name, price } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-subtitle">{price}</div>
          <div className="card-action">Cantidad: {this.state.cantidad}</div>
          <button
            onClick={this.agregar}>+</button>
            <button onClick={this.restart}>-</button>
          <hr />
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      {/* <CardFruit fruits={data} /> */}
      <FruitCard name="Apple" price={2.5} />
      <FruitCard name="Orange" price={3.5} />
      <FruitCard name="Banana" price={1.5} />
      <FruitCard name="Melon" price={5.5} />
    </div>
  );
}
