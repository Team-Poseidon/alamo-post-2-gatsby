import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler
} from 'reactstrap';
import Link from './link'
import pageLinks from '../data/navigation';
import logo from '../assets/images/logo_ap2.png'
import styled from 'styled-components'
import Navigation from 'reactstrap-json-nav'


const StyledNavbar = styled(Navbar)`
  border-bottom: 8px solid rgb(64,75,137);
`

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavbar color="light" light expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt={props.siteTitle} height="90px"/>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Navigation
            json={pageLinks}
            link={Link}
            activeClassName="active"
          />
        </Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default Header;
