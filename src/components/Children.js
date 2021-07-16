import React, { Component } from 'react';
const Title = (props) => {
    const styles = {
        padding: '.3em',
        color: '#fff',
        background: props.uiColor ? props.uiColor : 'red',
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px',
    }
    return (
        <h1 style={styles}>{props.children}</h1>
    );
}
class Children extends Component {
    render() {
        return (
            <div>
                <Title uiColor='purple'>
                    Mathi <em>Ninja 🇫🍝 </em>
                </Title>
            </div>
        );
    }
}
export default Children