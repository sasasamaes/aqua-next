import { Col } from 'react-bootstrap'
import Image from 'next/image'

const Section1 = ({ homepage, lg }) => {
  return (
    <Col
      lg={lg}
      className="section1-container bg-dark text-light "
      style={{
        position: 'relative',
        paddingBottom: '20%',
      }}
    >
      <Image
        src={homepage?.section1?.background.url}
        alt={homepage?.section1?.background.caption}
        className="d-block w-100"
        layout="fill"
        objectFit="contain"
      />
    </Col>
  )
}

export default Section1
