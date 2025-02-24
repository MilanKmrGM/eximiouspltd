/* import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import './EditBlog.css'
import api from '../api/login'

const EditBlog = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [currentUser, setCurrentUser] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)
    const [accessToken, setAccessToken] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      async function fetchData() {
        try {
        try {
          //fetch blog
          var blogResponse = await api.get(`blogs/${id}`)
        if(blogResponse.data) {
          setTitle(blogResponse.data.title)
          setContent(blogResponse.data.content)
          setImage(blogResponse.data.image)
          setCurrentUser(blogResponse.data.user)
          console.log(blogResponse.data)
        }
        } catch (error) {
          console.log(error)
        }
       try {
         //fetch user
         const token = localStorage.getItem('accessToken')
         if(!token) {
           console.log("I am from editBlog page first")
           navigate('/login')
           console.log("i am from editBLog page 2")
           return
         } else {
           setAccessToken(token)
         }
         console.log(blogResponse.data.user, " from here")
         const response = await api.get(`/users/${blogResponse.data.user}`, {
           headers: {
             'Authorization': `Bearer ${token}`
           }
         })
         if(response.data) {
           console.log(response.data, "is user even there?")
           setEmail(response.data.email)
         } 
       } catch (error) {
        navigate('/login')
       }
        } catch (error) {
          console.error(error)
        } finally {
          setIsLoading(false)
        }
      }
        fetchData()
    }, [navigate, id])



    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        const formData = new FormData()
        formData.append("user", currentUser)
        formData.append("title", title)
        formData.append("content", content)
        if(image) {
          formData.append("image", image)
        }
        const response = await api.put(`/blogs/${id}`, formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          "Content-Type": 'multipart/form-data'
        }
      })
      console.log("I am Milan", response.data, response.status)
      if(response.data) {
        navigate('/blog')
      }
      } catch (error) {
        console.error(error)
      }

      
    }

  return (
    <div className="editBlog">
        <h1>EditBlog</h1>
        <div className="form-container">
        {(isLoading) ? (
          <h2>Loading...</h2>
        ): (
          <form onSubmit={onSubmit} className="blog-form">
            <div className="user">
            <label htmlFor="user">User: </label>
            <input 
            type="text" 
            id="user"
            placeholder="9845364fkldg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="title">
            <label htmlFor="title">Title: </label>
            <input 
            type="text" 
            id="title"
            placeholder="my country"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            
            <div className="content">
            <label htmlFor="content">Content: </label>
            <ReactQuill 
            theme="snow"
            id="content"
            value={content}
            onChange={(value) => setContent(value)}
            />
            </div>
            
            <div className="image">
            <label htmlFor="image">Image: </label>
            <input 
            type="file" 
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            />
            </div>

            <button className="submit" type="submit" >Save Edit</button>
        </form>
        )}
      
    </div>
    </div>
  )
}

export default EditBlog */
