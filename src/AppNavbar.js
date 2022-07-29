import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/home">Signant Cart</NavbarBrand>
      <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
      <Nav className="justify-content-end" style={{marginLeft:'75%'}}  navbar>
        <NavItem>
          <NavLink href="/signup">SignUp</NavLink>
        </NavItem>
      </Nav>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" navbar>
          <NavItem>
            <NavLink href="https://github.com/Ramesha-Gowda">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;