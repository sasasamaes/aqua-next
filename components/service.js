import React from 'react'
import { Col } from 'react-bootstrap'

const ServiceComponent = ({ services, lg }) => {
  return (
    <Col lg={lg} className="service-container bg-dark">
      {services &&
        services.map((service, index) => (
          <Col className="service-item" key={`service-item-${index}`}>
            <h3>{service.title}</h3>
          </Col>
        ))}
    </Col>
  )
}

export default ServiceComponent
