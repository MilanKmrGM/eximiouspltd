import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/login'
import './Users.css'

const Users = () => {
    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
       async function fetchData() {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
            navigate('/login')
            return
            }
            try {

                const response = await api.get('/users', {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    }
                })
            if(response.data) {
                setUsers(response.data)
                setIsLoading(false)
                console.log(response.data)
            }
            } catch (error) {
                console.error(error)
                navigate('/login')
            }
        }
        fetchData()
    }, [navigate])
 
 

  return (
    <div className="users">
        <h1>Users</h1>
        <div className="users-container">
        
            { (isLoading) ?
                 (
                    <div>Loading...</div>
                ): 
               
                     (
                        <ul>{users.map((user) => {
                            return (
                                <li key={user.email}>
                                    {user.email}..............{user.roles.join(' , ')}
                                </li>
                            )
                        } ) }
                        </ul>
                    )
                }
        </div>
    </div>
  )
}

export default Users
