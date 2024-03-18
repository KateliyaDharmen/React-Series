import { Provider } from 'react-redux'
import "./App.css"
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'
import { store } from './app/store'

function App() {
  
  return (
    <Provider store={store}>
      <h1>Learn About Redux and Redux Toolkit</h1>
      <AddTodo />
      <TodosList />
    </Provider>
  )
}

export default App
