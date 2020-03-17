import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    //to pretend an http req using setTimeout
    setTimeout(() => {
      alert('Data saved to cloud sucessfully')
    }, 1000)
    //gets executed before the above code
    return () => {
      console.log("[Cockpit.js] Doing some cleanup work")
    }
  }, [])
  //second argument of useEffect takes array of elements for which it should execute
  //if empty, only runs once

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect")
    return () => {
      console.log("[Cockpit.js] Doing some cleanup work in 2nd useEffect")
    }
  })

  let btnClass=''

  if(props.showPersons){
      btnClass = classes.red
  }

  let assignedClasses=[]
  if(props.persons.length <= 2){
    assignedClasses.push(classes.red)
  }
  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold)
  }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>hola como estas !</p>
          <button className={btnClass} onClick={props.clicked}>
          Toggle Persons
          </button>
      </div>
  )
}

export default cockpit