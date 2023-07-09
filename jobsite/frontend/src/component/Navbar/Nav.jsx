import Container from '../GlobalComponents/Container'
import Logo from './Logo'
import styled from 'styled-components'
import LinkContainer from './LinkContainer';


const StyledNav = styled.div`
    width: 100%;
    position: absolute;
    top: 0;

    padding: 12px 0;
    background-color: #00917C;
    // height: 30px;
    display: flex;
    justify-content: space-between;
    
    

    .container {
        // display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100vh;
        #burgerMenu {
          color: #fff;
          cursor: pointer;
          display: none;
        }

      
      @media (max-width: 1000px) {
        background: rgba(35, 45, 57, 0.8);
        width: 100%;
        .container {
          flex-wrap: wrap;
          #burgerMenu {
            display: block;
            }
        }
    }
        
    


`;

export default function Nav() {

  return (
    <Container>
        <StyledNav>
        
            <Logo/>
            <LinkContainer/>

            
        </StyledNav>

    </Container>
    
  )
}




