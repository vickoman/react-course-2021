import React, { Component } from 'react';

class Son extends Component {
    handleClick = () => {
        this.props.onSayHello('Hello father 🎅 ');
    }
    render() {
        return (
        <div className="box red">
            <h1>Son</h1>
            <button onClick={this.handleClick}>Say Hello</button>
        </div>
        );
    }
}
class FatherSon extends Component {
    state = {
        gettingsFromChild: ''
    }

    handleClick = (title) => {
        this.setState({
            gettingsFromChild: title
        });
    }
    render() {
        return (
            <div className="box blue">
                <Son onSayHello={(val) => this.handleClick(val)} />

                <p>{this.state.gettingsFromChild}</p>
            </div>
        )
    }
}
export default FatherSon;
