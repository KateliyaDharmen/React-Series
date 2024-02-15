import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  //useState: it can change the state and update the UI

  //     variable, method/function
  let [counter,setCounter] = useState(0) //default value can be anything string, num, null etc...

  //let counter = 5;

  const addValue = () => {
    // console.log("value added", counter);
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    // console.log("value removed",Math.random());
    if(counter>0){
      setCounter(counter - 1);
    } 
  }
  
  return (
    <>
     <h1>Hello React</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove value {counter}</button>

     <p>footer: {counter}</p>
    </>
  )
}

export default App

//why you need hooks

//here in this counter project, if i change a variable which reflect many place in the UI
//but it cannot update on the UI. variable is change internally but not update in the UI
//so, now React library give us property called 'hooks' in which when variables are 
//update then it also update the UI with the help of hooks property

//Upadation of UI is controlled by React