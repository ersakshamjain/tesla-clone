import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText,backgroundImg}) {
  // console.log(props);
  return (
    <Wrap bgImage = {backgroundImg}>
      <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
              <LeftButton>
                  {leftBtnText}
              </LeftButton>
              {/* //right button does not shows if it dosent exits and the left button comes in center */}
              {rightBtnText && 
                  <RightButton>
                      {rightBtnText}
                  </RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src = "images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div` 
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical alignment
    align-items: center; //horizontal alignment
    background-image: ${props =>`url("/images/${props.bgImage}")`} //using inbuilt props passign functionality
    
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 769px){
    flex-direction: column;
  }

`
const LeftButton = styled.div`
  background-color: rgba(23, 26,32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  // margin-top: 20px
  height: 40px;
  overflow-x: hidden; //hides a specific axis overflow
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`


`