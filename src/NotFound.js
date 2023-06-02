import React from 'react'
import { DarkBackground } from './DarkBackground';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';
import styled from 'styled-components';
import { RiErrorWarningLine } from 'react-icons/ri';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90vh;

`
const NotFounds = () => {
  return (
    <>
    <DarkBackground />
    <ResponsiveNavbar />
    <Container>
      <h1>404</h1>
      <RiErrorWarningLine className="icon" />
      <p>Page not found</p>
      </Container>
      <Footer />
    </>
  )
}

export default NotFounds