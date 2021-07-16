import React, { Component } from 'react';

class InputEvent extends Component {
    state = {
        inputValue: '',
        event: ''
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value,
            event: e.type
        });
    }
    render() {
        return (
            <div>
                <h2>InputEvent</h2>
                <input type="text" 
                    onChange={this.handleChange}
                    onCopy={this.handleChange}
                    onPaste={this.handleChange}
                    ></input>
                <h1>{this.state.inputValue}</h1>
                <h3>{this.state.event}</h3>
            </div>
        )
    }
}
export default InputEvent;
