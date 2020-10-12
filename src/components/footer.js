import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from './link';
import styled from "styled-components"

const Footer = styled.footer`
  margin-top: 1.5rem;
  padding: 3rem 0;
  background: gold;
  border-top: 2px solid #4585fd;
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
    }
  }
`

const MediaLink = styled.a`
  color: #fff;
  > svg {
    color: ${props => props.color};
    background: ${props => props.bgColor};    
  }
`


let SocialLink = ({Icon, path, color, bgColor = "transparent"}) => (
  <MediaLink href={path} className="mr-2" color={color} bgColor={bgColor}>
    <Icon size={30}/>
  </MediaLink>
)

let FooterLink = ({to, children}) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

export default () => (
  <Footer>
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
            <FooterLink to="/financial-services">Financial Services</FooterLink>
            <FooterLink to="/health-services">Health Services</FooterLink>
            <FooterLink to="/veteran-services">Veteran Services</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Organizations</h5>
          <ul>
            <FooterLink to="/legion-riders">American Legion Riders</FooterLink>
            <FooterLink to="/soal">Sons of the American Legion</FooterLink>
            <FooterLink to="/legion-auxiliary">American Legion Auxiliary</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Contact Us</h5>
          <SocialLink Icon={FaFacebookSquare} color="#3B5998" path="https://www.facebook.com/alamopost2/" />
          <SocialLink Icon={FaInstagram} bgColor="linear-gradient(#feda77 1%, #f58529 19%, #dd2a7b 48%, #8134AF 77%, #515BD4 99%)" path="https://www.instagram.com/" />
          <SocialLink Icon={FaTwitter} color="#6CADDE" path="https://www.twitter.com/" />
        </Col>
      </Row>
    </Container>
  </Footer>
)
