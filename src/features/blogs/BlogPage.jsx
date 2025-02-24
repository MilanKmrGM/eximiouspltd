import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import './BlogPage.css'
import api from '../api/login'

const BlogPage = () => {

  const { id } = useParams()
  console.log(id)
  
  const [blog, setBlog] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get(`blogs/${id}`)
        if(response.data) {
          setBlog(response.data)
          
          console.log(response.data)
        }
      } catch (error) {
        console.log(error)
        navigate('/blog')
      } finally {
        setIsLoading(false)
      }

    }
    fetchPosts()
  }, [navigate, id])

  const handleDelete = async () => {
   try {
    const accessToken = localStorage.getItem("accessToken")
    if(!accessToken) {
      navigate('/login')
    }
    const response = await api.delete(`/blogs/${id}`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    })
    if(response.data) {
      console.log(response.data)
      navigate('/blog')
    }
   } catch (error) {
    console.error(error)
   }

  }

  return (
    <div className="blog-page">
      
      <h1>
        BlogPage
      </h1>
      
      <div className="blog-page-container">
        { isLoading ? (
           <h2>Loading...</h2>
        ) : (
             <div className="blog-item">
             <div className="blog-img-container">
             <img src={`http://localhost:3500/${blog.image.replace(/\\/g, '/')}`} alt="" />
             </div>
             <div className="blog-detail">
             <h3>{blog.title}</h3>
             <div 
             className='blog-content'
             dangerouslySetInnerHTML={{__html: blog.content}}
             />

             <button className="edit">
             <Link 
             to={`/blog/edit/${id}`}
             className="edit"
             >Edit</Link>
             </button>

             <button 
             className="delete"
             type="button"
             onClick={handleDelete}
             >Delete</button>
             </div>
   
           </div>)
  }
      </div>
      
    </div>
  )
}

export default BlogPage
