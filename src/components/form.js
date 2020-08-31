import React, { useState } from 'react'
import Button from './btn'
import { navigate } from 'gatsby'
import styled from 'styled-components'

function encode(data){
  return Object.keys(data).map( key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}

const FieldGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
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
      <label htmlFor="fullname">Full Name:</label>
      <input type="text" name="fullname" aria-label="fullname" onChange={handleChange} />
    </FieldGroup>
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" aria-label="email" onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="phone">Phone:</label>
      <input type="text" name="phone" aria-label="phone" onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="comments">Comments:</label>
      <textarea name="comments" aria-label="comments" onChange={handleChange}></textarea>
    </div>
    <div>
      <Button type="submit">Submit</Button>
    </div>
  </form>
  )
}