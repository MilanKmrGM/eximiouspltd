import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Blog.css'
import api from '../features/api/login'

const Blogs = () => {
  
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await api.get('/blogs')
        if(response.data && response.status === 200) {
          setBlogs(response.data)
          
          console.log(response.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }

    }
    fetchPosts()
  }, [navigate])
  
  if(isLoading) {
    return (
      <h2>Loading...</h2>
   ) 
  }

  return (
    <div className="blog">
      
      <h1>
        Blogs
      </h1>
      
      <div className="blog-container">
        { (
          blogs.map((blog, index) => {

            const imagePath = blog.image.replace(/\\/g, '/')
            const fullImagePath = `http://localhost:3500/${imagePath}`
            return (<Link to={`/blog/${blog._id}`} className="blog-item" key={index}>
             <div className="blog-img-container">
             <img src={fullImagePath} alt="" />
             </div>
             <div className="blog-detail">
             <h3>{blog.title}</h3>
             <p 
             dangerouslySetInnerHTML={{__html: blog.content.substring(0, 100)}}
             />
             </div>

   
           </Link>)
         })

  )}
        <button><Link to="/blog/post">Add New Post</Link></button>
      </div>
      
    </div>
  )
}

export default Blogs
