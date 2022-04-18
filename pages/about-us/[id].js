import Layout from '../../components/layout'
import { Row, Col, Carousel } from 'react-bootstrap'
import Nav from '../../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import useIsMounted from '../../hooks/useIsMounted'
import Link from 'next/link'
import { useRouter } from 'next/router'

function AboutUsId({ partner, global }) {
  const isMounted = useIsMounted()
  // const router = useRouter()

  return (
    <Layout global={global}>
      <Nav global={global} color="light" type="page" title={partner.title} />

      <Col className="about-page" key={`about-item`}>
        <Row>
          <Col lg={7}>
            <img
              src={partner?.logo?.url}
              alt={partner?.logo?.caption}
              className="about-logo"
            />
            <p>{partner.description}</p>
            {/* <Link href={partner.url}>{partner.url}</Link> */}
          </Col>
          <Col lg={5}>
            <Carousel>
              {partner &&
                partner?.slider?.map((slide, index) => (
                  <Carousel.Item key={`slide-${index}`}>
                    <img src={slide.url} alt={slide.caption} />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
          <Col lg={7} className="pt-4">
            <p>{partner.extraText}</p>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const url = 'https://aquacr-cms.herokuapp.com'

  const partnerResponse = await fetch(`${url}/partners/${params.id}`)
  const partnerResponseJson = await partnerResponse.json()

  const globalResponse = await fetch(`${url}/global`)
  const globalResponseJson = await globalResponse.json()

  return {
    props: {
      global: globalResponseJson,
      partner: partnerResponseJson,
    },
  }
}

export default AboutUsId
