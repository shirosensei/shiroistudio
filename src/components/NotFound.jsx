import React from 'react'
import { DarkBackground } from './DarkBackground';
import Footer from './Footer';
import Navbar from './Navbar';
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
    <Navbar />
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