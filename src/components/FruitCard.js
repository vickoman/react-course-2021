import React from "react";

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
        cantidad: 0,
        };

        const METHODS = ["agregar", "restart", "limpiar"];

        METHODS.forEach((method) => {
        this[method] = this[method].bind(this);
        });
    }

    agregar() {
        this.setState({ cantidad: this.state.cantidad + 1 });
    }

    restart() {
        this.setState({ cantidad: this.state.cantidad - 1 });
    }

    limpiar() {
        this.setState({ cantidad: 0 });
    }

    render() {
        const { name, price } = this.props;
        const hasItem = this.state.cantidad > 0;
        const styles = {
            border: "1px solid #ccc",
            marginBottom: "1em",
            maxWidth: "300px",
            borderRadius: ".5em",
            padding: ".5em",
            background: hasItem ? "linear-gradient(to right, #34e89e, #0f3443)" :
            this.state.cantidad < 0 ? "linear-gradient(to right, #ed213a, #93291e)" : '#fff',
            color: this.state.cantidad === 0 ? "black" : "white",
            transition: "all 250ms ease-in-out",
        };
        return (
        <div className="card" style={styles}>
            <div className="card-content">
            <div className="card-title">{name}</div>
            <div className="card-action">Cantidad: {this.state.cantidad}</div>
            <button onClick={this.agregar}>+</button>
            <button onClick={this.restart}>-</button>
            <button onClick={this.limpiar}>Limpiar</button>
            <hr />
            <div className="card-subtitle">${price}</div>
            </div>
        </div>
        );
    }
}
export default FruitCard;
