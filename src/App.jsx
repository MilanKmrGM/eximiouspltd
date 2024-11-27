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
import Contact from './components/Contact'

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
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
