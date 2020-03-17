import React, { Component } from 'react'
import classes from './Person.css'

class Person extends Component {
    render() {
        console.log("[Person.js] rendering...")
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>this is {this.props.name} of {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.nameChange} value={this.props.name} />
            </div>
        )
    }
}

export default Person;