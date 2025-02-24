import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './AddNewUser.css'
import api from '../api/login'

const AddNewUser = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [configureRoles, setConfigureRoles] = useState('')
    const [roles, setRoles] = useState([])

    const onSubmit = async (e) => {
      e.preventDefault()
      const accessToken = localStorage.getItem("accessToken")
      if(!accessToken) {
        navigate('/login')
        return
      }
      try {
        const newUserObject = {email, password, roles }
      const response = await api.post('/users', newUserObject, {
        withCredentials: true,
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
      })

      console.log("I am Milan", response.data, response.data.accessToken)

      if(response.status === 201 && response.data) {
        console.log(response.data)
        navigate('/blog')
      }
      
      } catch (error) {
        console.error(error)
      }
    }
    

   const handleRolesInput = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value)
    setRoles(selectedOptions)
    
   }
   console.log(roles)

  return (
    <div className="createNewUser">
        <h1>Create New User</h1>
        <div className="form-container">
        <form action="" className="user-form">
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
            
            <div className="roles">
            <label htmlFor="roles">Roles: </label>
            <select 
            multiple
            id="roles"
            value={roles}
            onChange={handleRolesInput}
            >
              <option value="admin">Admin</option>
              <option value="member">Member</option>
              <option value="viewer">Viewer</option>
            </select>
            </div>

            <button className="submit" onClick={onSubmit}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default AddNewUser
