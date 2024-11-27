import React from 'react'
import { Link } from 'react-router-dom'

import './Blog.css'
import photo3 from '../img/first.jpg'
import photo4 from '../img/second.jpg'
import photo5 from '../img/third.jpg'
import photo6 from '../img/forth.jpg'
import photo7 from '../img/first.jpg'

const Blogs = () => {

  const cards = [
    {title: "Hellow Everyone",
      img: photo3,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto veritatis ratione aut molestiae officiis laborum incidunt culpa et molestias sequi, quisquam officia? Repudiandae, adipisci voluptatem! Rerum ea obcaecati nam!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo esse quia similique reiciendis debitis ipsam praesentium dignissimos ea ipsum cum, nobis perferendis aspernatur ullam perspiciatis facilis, repellat dicta impedit. In?"
    },
    {title: "Good Morning",
      img: photo4,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto veritatis "
    },
    {title: "Let's play holy",
      img: photo5,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto veritatis ratione aut molestiae officiis laborum incidunt culpa et molestias sequi, quisquam officia? Repudiandae, adipisci voluptatem! Rerum ea obcaecati nam!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo esse quia similique reiciendis debitis ipsam praesentium dignissimos ea ipsum cum, nobis perferendis aspernatur ullam perspiciatis facilis, repellat dicta impedit. In?"
    },
    {title: "Happy new year",
      img: photo6,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto veritatis ratione aut molestiae officiis laborum incidunt culpa et molestias sequi, quisquam officia? Repudiandae, adipisci voluptatem! Rerum ea obcaecati nam!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo esse quia similique reiciendis debitis ipsam praesentium dignissimos ea ipsum cum, nobis perferendis aspernatur ullam perspiciatis facilis, repellat dicta impedit. In?"
    },
    {title: "Good Afternoon",
      img: photo7,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis architecto veritatis ratione aut molestiae officiis laborum incidunt culpa et molestias sequi, quisquam officia? Repudiandae, adipisci voluptatem! Rerum ea obcaecati nam!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo esse quia similique reiciendis debitis ipsam praesentium dignissimos ea ipsum cum, nobis perferendis aspernatur ullam perspiciatis facilis, repellat dicta impedit. In?"
    }
  ]
  return (
    <div className="blog">
      <h1>Blogs</h1>
      <div className="card-container">
        {cards.map((card, cardIndex) => {
          return (<div className="card-item" key={cardIndex}>
            <div className="card-img-container">
            <img src={card.img} alt="" />
            </div>
            <div className="card-detail">
            <h3><Link>{card.title}</Link></h3>
            <p>{card.content.substring(0, 100)}</p>
            </div>
  
          </div>)
        })}
      </div>
      
    </div>
  )
}

export default Blogs
