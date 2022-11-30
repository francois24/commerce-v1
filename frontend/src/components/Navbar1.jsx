import React from 'react';
import {Container ,Button , Form , Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { BsCartPlus } from "react-icons/bs";
import './Navbar.css';
import { Link } from 'react-router-dom';
import './Cart.css';

const Navbar1 = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: '#DEF5E5'}}>
        <Container>
            <Navbar.Brand href="#home" className='text-dark fw-bold'>UNDERGRNDEV</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: 'teal'}}/>
            <Navbar.Collapse id="responsive-navbar-nav" className='button1'>

            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search"className="me-2"
            aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
            </Form>

            <Nav className="ms-auto">
            <Nav.Link className='text-dark' href="/">Home</Nav.Link>
            <Nav.Link className='text-dark' href="/Shop">Shop</Nav.Link>
            <Nav.Link className='text-dark' href="/Login">Login</Nav.Link>
            <Nav.Link className='text-dark' href="/Signup">Signup</Nav.Link>
            {/* <Nav.Link className='text-dark' eventKey={2} href="/Signup">
              Signup
              </Nav.Link> */}
              
              {/* <Nav.Link className='text-dark' href="#register"></Nav.Link> */}
              <Link class="btn cart1" to={'/cart'}>
                  <i class=""><BsCartPlus className='cart'/><span class="">0</span></i>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar1