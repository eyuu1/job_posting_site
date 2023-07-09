import React from 'react'
import styled from 'styled-components'

export default function Button({ text }) {
  return (
    <StyledButton href="#">
    {text}
  </StyledButton>
  )
}


  
  const StyledButton = styled.a`
    text-decoration: none;
    display: inline-block;
    background: #00917C;
    color: #fff;
    font-size: 14px;
    padding: 12px 14px;
    transition: background 500ms ease-in-out;
    &:hover {
      background: #011910;
    }
  `;