import React from 'react'
import './Service.css'

const services = [
  {title: "HYDROPOWER",
    items: [
      "Pre-Feasibility Study of 300+ MW Project",
      "Feasibility Study of 1000+ MW HEP (Around 20 Projects)",
      "Detailed Design of 750+ MW HEP (Around 6 Projects)",
      "Construction Supervision of 138.5 MW HEP (3 Projects)",
      "Commissioning of 27.5 MW HEP (2 Projects)"
    ]
  },
  {title: "BUILDING AND URBAN DEVELOPMENT",
    items: [
      "2 Hospitals totaling 75 bed capacity and 5800 sq.m. built up area (Nuwakot and Mugu)",
      "Road, river training, sewer lines, green belts and allied works for urban river corridor in Kathmandu Valley",
      "4 Lane Urban road of ~3 km in Kathmandu",
      "Upgradation of Master Plan for Bagmati Area Sewerage Project"
    ]
  },
  {title: "WATER SUPPLY AND SANITATION",
    items: [
      "1,700,000+ Design Population",
      "Design and construction supervision (20+ Urban Towns, 40+ Small Towns)",
      "Design of 8 co-finance WSSP",
      "Feasibility Study of 500+ km of Bulk water supply transmission pipeline system"
    ]
  },
  {title: "TRANSMISSION LINE",
    items: [
      "22 km of 220 kV TL Feasibility study and design",
      "Safeguards Implementation and Monitoring works of over 300 km of Transmission line",
      "20-30 km Design of 132 kV TL for various HEPs"
    ]
  },
  {title: "IRRIGATION",
    items: [
      "Design of 1300+m of barrage headworks, 100+km canal and command area of 400,000+Ha",
      "Construction Supervision of 317m barrage with 20 km canal",
      "Irrigation, Water Supply, Hydropower, Recreational projects",
      "230,000+ Ha Command Area, 133+ MW of Power, 40+ km of Tunnel"
    ]
  }
  ,
  {title: "TRANSPORTATION",
    items: [
      "Design of more than 2000 km of roads and construction supervision of more than 1000 km of roads",
      "Feasibility/Design of 300+ bridges and construction supervision of 40+ bridges",
      "Feasibility Study of 12 Road Tunnel"
    ]
  },
  {title: "SPECIALIST AREAS",
    items: [
      "Specialized design, review and construction supervision services in slope stabilization and landslide mitigation projects",
      "Sediment handling projects",
      "Social and environmental analysis",
      "Safeguards Implementation and Monitoring works"
    ]
  },
  {title: "STRATEGIC AREAS",
    items: [
      "Capacity building projects facilitating training related to slope stability, landslide management and other kinds of disaster risk reduction",
      "Strategic plan to provide consulting services in national and regional infrastructures relating to railways, airports, storage type of hydropower, multi-story buildings and road tunnels"
    ]
  }

]

const Services = () => {
  return (
    <div className="service">
      <h1>Services</h1>
      <div className="service-container">
        {services.map((service, serviceIndex) => {
          return (<div className="hover" key={serviceIndex}>
            <div className="service-item">
            <h3 className="title">{service.title}</h3>
            <div>
              <ul>
                {service.items.map((item, itemIndex) => {
                  return (<li key={itemIndex}>{item}</li>)
                })}
              </ul>
            </div>
            </div>
  
          </div>)
        })}
      </div>
      
    </div>
  )
}

export default Services
