import React, { useContext,useState } from 'react'
import UserContext from '../Context/Usercontext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const{setUser} = useContext(UserContext)


    const handleLogin = (e) =>{
      e.preventDefault()
      if (username && password) {
      setUser({username, password})}
    }
  return (
    <div>
        <h2>LogIn</h2>
        <input type='text' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username or emailId' />
        <br />
        <br />
        <input type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' />
        <br />
        <br />
        <button onClick={handleLogin} >LogIn</button>
    </div>
  )
}

export default Login