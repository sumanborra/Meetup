import styled from 'styled-components'

export const HomeContainer = styled.div`
    height: 100vh;
    
`
export const HomeSubContainer = styled.div`
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
export const HeadingNotRegistered = styled.h1`
    font-family: "Roboto";
    font-size: 52px;
    font-weight: 800;
    color: ${props => (props.isRegistered ? '#2563eb' : '#334155')};
`
export const ParaNotRegistered = styled.p`
    font-family: "Roboto";
    font-size: 26px;
    font-weight: 800;
    color:  #475569;
`
export const CustomButton = styled.button`
        background-color: #3b82f6;
        font-family: "Roboto";
        font-size: 18px;
        padding: 10px;
        color: #ffffff;
        border: none;
        border-radius: 10px;
        width: 150px;
        height: 40px;
        cursor: pointer;
`
export const RegisterNotImage = styled.img`
    height: 500px;
`
