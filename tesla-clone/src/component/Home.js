import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section name="Model S"
                description="Order Online for Touchless Delivery"
                bgImg="model-s.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing inventory"
            />
            <Section name="Model Y"
                description="Order Online for Touchless Delivery"
                bgImg="model-y.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing inventory"
            />
            <Section name="Model 3"
                description="Order Online for Touchless Delivery"
                bgImg="model-3.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing inventory"
            />
            <Section name="Model X"
                description="Order Online for Touchless Delivery"
                bgImg="model-x.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing inventory"
            />
            <Section name="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                bgImg="solar-panel.jpg"
                leftBtn="Order now"
                rightBtn="Learn now"
            />
            <Section name="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                bgImg="solar-roof.jpg"
                leftBtn="Order now"
                rightBtn="Learn now"
            />
            <Section name="Accessories"
                description=""
                bgImg="accessories.jpg"
                leftBtn="shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
`