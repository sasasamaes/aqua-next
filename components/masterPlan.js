import React from 'react'
import { Col } from 'react-bootstrap'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

const MasterPlan = ({ homepage, lg, amenities }) => {
  return (
    <Col lg={lg} className="master-container bg-light " c>
      <Col lg={12} className="master-img">
        <InnerImageZoom src={homepage?.masterPlan?.background.url} />
      </Col>
    </Col>
  )
}

export default MasterPlan
