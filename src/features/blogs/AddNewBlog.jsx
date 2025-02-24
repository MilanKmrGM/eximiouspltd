/* import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'

import './AddNewBlog.css'
import api from '../api/login'

const AddNewBlog = () => {
   const navigate = useNavigate()

   const accessToken = localStorage.getItem('accessToken')
      if(!accessToken) {
        navigate('/login')
      }

    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null) //updated to store the file object

    const onSubmit = async (e) => {
      e.preventDefault()
      try {

        const formData = new FormData()
        formData.append("user", user)
        formData.append("title", title)
        formData.append("content", content)
        if(image) {
          formData.append("image", image)  //add the file to FormData
        }

      const response = await api.post('/blogs', formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': "multipart/form-data",  //explicitly set the content-type
        }
      })
      if(response.status === 201) {
        navigate('/blog')
      }
      
      } catch (error) {
        console.error(error)
        navigate('/login')
      }

      
    }

  return (
    <div className="newBlog">
        <h1>AddNewBlog</h1>
        <div className="form-container">
        <form action="" className="blog-form" onSubmit={onSubmit} >
            <div className="user">
            <label htmlFor="user">User: </label>
            <input 
            type="text" 
            id="user"
            placeholder="9845364fkldg"
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
            placeholder="example.png"
    
            onChange={(e) => setImage(e.target.files[0])}  //store file object
            />
            </div>

            <button className="submit" type="submit">Submit</button>
        </form>
      
    </div>
    </div>
  )
}

export default AddNewBlog */
