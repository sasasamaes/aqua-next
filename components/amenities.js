import { useState } from 'react'
import { Row, Col, Modal } from 'react-bootstrap'
import AmenitySlider from './amenitySlider'
import Image from 'next/image'

const Amenities = ({ amenities, lg }) => {
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState({ modal: undefined })

  const handleClose = () => setShow(false)

  const handleShow = (amenity) => {
    setModal({ modal: amenity?.modal?.url, caption: amenity?.modal?.caption })
    setShow(true)
  }

  return (
    <Col lg={lg} className="amenities-container bg-light">
      <Col lg={5} md={12} xs={12} className="amenities-menu">
        <Row>
          {amenities &&
            amenities?.map((amenity, index) => (
              <Col
                lg={3}
                md={6}
                xs={12}
                key={`amanity-${index}`}
                className="amenity"
                onClick={() => handleShow(amenity)}
              >
                <h3>{amenity.title}</h3>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '20%',
                  }}
                >
                  <Image
                    src={amenity.icon?.url}
                    alt={amenity.icon?.caption}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Col>
            ))}
        </Row>
      </Col>
      <Col lg={6} md={12} xs={12} className="amenities-slider">
        <AmenitySlider amenities={amenities} />
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Col>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '20%',
              }}
            >
              <Image
                src={modal?.modal}
                alt={modal?.caption}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Col>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default Amenities
