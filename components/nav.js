import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Nav = ({ global, type, color, title }) => {
  if (type === 'page') {
    return (
      <Navbar bg={color} variant={color}>
        <Container fluid id="navbar">
          <Link href="/" as="/">
            <Button variant="primary">Atrás</Button>
          </Link>
          <h3>{title}</h3>
        </Container>
      </Navbar>
    )
  } else {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container fluid id="navbar">
          <Link to="/">
            <Navbar.Brand href="/" className="navbar-brand">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '20%',
                }}
              >
                <Image
                  src={global?.logo?.url}
                  alt={global?.logo?.caption}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>{global ? global?.navTitle : ''}</p>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    )
  }
}

export default Nav
