import React from 'react'
import { Link } from 'react-router-dom'

import './Project.css'

const Projects = () => {

  const projects = [
    {id: 1,
     title: "Data collection survey on road disaster prevention in Nepal",
     client: "JICA, Nippon Koei",
     status: "completed"
    },
    {id: 2,
     title: "Feasibility Study of Rara Rajmarga Kusepatan Jajarkot (Byaulidhunga) Jumla (Imlicha Khola) Road Tunnel",
     client: "JICA, Nippon Koei",
     status: "completed"
    },
    {id: 3,
     title: "Engineering Design, IEE, TIP Risk Management Plan Development, RAP Development and Implementation Supervision and Construction Supervision for Dhankhola Lamahi Pilot Road Project (40 km)",
     client: "Department of Water Resource and Irrigation	",
     status: "completed"
    },
  ]
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="project-container">
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Projects</th>
              <th>Client</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            
             {projects.map((project, projectIndex) => {
          return (
            <tr key={projectIndex}>
              <td>{project.id}</td>
              <td><Link>{[project.title]}</Link></td>
              <td>{project.client}</td>
              <td>{project.status}</td>
            </tr>
        )})}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Projects
