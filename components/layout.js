import { Container, Row } from 'react-bootstrap'

const Layout = ({ children, fluid }) => (
  <Container padding={0} fluid={fluid}>
    <Row>{children}</Row>
  </Container>
)

export default Layout
