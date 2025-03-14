import React,{useContext} from 'react'
import Usercontext from '../context/Usercontext'
function Profile() {
    const {user} = useContext(Usercontext)

  if(!user) return <div>please login</div>

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.username}</p>
      <p>password: {user.password}</p>
    </div>
  )
}

export default Profile
