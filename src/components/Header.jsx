import React from 'react'
import {Link, useLocation, useMatch} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './Header.css'
import photo8 from '../img/third.jpg'
import Logout from '../features/users/Logout'

const Header = React.forwardRef((props, ref) => {

  const location = useLocation()
  const {pathname} = location
  const isBlogId = useMatch('/blog/:id')
  const isBlogEditId = useMatch('/blog/edit/:id')

  return (
    <header className="header" ref={ref} >
        <div className="container">
            <div className="logo">
                <img src={photo8} alt="consultancy logo" />
                <h1>Eximious Consultancy</h1>
            </div>

            <nav className="nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                {/* <li><Link to="/blog">Blogs</Link></li> */}
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>

            <div className="social-media-header">
              <ul>
              <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} className="custom-icon" /></a></li>
              <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="custom-icon" /></a></li>
              <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} className="custom-icon" /></a></li>
              {/* {(pathname==="/blog") && (
                <li><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} size="lg" style={{ color: 'white' }} /></Link></li> 
              ) } */}
             {/* { (
              isBlogId || pathname===`/blog/post` || isBlogEditId) && (
                <li><Logout /></li> 
              )
              } */}
             
              </ul>
            </div>

        </div>
      
    </header>
  )
})

export default Header
