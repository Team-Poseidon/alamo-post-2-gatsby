import React, { useState } from 'react'
import Button from './btn'
import { navigate } from 'gatsby'
import styled from 'styled-components'

function encode(data){
  return Object.keys(data).map( key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}

const FieldGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-items: stretch;
  justify-content: space-around;
  margin: 1rem 0;
`

const StyledInput = styled.input`
  min-height: 2em;
  border: 1px solid gray;
`
const StyledLabel = styled.label`
  margin: 0;
`

const StyledTextArea = styled.textarea`
  height: 200px;
  resize: none;
`

export default function Contact() {
  const [state, setState] = useState({}) 
  
  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch( error => alert(error))
  }


  return (
  <form name="contact"
   method="POST"
   action="/"
   data-netlify="true"
   data-netlify-honeypot="bot-field"
   onSubmit={handleSubmit}
  >
    <input type="hidden" name="form-name" aria-label="hidden" value="contact"/>

    <FieldGroup>
      <StyledLabel htmlFor="fullname">Full Name:</StyledLabel>
      <StyledInput type="text" name="fullname" aria-label="fullname" onChange={handleChange} />
    </FieldGroup>
    <FieldGroup>
      <StyledLabel htmlFor="email">Email:</StyledLabel>
      <StyledInput type="email" name="email" aria-label="email" onChange={handleChange} />
    </FieldGroup>
    <FieldGroup>
      <StyledLabel htmlFor="phone">Phone:</StyledLabel>
      <StyledInput type="text" name="phone" aria-label="phone" onChange={handleChange} />
    </FieldGroup>
    <FieldGroup>
      <StyledLabel htmlFor="comments">Comments:</StyledLabel>
      <StyledTextArea name="comments" aria-label="comments" maxLength="30" onChange={handleChange}></StyledTextArea>
    </FieldGroup>
    <FieldGroup>
      <Button type="submit">Submit</Button>
    </FieldGroup>
  </form>
  )
}