import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps")
  //   console.log(props)
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate")
    return {message: 'hola'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate")
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount")
  }

  render() {
    console.log("[Persons.js] rendering...")
    return this.props.persons.map((person, index) => {
      return <Person 
        name={person.name}
        click={() => this.props.clicked(index)}
        age={person.age}
        key={person.id}
        nameChange={(event) => this.props.changed(event, person.id)}
      />
    })
  }
}

export default Persons