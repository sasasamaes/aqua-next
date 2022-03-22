import { Carousel, Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const HomeSlider = ({ homeSlider, lg }) => {
  return (
    <Col lg={lg} className="slider-container text-light">
      <Carousel fade indicators={false}>
        {homeSlider &&
          homeSlider?.map((slide, index) => (
            <Carousel.Item key={`slide-${index}`}>
              <Image
                className="d-block w-100"
                src={slide.background?.url}
                alt={slide.background?.caption}
                layout="fill"
                objectFit="contain"
              />
            </Carousel.Item>
          ))}
      </Carousel>
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
