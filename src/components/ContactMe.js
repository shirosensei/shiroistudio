import React, { useState } from "react";
import styled from "styled-components";
import { DarkBackground } from "./DarkBackground";





const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin-bottom: 4rem;
  background-color: var(--gunmetal);

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
  @media (min-width: 992px) {
    padding: 5rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 16px;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    /* Adjust input styles for the targeted screen sizes */
    font-size: 14px;
  }
`;


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 65%;
  border-radius: 5px;
  overflow: hidden;
  padding: 20px;

  @media (max-width: 768px) {
    width: 60%;
    height: 50%;
    padding: 1.5rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    margin: 1.5rem 0;
    padding: 4rem 0.75rem;
  }
`;



const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const FormField = styled.input`
  padding: 8px;
  margin-bottom: 12px;
  border-radius: 5px;
  
 
  &:hover {
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 255, .2);
  }

  &:focus{
  }

  @media (max-width: 768px) {
    width: 80%; 

    &:focus {
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 498px) {

    padding: 2px;
    font-size: 14px;
  }
`;

const FormTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 12px;
  height: 120px;
   
  &:hover {
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 255, .2);
  }

  &:focus{
  }

  @media (max-width: 768px) {

    &:focus {
    }
`;



const FormButton = styled.button`
  padding: 10px 20px;
  margin-top: 12px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 3.3px;
  width: 50%;

  @media only screen and (min-width: 320px) and (max-width: 498px) {
    padding: 8px 16px;
    font-size: 14px;
    text-align: center;
  }
`;

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or data processing here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>

        <DarkBackground />
        
        <ContactContainer id="contact">
          <ContactTitle>Let's Connect</ContactTitle>
          <ContactText>
            Have a question or want to collaborate? Let's have a chat!
          </ContactText>
          <FormContainer>
            <ContactForm onSubmit={handleSubmit}>
              <FormField
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
              />
              <FormField
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
              <FormTextarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Message"
              ></FormTextarea>
              <FormButton type="submit">Submit</FormButton>
            </ContactForm>
          </FormContainer>
        </ContactContainer>
   

    </>
  );
};

export default ContactMe;
