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
        return (
        <div className="card">
            <div className="card-content">
            <div className="card-title">{name}</div>
            <div className="card-subtitle">{price}</div>
            <div className="card-action">Cantidad: {this.state.cantidad}</div>
            <button onClick={this.agregar}>+</button>
            <button onClick={this.restart}>-</button>
            <button onClick={this.limpiar}>Limpiar</button>
            <hr />
            </div>
        </div>
        );
    }
}
export default FruitCard;
