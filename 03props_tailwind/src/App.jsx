import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {

  let myObj = {
    username: "dharmen",
    age: 39
  }

  let myArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-600 text-black p-5 rounded-xl mb-5'>Tailwind test</h1>
      <Card name="Tanya" btnText="Click Me"/> {/*obj = {myObj} arr = {myArr}*/}
      <Card name="Anshika" btnText="Visit Me" />
    </>
  )
}

export default App
