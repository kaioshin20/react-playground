import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id: "ka", name: "Rajat", age: 21},
      {id: "me", name: "Kunal", age: 23},
      {id: "ha", name: "Kartik", age: 30}
    ],
    showPersons: false
  }

  showPersonsHandler = () => {
    const toggle = this.state.showPersons
    this.setState({showPersons: !toggle})
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  namechangeHandler = (event, pid) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === pid
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name=event.target.value

    const persons = [...this.state.persons]
    persons[personIndex]=person

    this.setState({ persons: persons})
  }

  render() {
    let persons = null

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.namechangeHandler} />
        </div>
      )
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.showPersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
