import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './Person.css'
import withClass from '../../hoc/withClass'

class Person extends Component {
    render() {
        console.log("[Person.js] rendering...")
        return (
            //we can also use React.Fragment instead of Aux component
            <Aux>
                <p onClick={this.props.click}>this is {this.props.name} of {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.nameChange} value={this.props.name} />
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person);