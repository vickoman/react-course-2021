import React, { Component } from 'react';

const Saludo = (props) => {
    if(props.gettings){
        return (
            <div>
                { props.name && <h1>Hola {props.name}</h1> }
                <p>Eres genial 🚀 !</p>
            </div>
        )
    }

    return (
        <div>
            <p>No hay saludo</p>
        </div>
    )
}
class Conditional extends Component {
    render() {
        return (
            <div>
                <Saludo gettings name='vickoman' />
            </div>
        )
    }
}

export default Conditional;
