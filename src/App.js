import "./styles.css";

// Data
const data = [
  { name: "Apple", price: 2.5 },
  { name: "Orange", price: 3.5 },
  { name: "Banana", price: 1.5 },
  { name: "Melon", price: 5.5 },
];

// First functional component
const CardFruit = (props) => {
  const fruits = props.fruits;

  const listOfFruits = fruits.map((fruit, index) =>
    <div className="card-fruit" key={index}>
      <h3>{ fruit.name }</h3>
      <hr/>
      <p>{ fruit.price }</p>
    </div>
  );

  return (
    <fragment>
      {listOfFruits}
    </fragment>
  );
};

export default function App() {
  return (
    <div className="App">
      <CardFruit fruits={data} />
    </div>
  );
}
