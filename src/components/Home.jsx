import React from 'react'
import './About.css'
import Services from './Services'
import './Home.css'
import photo1 from '../img/first.jpg'
import photo9 from '../img/second.jpg'

const Home = React.forwardRef((props, ref) => {

  const images = [
    { src: photo1 }
  ]

  return (
    <div className="home-container">
      
      <div className="img-container" ref={ref} >
      {images.map((image, index) => {
        return (
          <img src={image.src} alt={index} key={index} />
        )
      })}
    </div>

    <div className="about home-about">
      <h1>About Us</h1>
      <div className="about-container">
        <p>
        ITECO Nepal (P) Ltd. is an engineering consulting company founded in 3rd May,1987 by the group of experienced professionals. Within a short period, ITECO Nepal has grown into one of the most reputed companies of Nepal. Today it’s activities cover a whole range of services including engineering design and construction, project planning and preparation, institutional buildup, technical assistance and training, advisory services and all aspects of project implementation. ITECO Nepal has an efficient operational system backed by devoted experts with adequate experience. The competence of our staff, our commitment to high standards and our proven ability to tackle complex assignments even under difficult circumstances have been well appreciated by our clients both inside and outside Nepal. ITECO Nepal is leading engineering consulting company in Nepal providing diverse range of services in engineering sector through latest and cutting edge technology. ITECO Nepal has a wealth of experience in the field of project management, transportation, hydro-power, water supply and sanitation, sewerage management, rural and urban infrastructure development, water resources development, social and environment sectors.
        </p>
        <div className="about-img-container">
        <img src={photo9} alt="" />
        </div>
    </div>
    </div>

    <Services />

    </div>
  )
})

export default Home
