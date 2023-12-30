import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
function Header({searchQuery,handleSearchInputChange,setCategory}) {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold">G-<Badge bg="warning">News</Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <NavDropdown title="Category" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={()=>setCategory("technology")}>
                   Technology
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  onClick={()=>setCategory("business")}>
                Business
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={()=>setCategory("health")}>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>setCategory("sports")}>
               Sports
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>setCategory("science")}>
               Science
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>setCategory("entertainment")}>
               Entertainment
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            />
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;