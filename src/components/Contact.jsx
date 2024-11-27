import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        126 Green House, Bhadrabinayak Marga,<br />
        Thapagaun, New Baneshwor<br />
        Kathmandu, Nepal<br />
        Phone:+977-1-5244139<br />
        Office hours: Sun-Fri, 10 am to 5 pm<br />
        Email: cms@cmsnepal.org.np<br />

      </p>
      <div className="social-media">
              <ul>
              <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} className="custom-icon" /></a></li>
              <li><a href="https://twitter.com"><FontAwesomeIcon icon={faInstagram} className="custom-icon" /></a></li>
              <li><a href="https://instagram.com"><FontAwesomeIcon icon={faTwitter} className="custom-icon" /></a></li>
              </ul>
            </div>
    </div>
  )
}

export default Contact
