import React from 'react'
import styled from 'styled-components'
import Logo from '../Images/HomeImg.jpg'


const StyledHomeImg = styled.img`
    height: 60vh;
    width: 48vw;
    right; 0;
    // position: relative; 
    max-width: 50vw;
    padding-top: 10vh;
`;  



export default function HomeContentPic() {
  return (
    <StyledHomeImg src={Logo} />
  )
}
