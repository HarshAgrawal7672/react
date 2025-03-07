import { useState } from 'react'
import './App.css'

function App() {
    const [color,setcolor]=useState('white')
  function handlebg(e){
    setcolor(e.target.id)
  }

  return (

    <div className='h-screen w-screen' style={{backgroundColor:color}}>


      <div className='border-4 m-5 p-1.5 flex justify-center fixed  bottom-8 inset-x-0  bg-white rounded-2xl '>
        <button id="red" className='bg-red-500 m-2.5 p-3.5 rounded-xl ' onClick={handlebg}> red </button>
        <button id="black"className='bg-black text-white m-2.5 p-3.5 rounded-xl'onClick={handlebg}> black </button>
        <button id="green"className='bg-green-500 m-2.5 p-3.5 rounded-xl'onClick={handlebg}> green </button>
        <button id="yellow"className='bg-yellow-500 m-2.5 p-3.5 rounded-xl'onClick={handlebg}> yellow </button>
        <button id="orange"className='bg-orange-500 m-2.5 p-3.5 rounded-xl'onClick={handlebg}> orange  </button>
        <button id="blue"className='bg-blue-500 m-2.5 p-3.5 rounded-xl'onClick={handlebg}> blue  </button>
        <button id="pink"className='bg-pink-500 m-2.5 p-3.5 rounded-xl'onClick={handlebg}> pink </button>
      </div>


    </div>
  )
}

export default App
