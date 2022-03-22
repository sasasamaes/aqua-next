import React from 'react'
import { Col } from 'react-bootstrap'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

const Maps = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="maps-container bg-dark text-light">
      <InnerImageZoom src={homepage?.maps?.background.url} />
    </Col>
  )
}

export default Maps
