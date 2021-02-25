import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  NavbarText
} from 'reactstrap';
import './style.css'
import ButtonOne from './../button/index'
import {Link} from 'react-router-dom'

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><Link to="/"><img id="logoNeo" src="https://storage-first-jimeneab.s3.us-east-2.amazonaws.com/neoLogo.JPG"></img></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/students"><Link to="/students" className="abcd text-dark">Students</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/schools"><Link to="/schools" className="abcd text-dark">Schools</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/dashboard"><Link to="/dashboard" className="abcd text-dark">Dashboard</Link></NavLink>
            </NavItem>
          </Nav>
          <NavbarText><Link to="/logIn"><ButtonOne text='Log In' to="/login">Log In</ButtonOne></Link></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNav;