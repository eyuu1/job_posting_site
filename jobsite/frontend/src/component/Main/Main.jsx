import React from 'react'
import styled from 'styled-components'
import Nav from '../Navbar/Nav'
import Info from './Info'

export default function Main() {
  return (
    <StyledMain>
   
    <Nav />
    <Info />
 
  </StyledMain>
  )
}



const StyledMain = styled.section`
  width: 100%;
  height: 100vh;
`;



