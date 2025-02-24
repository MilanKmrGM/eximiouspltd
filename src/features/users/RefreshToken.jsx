import { useNavigate } from 'react-router-dom'
import api from '../api/login'

const RefreshToken = () => {

    const navigate = useNavigate()

   const handleRefreshToken = async () => {
    try {
        console.log('refreshing...')
        const response = await api.get('/login/refresh', {withCredentials: true})
        console.log(response.data)
        if(response.data) {
            console.log("New accessToken ", response.data)
            localStorage.setItem("accessToken", response.data.accessToken)
            if(window.history.length>1) {
                navigate(-1)
            }
        }
    } catch (error) {
        console.log("From here")
        console.error(error)
        navigate('/login')
    }
   }
  return (
    <button
    onClick={handleRefreshToken}
    >
    Refresh Token
    </button>
  )
}

export default RefreshToken
