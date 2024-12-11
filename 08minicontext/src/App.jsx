import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UsercontextProvider'

function App() {

  return (
    <UserContextProvider>
    <h1>React</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
