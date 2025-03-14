
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (
    <Usercontextprovider>
      <h1>i am harsh</h1>
      <Login />
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
