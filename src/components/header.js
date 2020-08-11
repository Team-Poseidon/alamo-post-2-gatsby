import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler
} from 'reactstrap';
import Link from './link'
import Navigation from 'reactstrap-json-nav'
import navigation from '../data/navigation';
import logo from '../assets/images/logo_ap2.png'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt={props.siteTitle} height="45px"/>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Navigation
            json={navigation}
            link={Link}
            activeClassName="active"
          />
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
