import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'
import styled from 'styled-components'

let StyledImg = styled(props => <Img {...props}/>)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  picture, img {
    box-shadow: 25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2);
    border-radius: .625rem;
    transition: 1s !important;
  }
`

let Benefit = ({title, content}) => (
  <div className="d-flex mb-4">
    <div className="ml-3">
      <h4>{title}</h4>
      <p className="m-0 text-muted">{content}</p>
    </div>
  </div>
)

let Benefits = ({data}) => (
  <Container className="py-5">
    <Row className="d-flex align-items-center">
      <Col md="6">
        <div className="mb-4">
          <h2 className="text-primary">Alamo Post 2</h2>
          <p className="text-muted"></p>
        </div>
        <Benefit title="About Us" content="We are a non-profit veteran oriented organization that has been a part of the San Antonio military community for over 20 years!"/>
        <Benefit title="Community Member" content="We serve the San Antonio community through our charitable fundraising events that focus on helping our fellow veterans and future leaders of our community"/>
      </Col>
      <Col md="6">
        <StyledImg fluid={data.file.childImageSharp.fluid} objectFit="contain" objectPosition="50% 50%"/>
      </Col>
    </Row>
  </Container>
)

export default () => (
  <StaticQuery
    query={graphql`
      query BenefitsQuery {
        file(relativePath: {eq: "services-image.jpg"}) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Benefits data={data}/>
    )}
  />
)
