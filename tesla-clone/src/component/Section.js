import React from 'react'
import styled from 'styled-components'
import Fade from '@stahl.luke/react-reveal'

function Section(props) {
    return (
        <Wrap bgimage={props.bgImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>    
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtn}
                        </LeftButton>
                        {props.rightBtn && 
                            <RightButton>
                                {props.rightBtn}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgimage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
`

const ItemText = styled.div`
    padding-top: 18vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media (max-width:786px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.95;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 12px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color:#000;
    opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px; 
    animation: animateDown infinite 1.5s;
    overflow-x:hidden;
`

const Buttons = styled.div``