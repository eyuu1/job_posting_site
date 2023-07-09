import styled from 'styled-components'


const Container = ({ children }) => (
  <StyledDiv> {children} </StyledDiv>
);

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1225px) {
    max-width: 100%;
  }
`;

export default Container;
