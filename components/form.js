import React, { useState, useEffect } from 'react'
import { useForm } from '@formspree/react'
import { Form, Button, Col, Toast } from 'react-bootstrap'
import Image from 'next/image'

const FormComponent = ({ homepage, lg, global }) => {
  const [state, handleSubmit] = useForm('mzborykr')

  const [showToast, setShowToast] = useState(false)
  const toggleShowToast = () => setShowToast(!showToast)

  useEffect(() => {
    if (state.succeeded) {
      toggleShowToast()
    }
    // eslint-disable-next-line
  }, [state.succeeded])

  return (
    <Col lg={lg} id="form" className="form-container bg-dark" padding={0}>
      <Col lg={12} Name="foclassrm-container-logo">
        <div
          style={{
            position: 'relative',
            width: '25%',
            paddingBottom: '5px',
            margin: '0 auto'
          }}
        >
          <img src={global?.logo2?.url} alt={global?.logo2?.caption} />
        </div>
      </Col>
      <Col lg={12} className="form-container-info text-light">
        <p>{homepage && homepage.form.description}</p>
        <h2>{homepage && homepage.form.price}</h2>
        <span>{homepage && homepage.form.caption}</span>
      </Col>
      <Col lg={12} className="form-container-form text-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control
              name="name"
              type="text"
              placeholder="Nombre Completo*"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control name="email" type="email" placeholder="Correo*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTel">
            <Form.Control name="tel" type="text" placeholder="Teléfono*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              name="description"
              type="text"
              placeholder="Motivo de interés*"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formComments">
            <Form.Control
              name="comments"
              as="textarea"
              rows={3}
              placeholder="Comentarios*"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={state.submitting}>
            {homepage && homepage.form.btnText}
          </Button>
        </Form>
      </Col>
      <Col lg={12} className="form-container-disclaimer text-light">
        <span className="text-light">{homepage && homepage.form.caption2}</span>
      </Col>
      <Toast onClose={toggleShowToast} show={showToast} animation={true}>
        <Toast.Header>
          <strong className="me-auto">Formulario Enviado</strong>
        </Toast.Header>
        <Toast.Body>Gracias por escribirnos.</Toast.Body>
      </Toast>
    </Col>
  )
}

export default FormComponent
