import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from './link';
import styled from "styled-components"

const Footer = styled.footer`
  padding: 3rem 0;
  background: #f8f9fa;
  a, a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a, a:hover {
        color: inherit;
      }
    }
  }
`

let SocialLink = ({Icon, path}) => (
  <a href={path} className="mr-2">
    <Icon size={30}/>
  </a>
)

let FooterLink = ({to, children}) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

export default () => (
  <Footer color="dark">
    <Container>
      <Row>
        <Col>
          <h5>Features</h5>
          <ul>
            <FooterLink to="/">Item</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Resources</h5>
          <ul>
            <FooterLink to="/">Item</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Company</h5>
          <ul>
            <FooterLink to="/">Item</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Contact Us</h5>
          <SocialLink Icon={FaFacebookSquare} path="https://www.facebook.com/alamopost2/" />
          <SocialLink Icon={FaInstagram} path="https://www.instagram.com/" />
          <SocialLink Icon={FaTwitter} path="https://www.twitter.com/" />
        </Col>
      </Row>
    </Container>
  </Footer>
)
