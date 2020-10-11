import React from 'react'
import SEO from "../components/seo"
import { Row, Col, Container } from 'reactstrap'
import PageTitle from '../components/page-title'
import { useStaticQuery, graphql } from 'gatsby'

const AboutUsPage = () => {
  const data = useStaticQuery(graphql`
  query AboutPageQuery {
    strapiAbout {
      title
      content
    }
  }
  `)
  let {title, content} = data.strapiAbout
  return (
    <>
      <SEO title="About Us" />
      <PageTitle title={title}/>
      <Container>
        <Row className="py-5">
          <Col md={6} className="m-auto">
            <p>{content}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutUsPage 
