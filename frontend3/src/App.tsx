import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import {useNavigate, useNavigation} from "react-router-dom"
import Routes from "./routes/App.routes"

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    // navigate("/login")
    //
    }, [])
  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
