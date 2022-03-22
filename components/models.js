import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const Models = ({ models, lg, md }) => {
  return (
    <Col lg={lg} className="models-container bg-dark text-light">
      <h2>Facilitamos la mejor opción para que establezca su hogar</h2>
      <Row>
        <Col className="models-menu">
          <Row>
            {models &&
              models.map((model, index) => (
                <Col
                  lg={3}
                  md={12}
                  xs={12}
                  className="model-item"
                  key={`model-item-${index}`}
                >
                  <h3>{model.title}</h3>
                  <p>{model.price}</p>
                  <p>{model.description}</p>
                  {/* <Link to={`model/${model.id}`}> */}
                  <Button variant="primary">Ver Plano</Button>
                  {/* </Link> */}
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Models
