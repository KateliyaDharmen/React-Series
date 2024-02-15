import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//if <App /> is a function then i can also write my custom function here.
function MyApp (){
  return(
    <>
    <a href='https://google.com'>Visit Google</a>
    </>
  )
}

// const reactElement = {
//   type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com'>Visit Google</a>
)

const anotherUser = "dk"
const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

