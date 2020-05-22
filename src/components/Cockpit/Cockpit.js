import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = props => {
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    console.log("[Cockpit.js] useEffect")
    //to pretend an http req using setTimeout
    // setTimeout(() => {
    //   alert('Data saved to cloud sucessfully')
    // }, 1000)
    //gets executed before the above code

    toggleBtnRef.current.click();

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
  if(props.personsLength <= 2){
    assignedClasses.push(classes.red)
  }
  if(props.personsLength <= 1){
    assignedClasses.push(classes.bold)
  }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>hola como estas !</p>
          <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
          Toggle Persons
          </button>

          {/* <AuthContext.Consumer>
            {(context) => (
                <button onClick={context.login}>
                  Login
                </button>
            )}
          </AuthContext.Consumer> */}
          {/* another way */}
          <button onClick={authContext.login}>Login</button>
      </div>
  )
}

export default React.memo(cockpit)