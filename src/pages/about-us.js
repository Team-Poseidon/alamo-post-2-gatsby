import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'

export default ({data}) => {
  let {title, content} = data.strapiAbout
  return (
    <>
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

export const query = graphql`
query AboutPageQuery {
  strapiAbout {
    title
    content
  }
}
`
