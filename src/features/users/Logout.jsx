import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"

import api from '../api/login'

const Logout = () => {

    const navigate = useNavigate()

  const handleLogout = async () => {
    try {
        const response = await api.post("/login/logout", {}, {withCredentials: true})
        if(response.data) {
          console.log(response.data)
            localStorage.removeItem('accessToken')
            navigate('/blog')
            
        }
        
        
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <button>
       <FontAwesomeIcon 
       icon={faSignOutAlt} 
       size="lg" 
       style={{ color: 'white' }} 
       onClick={handleLogout}
       />
    </button>
  )
}

export default Logout
