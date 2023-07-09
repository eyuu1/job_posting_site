import logo from '../Images/Logo.jpg'
import styled from 'styled-components';

const StyledLogos = styled.img`
   height: 35px;
   width: 35px;
   padding-left: 2vw;
  //  background-color: red;
  
 `;


export default function Logo() {
  return (
    <StyledLogos src={logo} />
  );
}




