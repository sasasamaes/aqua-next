import { Col } from 'react-bootstrap'
import Image from 'next/image'

const Section1 = ({ homepage, lg }) => {
  return (
    <Col
      lg={lg}
      className="section1-container bg-dark text-light "
      style={{
  
        
      }}
    >
      <div className="image-container">
          <Image
                src={homepage?.section1?.background.url}
                alt={homepage?.section1?.background.caption}
            layout="fill"
            className="image"
          />
        </div>
    </Col>
  )
}

export default Section1
