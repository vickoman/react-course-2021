import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string,
        age: PropTypes.number
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.bio}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}
class PropsValidation extends Component {
    render() {
        return (
            <div>
                <Profile 
                    name="John Doe"
                    bio="I am John Doe"
                    age={33}
                />
            </div>
        )
    }
}

export default PropsValidation;