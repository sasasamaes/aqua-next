import { Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = ({ lg, partners }) => {
  return (
    <Col lg={lg} className="about-container bg-light container-fluid pb-5">
      <Row>
        <Col lg={12} className="about-banner bg-dark py-4 text-white">
          <Row>
            <Col lg={8}>
              <h3>QUIENES SOMOS</h3>
            </Col>
            <Col lg={3}>
              <a href="#form">
                <Button variant="primary" type="submit">
                  Contactanos
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={12} className="about-img center">
          <Row className="flex-column justify-content-center align-items-center">
            {partners.map((partner, index) => (
              <Col lg={4} className="border border-3 my-4 p-4 ">
                <Link
                  href={`/about-us/[id]`}
                  as={`/about-us/${partner.id}`}
                  key={index}
                  className="text-black"
                >
                  <>
                    <h3>{partner.title}</h3>
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        paddingBottom: '20%',
                      }}
                    >
                      <Image
                        src={partner.logo.url}
                        alt={partner.logo.caption}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>

                    {partner.image}
                  </>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default AboutUs
