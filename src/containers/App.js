import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../components/hoc/WithClass'

class App extends Component {
  constructor(props) {
    super(props)
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
      {id: "ka", name: "Rajat", age: 21},
      {id: "me", name: "Kunal", age: 23},
      {id: "ha", name: "Kartik", age: 30}
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps")
    console.log(props)
    return state
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate")
    return true
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate")
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
    console.log("[App.js] render")

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
      <WithClass classes={classes.App}>
        <button onClick={() => this.setState({showCockpit: false})}>Show Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.showPersonsHandler} /> : null}
        {persons}
      </WithClass>
    );
  }
}

export default App;
