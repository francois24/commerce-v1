import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Navbar = () => {
    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar>
      <MDBContainer fluid>
      <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto'>
          <input className='form-control' placeholder="Search Product" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>

    </MDBNavbar>
    </>
  )
}

export default Navbar