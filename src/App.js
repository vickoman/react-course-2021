import React, {Component} from 'react'
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

class App extends Component {
  state = {
    user: {
      name: "Victor Diaz",
      country: "Ecuador",
      twitter: "@vickoman",
      youtube: "vickoman"
    }
  }

  render() {
    const { user } = this.state;
    const keys = Object.keys(user);
    return (
      <div className="App">
        <h3>Iterate object properties ✡ </h3>
        <ul>
          { keys.map((key) => (
            <li>
              <strong>{ key }</strong>: { user[key]}
            </li>
          ) ) }
        </ul>
      </div>
    );
  }
}

export default App;
