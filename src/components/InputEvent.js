import React, { Component } from 'react';

class InputEvent extends Component {
    state = {
        color: 'blue',
    }

    handleChange = (event) => {
        const color = event.target.value;
        this.setState(state => ({
            color
        }));
    }
    render() {
        const styles = {
            color: this.state.color,
        }
        return (
            <div>
                <h2>InputEvent</h2>
                <input type="text" 
                    onChange={this.handleChange}
                    ></input>
                <h1 style={styles}>{this.state.color}</h1>
            </div>
        )
    }
}
export default InputEvent;
