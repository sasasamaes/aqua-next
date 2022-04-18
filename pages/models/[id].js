import { useState } from 'react'
import Layout from '../../components/layout'
import { Row, Col, Button, Modal } from 'react-bootstrap'
import Nav from '../../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import useIsMounted from '../../hooks/useIsMounted'
import { useRouter } from 'next/router'
import Image from 'next/image'

function ModelsId({ model, global }) {
  const isMounted = useIsMounted()
  const router = useRouter()
  const { id } = router.query

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Layout global={global} fluid>
      <Nav global={global} color="dark" type="page" />

      <Col className="model-item-page bg-dark text-light" key={`model-item`}>
        <Row>
          <Col lg={8}>
            <div className="image-container">
              <Image
                src={model?.architecturalPlan?.url}
                alt={model?.architecturalPlan?.caption}
                layout="fill"
                className="image"
              />
            </div>
          </Col>
          <Col lg={3}>
            <h3>{model.title}</h3>
            <p>{model.price}</p>
            <p>{model.description}</p>

            <Button variant="primary" onClick={handleShow}>
              {model.btnText}
            </Button>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <iframe
                  title={`iframe-${id}`}
                  width="100%"
                  height="460"
                  src={`https://roundme.com/embed/${model?.userRoundme}/${model?.hotpointRoundme}`}
                  frameBorder="0"
                  webKitAllowFullScreen
                  mozAllowFullScreen
                  allowFullScreen
                ></iframe>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Col>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const url = 'https://aquacr-cms.herokuapp.com'

  const modelResponse = await fetch(`${url}/models/${params.id}`)
  const modelResponseJson = await modelResponse.json()

  const globalResponse = await fetch(`${url}/global`)
  const globalResponseJson = await globalResponse.json()

  return {
    props: {
      global: globalResponseJson,
      model: modelResponseJson,
    },
  }
}

export default ModelsId
