import { useRef, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Login from './features/users/Login'
import Contact from './components/Contact'
import Users from './features/users/Users'
import AddNewBlog from './features/blogs/AddNewBlog'
import EditBlog from './features/blogs/EditBlog'
import BlogPage from './features/blogs/BlogPage'
import AddNewUser from './features/users/AddNewUser'

function App() {

  const headerRef = useRef(null)
  const imgContainerRef = useRef(null)

  return (
    <>
      <Header ref={headerRef} />
      <Routes>
        <Route path="/" element={<Layout />} >
        
          <Route index element={<Home ref={imgContainerRef} />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />

          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path="post" element={<AddNewBlog />} />
            <Route path=":id" element={<BlogPage />} />
            <Route path="edit">
              <Route path=":id" element={<EditBlog />} />
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
          
          <Route path="users">
          <Route index element={<Users />} />
          <Route path="post" element={<AddNewUser />} />
          </Route>
          
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
