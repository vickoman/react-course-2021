import React, { Component } from 'react';

const styles = {
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box',
    width: '300px',
    margin: '0 auto'

};
class BoxEvent extends Component {
    state = {
        x: 0,
        y:0
    }
    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render() {
        return (
            <div style={styles} onMouseMove={this.handleMouseMove}>
                <h3>Box</h3>
                <div>
                X: {this.state.x}
                </div>
                <div>
                Y: {this.state.y}
                </div>
            </div>
        )
    }
}
export default BoxEvent;
