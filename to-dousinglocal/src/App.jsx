import { useEffect, useState } from 'react'
import { Todoprovider } from './context/Todocontext'
import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitem'


function App() {
  
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const updateTodo=(id,todo)=>{
    setTodos(prev=>prev.map(item=>item.id===id? {...item,todo}:item))
  }

  const deleteTodo=(id)=>{
    setTodos(prev=>prev.filter(item=>item.id!==id))
  }

  const toggleTodo=(id)=>{
    setTodos(prev=>prev.map(item=>item.id===id? {...item,completed:!item.completed}:item))
  }


  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos")|| [])
    
      setTodos(todos)
    
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <Todoprovider value={{todos,addTodo,deleteTodo,updateTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo} />

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
