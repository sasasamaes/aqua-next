import { Carousel, Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const HomeSlider = ({ homeSlider, lg }) => {
  return (
    <Col lg={lg} className="slider-container">
      <Col lg={12} className="text-light slide-container">
        <div className="image-container">
          <Image
            src={homeSlider[0].background?.url}
            alt={homeSlider[0].background?.caption}
            layout="fill"
            className="image"
          />
        </div>
      </Col>
      <Col lg={12} className="social-container">
        <Row>
          <Col lg={3} className="text-center">
            <span>
              <i className="fa fa-facebook-f"></i>
            </span>
          </Col>
          <Col lg={3} className="text-center">
            <span href="#">
              <i className="fa fa-instagram"></i>
            </span>
          </Col>
          <Col lg={3} className="text-center">
            <span>
              <i className="fa fa-twitter"></i>
            </span>
          </Col>
          <Col lg={3} className="text-center">
            <span>
              <i className="fa fa-car"></i>
            </span>
          </Col>
          <Col lg={12} className="text-center">
            8394-2641 / 8667-3197
          </Col>
          <Col lg={12} className="text-center">
            La Guacima a 1,4km de la ruta 27
          </Col>
        </Row>
      </Col>
    </Col>
  )
}

export default HomeSlider
