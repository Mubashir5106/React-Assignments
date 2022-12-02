import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './/images/download.jpeg'
function Abc(){
    return(
        <>
    <Navbar class = "navbar" expand="lg">
    <Container>
      <Navbar.Brand href="#home" id = "olx">OLX</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
    )
}



function Xyz(){
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Changan UNI-T</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
        </Card.Text>
        <Card.Text><b>75,00,000</b></Card.Text>
        <Card.Text>gulshan-e-iqbal block 4 . 5 min ago</Card.Text>
      </Card.Body>
    </Card>
    )
    
}

export {Abc,Xyz}
