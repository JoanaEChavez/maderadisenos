import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/itemListContainer/itemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      
    </>
  )
}

export default App
