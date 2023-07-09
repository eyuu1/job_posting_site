import React from 'react'
import styled from 'styled-components'
import Link from "./Link";
// import Button from "../GlobalComponents/Button";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  // background-color: blue;

  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgba(35, 45, 57, 0.8);
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  }
`;






export default function LinkContainer() {
  return (
    <StyledDiv>
      <Link name="Home" linkTo="#" />
      <Link name="Jobs" linkTo="#" />
      <Link name="About Us" linkTo="#" />
      <Link name="Contact Us" linkTo="#" />
    </StyledDiv>
  )
}
