import React, { useState } from "react";
import styled from "styled-components";
import { DarkBackground } from "./DarkBackground";





const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--gunmetal);
  margin: 0 auto;  
`;

const Wrapper = styled.div`
display: block;
 max-width: 600px;
    background-color: var(--anti-flash-white);
  border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


    @media (min-width: 768px) {
     min-width: 600px;
    }
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--onyx);
`;

const Text = styled.p`
  font-size: 14px;
  text-align: center;
  word-break: break-word;
   overflow-wrap: break-word;
  color: var(--onyx);  
  padding: 1rem 5px;
`;


const ContactForm = styled.div`
  border-radius: 5px;
  margin: 1rem;
  padding: 20px;
`;



const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormField = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
    border: 1px solid var(--onyx);
    font-size: 1rem; 
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid var(--onyx);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px; 
`;



const FormButton = styled.button`
  padding: 0.75rem;
  background-color: var(--onyx);
  color: var(--anti-flash-white);
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;

  &:hover {
      background-color: var(--accent-color);
      color: var(--onyx);
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

      <Container id="contact">
        <Wrapper>

          <Title>Let's Connect</Title>
          <Text>
            Have a question or want to collaborate? Let's have a chat!
          </Text>
          <ContactForm>
            <Form onSubmit={handleSubmit}>
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
            </Form>
          </ContactForm>

        </Wrapper>
      </Container>


    </>
  );
};

export default ContactMe;
