import { Col } from 'react-bootstrap'
import Image from 'next/image'

const Section2 = ({ homepage, lg }) => {
  return (
    <Col lg={lg} className="section2-container bg-light ">
      <h3>{homepage && homepage.section2.title}</h3>
      <Col className="section2-img">
        <div
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          <div className="image-container">
            <Image
              src={homepage?.section2?.img.url}
              alt={homepage?.section2?.img.caption}
              layout="fill"
              className="image"
            />
          </div>
        </div>
      </Col>
      <Col className="section2-text bg-dark text-light">
        <p>{homepage && homepage.section2.description}</p>
      </Col>
    </Col>
  )
}

export default Section2
