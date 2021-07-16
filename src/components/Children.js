import React, { Component } from 'react';
const Title = ({ uiColor, children }) => {
    const styles = {
        padding: '.3em',
        color: '#fff',
        background: uiColor ? uiColor : 'red',
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px',
    }
    return (
        <h1 style={styles}>{children}</h1>
    );
}
class Children extends Component {
    state = {
        color: 'tomato'
    }
    render() {
        const { color } = this.state;
        return (
            <div>
                <Title uiColor={color}>
                    Mathi <em>Ninja 🇫🍝 </em>
                </Title>
            </div>
        );
    }
}
export default Children