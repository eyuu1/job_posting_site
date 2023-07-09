import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
// background-color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 450;
  color: #fff;
  transition: color 600ms ease-in-out;
  &:first-of-type,
  &:hover {
    color: #ed563b;
  }
  @media (max-width: 1000px) {
    padding: 14px 0;
    width: 100%;
    font-size: 18px;
  }
`;



export default function Link({name , linkTo}) {
  return (
    <StyledLink href={linkTo}>
        {name}
    </StyledLink>
  )
}
