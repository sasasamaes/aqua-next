import { Col, Button } from 'react-bootstrap'
import Image from 'next/image'

const Banner = ({ homepage, lg, global }) => {
  return (
    <Col lg={lg} className="banner-container bg-dark text-light">
      <Col lg={4} className="banner-container-img">
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '20%',
          }}
        >
          <img src={global?.logo2?.url} alt={global?.logo2?.caption} />
        </div>
      </Col>
      <Col lg={6} className="banner-container-text">
        <Col lg={6}>
          {/* <h3>{homepage && homepage.attributes.banner.titulo}</h3> */}
          <h3>Veni conocenos y reserva el tuyo</h3>
        </Col>
        <Col lg={4}>
          <a href="#form">
            <Button variant="primary" type="submit">
              {/* {homepage && homepage.attributes.banner.boton} */}
              Contactanos
            </Button>
          </a>
        </Col>
      </Col>
    </Col>
  )
}

export default Banner
