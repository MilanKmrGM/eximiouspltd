import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'
import api from '../api/login'
import RefreshToken from './RefreshToken'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        const loginObject = {email, password }
      const response = await api.post('/login', loginObject, {withCredentials: true})

      console.log("I am Milan", response.data, response.data.accessToken)

      if(response.status === 200) {
        const accessToken = response.data.accessToken 
        localStorage.setItem("accessToken", accessToken)
        navigate('/blog')
      }
      
      } catch (error) {
        console.error(error)
      }

      
    }

  return (
    <div className="login">
        <h1>Login</h1>
        <div className="form-container">
        <form action="" className="login-form">
            <div className="email">
            <label htmlFor="email">Email: </label>
            <input 
            type="email" 
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            
            <div className="password">
            <label htmlFor="password">Password: </label>
            <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <button className="submit" onClick={onSubmit}>Submit</button>
    
        </form>
        
        <RefreshToken />
      
    </div>
    </div>
  )
}

export default Login
