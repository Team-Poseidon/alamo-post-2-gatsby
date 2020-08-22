import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import Button from './btn'

export default () => (
  <form name="Contact Form" method="POST" netlify>
    <input type="hidden" name="form-name" value="Contact Form"/>
    <NormalField name="Full Name" ariaLabel="full-name" />
    <NormalField name="Email" ariaLabel="email" />
    <NormalField name="Phone Number" ariaLabel="phone" />
    <NormalField name="Comments" type="textarea" ariaLabel="comments" />
    <Button type="submit">Submit</Button>
  </form>
)
