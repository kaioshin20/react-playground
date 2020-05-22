import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './Person.css'
import withClass from '../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    componentDidMount(){
        this.inputElement.focus();
    }

    static contextType = AuthContext

    render() {
        console.log("[Person.js] rendering...")
        return (
            //we can also use React.Fragment instead of Aux component
            <Aux>
                {/* one way */}
                {/* <AuthContext.Consumer>
                    {(context) => (
                        context.authenticated ? <p>Authenticated!</p> : <p>Go Login !</p>
                    )}
                </AuthContext.Consumer> */}
                {/* alternate way */}
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Go Login !</p>}

                <p onClick={this.props.click}>this is {this.props.name} of {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    ref={(inputEl) => {this.inputElement = inputEl}} 
                    onChange={this.props.nameChange} 
                    value={this.props.name} 
                />
            </Aux>
        )
    }
}

export default withClass(Person, classes.Person);