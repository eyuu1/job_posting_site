import React from 'react'
import styled from 'styled-components'
import Button from '../GlobalComponents/Button'

const InfoText = styled.div`
//   width: 100%;
//   max-width: 900px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
//   z-index: 2;
  text-align: start;
  align-item: center;
  color: #0B3812;
  padding: 10vh 5vw;
 


  h3 {
    font-size: 64px;
    line-height: 78px;
    font-weight: 700;
    // margin: 36px 0;
    text-align: start;
    
    
  }
  
  p {
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    padding: 13vh 0;
    text-align: start;
    // letter-spacing: 1.2px;
  }

  .Button {
    padding-top: 200px;
    background-color: red;
    text-align: start;
  }


  @media (max-width: 1000px) {
    h3 {
      font-size: 25px;
    }
  }
`;

export default function InfoDescription() {
  return (

    <InfoText>
        <h3 className='headingtext'>Find your next adventure</h3>
        <p>Discover thousands of job opportunities from top employers and start your journey towards success today</p>
        <Button text="See Available Jobs" id='btn'/>
    </InfoText>
      
      
  )
}
