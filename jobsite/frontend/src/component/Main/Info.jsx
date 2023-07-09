import React from 'react'
import styled from 'styled-components'
import InfoDescription from './InfoDescription'
import HomeContentPic from './HomeContentPic'

const StyledInfo = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 50vw 50vw;
    // background-color: red;
    margin: 10vh auto;
    // padding: 0 5vw;

    // .InfoDescription{
    //     position: absolute;
    //     top: 0;
    //     padding: 0 50vw;
    // }

`;





export default function Info() {
  return (
    
    <StyledInfo>
        <InfoDescription/>
        <HomeContentPic/>
    </StyledInfo>
   

  )
}
