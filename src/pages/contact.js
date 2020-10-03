import React from 'react'
import { Col, Container } from 'reactstrap'
import ContactForm from '../components/form'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import ContactItem from '../components/contactItem'
import { graphql } from 'gatsby'


const ContactsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 3rem 0;
`
const FormContainer = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-flow: row wrap;
`

export default ({data}) => {
  let {address, email, phone} = data.site.siteMetadata
  return (
    <>
      <PageTitle title="Contact Us"/>
      <Container>
        <ContactsContainer>
          <ContactItem text={address} type="Address" Icon={FaMapMarkerAlt}/>
          <ContactItem text={email} type="Email" href={`mailto:${email}`}  Icon={FaEnvelope}/>
          <ContactItem text={phone} type="Phone" href={`tel:${phone}`} Icon={FaPhone}/>
        </ContactsContainer>
        <FormContainer>
          <Col md={6} className="m-auto">
            <h4 className="text-center text-secondary">Message Us</h4>
            <Hr/>
            <ContactForm/>
          </Col>
        </FormContainer>
      </Container>
    </>
  )
}

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        address
        email
        phone
      }
    }
  }
`
