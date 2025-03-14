import React,{useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'
function Login() {
    const [password,setPassword]=useState("")
    const [username,setUsername]=useState("")
    const {setUser}=useContext(Usercontext)
    const Handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"  value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='Username' />
      <input type="text" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Password' />
      <button onClick={Handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
