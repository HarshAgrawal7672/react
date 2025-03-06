import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add=function(){
    setCount(count + 1)
  }
  const sub=function(){
    if(count <= 0){
      alert('count must be greater than zero')
    }else{
      setCount(count - 1)
    }
    }

  return (
    <>
      <div className='Container'>
        <p>counter value:{count}</p>
        <button onClick={add}>add value</button>
        <button onClick={sub}>sub value</button>
      </div>
    </>
  )
}

export default App
