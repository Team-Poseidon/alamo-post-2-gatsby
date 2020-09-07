import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background: #0046cc;
  color: white;
  padding: 8rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  text-align: center;
`

export default ({title}) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)
