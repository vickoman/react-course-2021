import React, { Component } from 'react';

class Contador extends Component {
    state = {
        video: {
            title: 'Video de prueba',
            likes: 0
        }
    }

    add = () => {
        this.setState((prevState, props) => ({
            video: {
                ...prevState.video,
                likes: prevState.video.likes + 1
            }
        }));
    }

    render() {
        return (
            <div>
                <h3>{ this.state.video.title }</h3>
                <button onClick={this.add}>
                    Clicks: ({this.state.video.likes})
                </button>
            </div>
        );
    }
}
export default Contador;
