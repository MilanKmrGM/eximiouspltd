import {Link, useLocation} from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

const Footer = () => {

 const {pathname} = useLocation()

  return (
    <footer className="footer">
      {/* <div className="container"> */}
        <div className="footer-content">
          {/* contact section */}
          <div className="footer-section">
          <h3><Link to="/contact">Contact Us</Link></h3>
          <ul>
            <li><FontAwesomeIcon icon={faLocationPin} className="custom-icon" /> Location: Kathmandu, Nepal</li>
            <li><FontAwesomeIcon icon={faPhone} className="custom-icon" /> Phone: +1234567890</li>
            <li><FontAwesomeIcon icon={faGoogle} className="custom-icon" /> Email: example@gmail.com</li>
          </ul>
          </div>
          
          {/* Copyright Section */}
          <div className="footer-bottom">
            <p>&copy; {format(new Date(),  'yyyy')} Eximious Engineering Consultancy</p>
            <p>All rights reserved</p>
          </div>

        </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer
