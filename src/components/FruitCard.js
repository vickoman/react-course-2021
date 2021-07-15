import React from "react";
import styles from "./FruitCard.module.css"

console.log(styles)
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
        const classes = `${styles.card} ${hasItem ? styles.good : this.state.cantidad < 0 ? styles.bad : ''}`
        return (
        <div className="card" className={classes}>
            <div className="card-content">
            <div className="card-title">{name}</div>
            <div className="card-action">Cantidad: {this.state.cantidad}</div>
            <button onClick={this.agregar}>+</button>
            <button onClick={this.restart}>-</button>
            <button onClick={this.limpiar}>Limpiar</button>
            <hr />
            <div className="card-subtitle">${price}</div>
            <div className="card-action">Total: ${ price * this.state.cantidad }</div>
            </div>
        </div>
        );
    }
}
export default FruitCard;
