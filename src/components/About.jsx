import React from 'react'

import photo2 from '../img/second.jpg'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-container">
        <p>
        ITECO Nepal (P) Ltd. is an engineering consulting company founded in 3rd May,1987 by the group of experienced professionals. Within a short period, ITECO Nepal has grown into one of the most reputed companies of Nepal. Today it’s activities cover a whole range of services including engineering design and construction, project planning and preparation, institutional buildup, technical assistance and training, advisory services and all aspects of project implementation. ITECO Nepal has an efficient operational system backed by devoted experts with adequate experience. The competence of our staff, our commitment to high standards and our proven ability to tackle complex assignments even under difficult circumstances have been well appreciated by our clients both inside and outside Nepal. ITECO Nepal is leading engineering consulting company in Nepal providing diverse range of services in engineering sector through latest and cutting edge technology. ITECO Nepal has a wealth of experience in the field of project management, transportation, hydro-power, water supply and sanitation, sewerage management, rural and urban infrastructure development, water resources development, social and environment sectors.
        </p>
        <div className="about-img-container">
        <img src={photo2} alt="" />
        </div>
      </div>

      <div className="about-bottom">
        <div className="vision">
          <h3>Our Vision</h3>
          <div>
            <ul>
              <li>To be renowned for our working methodologies, and human resource capabilities.</li>
              <li>To provide complete engineering solutions from project identification to handover in sectors of energy, water resource management and transportation.</li>
              <li>To provide integrated investigations & research services in survey & mapping, hydrology & sediment and geological explorations in all type of projects.</li>
            </ul>

          </div>

        </div>
        <div className="mission">
        <h3>Our Mission</h3>
          <div>
            <ul>
              <li>Adopt our clients’ environmental challenges as our own.</li>
              <li>Foster a culture of success for employees by sharing equity ownership and rewarding employees when our clients and company succeed.</li>
              <li>Promote a sustainable environment through innovation and the creative application of technology and management strategies.</li>
              <li>Grow our business profitably.</li>
            </ul>

          </div>

        </div>
        <div className="values">
        <h3>Our Values</h3>
          <div>
            <ul>
              <li>Committed to people’s safety, to caring for the environment and community development.</li>
              <li>Foster employee welfare, with both professional and personal growth.</li>
              <li>Transparency and professionalism in management.</li>
              <li>Promote professionalism and integrity. Be honest, fair, and ethical.</li>
              <li>Human resources development and knowledge building.</li>
            </ul>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default About
