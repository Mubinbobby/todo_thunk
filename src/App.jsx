import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Provider store={store}>
    <Todo/>
    </Provider>
  

    </>
  )
}

export default App
